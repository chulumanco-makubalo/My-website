/* Sibahle Naturals - forms: validation, enquiry reply and contact email.

   Every <form data-validate> is handled here.
   1. Client-side validation with inline error messages (required fields,
      email, South African phone number, whole-number quantity, collection date,
      minimum lengths).
   2. On a valid submit, a form-specific handler runs:
        data-handler="enquiry" - shows a reply with cost and availability from
                                 js/products.js and sends the data with fetch()
                                 (AJAX), without reloading the page.
        data-handler="contact" - compiles the message into an email to RECIPIENT
                                 and opens the visitor's email app to send it.

   AJAX endpoint: the enquiry form posts to the URL in its data-endpoint
   attribute (e.g. a Formspree or Netlify Forms address). While that attribute
   is empty the form runs in demo mode: it simulates the request so the
   behaviour can be shown, but nothing is sent anywhere. */
(function () {
  'use strict';

  var RECIPIENT = 'hello@sibahlenaturals.co.za';
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
  // South African numbers: 0 or +27, then 9 digits that do not start with 0
  var SA_PHONE_PATTERN = /^(?:\+27|0)[1-9]\d{8}$/;
  var MAX_DAYS_AHEAD = 90;

  var products = window.SIBAHLE_PRODUCTS || [];

  /* ---------- helpers ---------- */
  function findProduct(slug) {
    for (var i = 0; i < products.length; i++) {
      if (products[i].slug === slug) return products[i];
    }
    return null;
  }

  function el(tag, text, className) {
    var node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function findSize(product, label) {
    if (!product) return null;
    for (var i = 0; i < product.sizes.length; i++) {
      if (product.sizes[i].label === label) return product.sizes[i];
    }
    return product.sizes[0];
  }

  function startOfToday() {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function toIsoDate(d) {
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + month + '-' + day;
  }

  function setStatus(status, kind, content) {
    if (!status) return;
    status.className = 'form-status' + (kind ? ' ' + kind : '');
    status.replaceChildren.apply(status, [].concat(content));
  }

  /* ---------- validation ---------- */
  function setError(field, message) {
    var out = document.getElementById(field.id + '-error');
    if (out) out.textContent = message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
  }

  function isRequired(field) {
    if (field.required) return true;
    // data-required-when="enq_topic:products" = required only when that field has that value
    if (field.dataset.requiredWhen) {
      var parts = field.dataset.requiredWhen.split(':');
      var other = document.getElementById(parts[0]);
      if (!other) return false;
      return parts[1] === '*' ? other.value !== '' : other.value === parts[1];
    }
    return false;
  }

  function dateMessage(value) {
    var chosen = new Date(value + 'T00:00:00');
    var today = startOfToday();
    var latest = new Date(today);
    latest.setDate(latest.getDate() + MAX_DAYS_AHEAD);

    if (isNaN(chosen.getTime())) return 'Please enter a valid date.';
    if (chosen < today) return 'Please choose today or a later date.';
    if (chosen > latest) return 'Please choose a date within the next ' + MAX_DAYS_AHEAD + ' days.';
    if (chosen.getDay() === 0) return 'We are closed on Sundays. Please choose Monday to Saturday.';
    return '';
  }

  function validateField(field) {
    var value = field.value.trim();
    var label = field.dataset.label || 'This field';
    var message = '';

    if (field.disabled) {
      setError(field, '');
      return true;
    }

    if (field.validity && field.validity.badInput) {
      message = 'Please enter a valid ' + label.toLowerCase() + '.';
    } else if (isRequired(field) && value === '') {
      message = label + ' is required.';
    } else if (value !== '') {
      if (field.type === 'email' && !EMAIL_PATTERN.test(value)) {
        message = 'Please enter a valid email address, e.g. name@example.com.';
      } else if (field.dataset.type === 'sa-phone' &&
                 !SA_PHONE_PATTERN.test(value.replace(/[\s\-()]/g, ''))) {
        message = 'Please enter a valid South African number, e.g. 041 019 2834 or +27 41 019 2834.';
      } else if (field.type === 'date') {
        message = dateMessage(value);
      } else if (field.type === 'number') {
        var n = Number(value);
        if (!Number.isInteger(n)) {
          message = label + ' must be a whole number.';
        } else if (field.min !== '' && n < Number(field.min)) {
          message = label + ' must be at least ' + field.min + '.';
        } else if (field.max !== '' && n > Number(field.max)) {
          message = label + ' must be no more than ' + field.max + '.';
        }
      } else if (field.minLength > 0 && value.length < field.minLength) {
        message = label + ' must be at least ' + field.minLength + ' characters.';
      }
    }

    setError(field, message);
    return message === '';
  }

  function collect(form) {
    var data = {};
    new FormData(form).forEach(function (value, key) {
      data[key] = typeof value === 'string' ? value.trim() : value;
    });
    return data;
  }

  /* ---------- AJAX submission ---------- */
  function sendAjax(form, data) {
    var endpoint = form.dataset.endpoint;

    if (!endpoint) {
      // Demo mode: no server yet, so wait briefly like a real request would
      return new Promise(function (resolve) { setTimeout(resolve, 700); });
    }

    var body = new URLSearchParams(data);
    if (form.getAttribute('name')) body.set('form-name', form.getAttribute('name')); // Netlify Forms

    return fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
      body: body.toString()
    }).then(function (response) {
      if (!response.ok) throw new Error('Request failed: ' + response.status);
    });
  }

  /* ---------- enquiry form: reply with cost and availability ---------- */
  function buildEnquiryReply(data) {
    var firstName = (data.enq_name || '').split(' ')[0];
    var heading = el('p', 'Thank you, ' + firstName + '. Your enquiry has been received.', 'reply-heading');
    var lines = [];
    var product = findProduct(data.enq_product);

    if (product) {
      var size = findSize(product, data.enq_size);
      var quantity = parseInt(data.enq_quantity, 10) || 1;
      var cost = window.formatRand(size.price) + ' each';
      if (quantity > 1) {
        cost += ' \u00D7 ' + quantity + ' = ' + window.formatRand(size.price * quantity);
      }
      lines.push(product.name + ' (' + size.label + '): ' + cost + '.');
      lines.push('Availability: ' + size.stock + '.');

      var pickup = 'You can collect from 14 Bird Street, Central, Gqeberha (Mon\u2013Fri 9:00 AM\u20135:00 PM, Sat 9:00 AM\u20131:00 PM)';
      if (data.enq_date) {
        pickup += '. Requested collection date: ' + new Date(data.enq_date + 'T00:00:00')
          .toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      }
      lines.push(pickup + '.');
    } else if (data.enq_topic === 'wholesale') {
      lines.push('Our team will contact you about wholesale and stockist arrangements.');
    } else if (data.enq_topic === 'advice') {
      lines.push("We'll recommend products for your hair type.");
    } else if (data.enq_topic === 'order') {
      lines.push("We'll check your order or collection and confirm the details.");
    }

    lines.push('We will confirm by email to ' + data.enq_email + ' within 2 business days.');

    return [heading].concat(lines.map(function (line) { return el('p', line); }));
  }

  function enquiryHandler(form, data, status, reset) {
    var reply = buildEnquiryReply(data);
    setStatus(status, 'pending', 'Sending your enquiry…');

    sendAjax(form, data).then(function () {
      reset();
      setStatus(status, 'success', reply);
    }).catch(function () {
      setStatus(status, 'failure', 'Sorry, your enquiry could not be sent. Please try again, or email ' + RECIPIENT + '.');
    });
  }

  /* ---------- contact form: compile an email ---------- */
  function contactHandler(form, data, status, reset) {
    var lines = [
      'Name: ' + data.con_name,
      'Email: ' + data.con_email,
      'Phone: ' + (data.con_phone || 'not given'),
      'Type of message: ' + data.con_type,
      '',
      data.con_message
    ];
    var mailto = 'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent('Website message: ' + data.con_type) +
      '&body=' + encodeURIComponent(lines.join('\n'));

    var link = el('a', 'open the email');
    link.href = mailto;

    reset();
    setStatus(status, 'success', [
      'Thank you, ' + data.con_name.split(' ')[0] + '! Your email app should open with your message ready to send to ' + RECIPIENT + '. ',
      'If it does not, ',
      link,
      '.'
    ]);
    window.location.href = mailto;
  }

  var handlers = { enquiry: enquiryHandler, contact: contactHandler };

  /* ---------- wire up every validated form ---------- */
  document.querySelectorAll('form[data-validate]').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var fields = Array.prototype.slice.call(form.querySelectorAll('input, select, textarea'));

    fields.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
      field.addEventListener('change', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
    });

    function reset() {
      form.reset();
      fields.forEach(function (f) { f.removeAttribute('aria-invalid'); });
      fields.forEach(function (f) {
        var out = document.getElementById(f.id + '-error');
        if (out) out.textContent = '';
      });
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      setStatus(status, '', '');

      var results = fields.map(validateField);
      var firstBad = fields[results.indexOf(false)];

      if (firstBad) {
        setStatus(status, 'failure', 'Please fix the highlighted fields and try again.');
        firstBad.focus();
        return;
      }

      var handler = handlers[form.dataset.handler];
      if (handler) {
        handler(form, collect(form), status, reset);
      } else {
        reset();
        setStatus(status, 'success', form.dataset.success || 'Thank you! Your message has been received.');
      }
    });
  });

  /* ---------- enquiry form set-up ---------- */
  var enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    // Fill the product list from the shared data
    var productSelect = document.getElementById('enq_product');
    var sizeSelect = document.getElementById('enq_size');

    products.forEach(function (p) {
      var option = document.createElement('option');
      option.value = p.slug;
      option.textContent = p.name;
      productSelect.appendChild(option);
    });

    // The size list depends on the chosen product
    function fillSizes() {
      var product = findProduct(productSelect.value);
      sizeSelect.replaceChildren();

      var first = document.createElement('option');
      first.value = '';
      first.textContent = product ? '--Choose a size--' : '--Choose a product first--';
      sizeSelect.appendChild(first);

      if (product) {
        product.sizes.forEach(function (size) {
          var option = document.createElement('option');
          option.value = size.label;
          option.textContent = size.label + ' \u2013 ' + window.formatRand(size.price) + ' (' + size.stock + ')';
          sizeSelect.appendChild(option);
        });
      }
      sizeSelect.disabled = !product;
    }

    productSelect.addEventListener('change', fillSizes);
    enquiryForm.addEventListener('reset', function () { setTimeout(fillSizes, 0); });
    fillSizes();

    // Collection date: today up to 90 days ahead
    var dateInput = document.getElementById('enq_date');
    var today = startOfToday();
    var latest = new Date(today);
    latest.setDate(latest.getDate() + MAX_DAYS_AHEAD);
    dateInput.min = toIsoDate(today);
    dateInput.max = toIsoDate(latest);

    // Arriving from the range page or the quiz: ?product=gentle-wash
    var slug = new URLSearchParams(window.location.search).get('product');
    var chosen = slug && findProduct(slug);
    if (chosen) {
      productSelect.value = chosen.slug;
      fillSizes();
      sizeSelect.value = chosen.sizes[0].label;
      document.getElementById('enq_topic').value = 'products';
      var message = document.getElementById('enq_message');
      if (message.value === '') {
        message.value = "Hi, I'd like to know about availability and pricing for the " + chosen.name + '.';
      }
    }
  }
})();