/* Sibahle Naturals - shared behaviour for every page.
   1. Hamburger navigation  2. Date and live clock
   3. Accordions            4. Image lightbox
   5. Scroll animation
   Written for this project; patterns follow MDN Web Docs guidance on
   <dialog> and ARIA disclosure buttons (add to the Harvard reference list). */
(function () {
  'use strict';

  /* 1. Hamburger navigation ------------------------------- */
  var burger = document.querySelector('.hamburger');
  var nav = document.getElementById('primary-nav');

  if (burger && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('active', open);
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
    };

    burger.addEventListener('click', function () {
      setOpen(!nav.classList.contains('active'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        setOpen(false);
        burger.focus();
      }
    });

    // Reset when the window grows past the mobile breakpoint
    window.matchMedia('(min-width: 600px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* 2. Date stamp and live clock -------------------------- */
  var dateEl = document.getElementById('datestamp');
  var timeEl = document.getElementById('time');

  function updateClock() {
    var now = new Date();
    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString('en-ZA', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      });
    }
    if (timeEl) {
      timeEl.textContent = now.toLocaleTimeString('en-ZA', { hour12: false });
    }
  }

  if (dateEl || timeEl) {
    updateClock();
    setInterval(updateClock, 1000);
  }

  /* 3. Accordions ----------------------------------------- */
  document.querySelectorAll('.accordion').forEach(function (button) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) return;

    var setPanel = function (open) {
      button.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    };

    // Content stays visible if JavaScript fails; JS collapses it on load.
    setPanel(button.hasAttribute('data-open'));

    button.addEventListener('click', function () {
      setPanel(button.getAttribute('aria-expanded') !== 'true');
    });
  });

  /* 5. Scroll animation: sections fade in as they enter the screen.
        Skipped for visitors who prefer reduced motion. -------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('main > section').forEach(function (section) {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }

  /* 4. Image lightbox ------------------------------------- */
  var triggers = document.querySelectorAll('.lightbox-trigger');

  if (triggers.length && typeof HTMLDialogElement === 'function') {
    var dialog = document.createElement('dialog');
    dialog.className = 'lightbox';
    dialog.setAttribute('aria-label', 'Enlarged image');

    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox-close';
    closeBtn.setAttribute('aria-label', 'Close enlarged image');
    closeBtn.textContent = '×';

    var bigImg = document.createElement('img');
    var caption = document.createElement('p');
    caption.className = 'lightbox-caption';

    dialog.append(closeBtn, bigImg, caption);
    document.body.appendChild(dialog);

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var thumb = trigger.querySelector('img');
        var figcaption = trigger.closest('figure') && trigger.closest('figure').querySelector('figcaption');
        bigImg.src = thumb.currentSrc || thumb.src;
        bigImg.alt = thumb.alt;
        caption.textContent = figcaption ? figcaption.textContent : '';
        dialog.showModal();
      });
    });

    closeBtn.addEventListener('click', function () { dialog.close(); });
    // Click on the dark backdrop closes it; Esc is handled by <dialog>
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  }
})();