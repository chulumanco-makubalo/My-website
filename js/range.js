/* Sibahle Naturals - Our Range page.
   Builds the product cards from js/products.js (dynamic content) and adds a
   search box, a category filter and a sort menu. Cards are created with DOM
   methods (textContent), never innerHTML, so product text cannot inject markup. */
(function () {
  'use strict';

  var products = window.SIBAHLE_PRODUCTS;
  var list = document.getElementById('product-list');
  if (!list || !products) return;

  var searchInput = document.getElementById('product-search');
  var categorySelect = document.getElementById('product-category');
  var sortSelect = document.getElementById('product-sort');
  var resetButton = document.getElementById('product-reset');
  var count = document.getElementById('results-count');

  var sorters = {
    'name-asc': function (a, b) { return a.name.localeCompare(b.name); },
    'price-asc': function (a, b) { return window.lowestPrice(a) - window.lowestPrice(b) || a.name.localeCompare(b.name); },
    'price-desc': function (a, b) { return window.lowestPrice(b) - window.lowestPrice(a) || a.name.localeCompare(b.name); }
  };

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function buildCard(product) {
    var card = el('article', 'product');
    card.id = product.category;

    card.appendChild(el('p', 'product-category', product.categoryLabel));
    card.appendChild(el('h3', null, product.name));
    card.appendChild(el('p', null, product.description));

    var priceText = (product.sizes.length > 1 ? 'From ' : '') + window.formatRand(window.lowestPrice(product));
    card.appendChild(el('p', 'price', priceText));

    var sizeList = el('ul', 'size-list');
    product.sizes.forEach(function (size) {
      var item = el('li');
      item.appendChild(el('span', null, size.label + ' \u2013 ' + window.formatRand(size.price)));
      item.appendChild(el('span', 'stock stock--' + size.stock.toLowerCase().replace(/\s+/g, '-'), size.stock));
      sizeList.appendChild(item);
    });
    card.appendChild(sizeList);

    var link = el('a', 'button', 'Enquire About This');
    link.href = './enquiry.html?product=' + encodeURIComponent(product.slug);
    link.setAttribute('aria-label', 'Enquire about ' + product.name);
    card.appendChild(link);

    return card;
  }

  function render() {
    var term = searchInput.value.trim().toLowerCase();
    var category = categorySelect.value;

    var shown = products.filter(function (p) {
      var matchesCategory = category === 'all' || p.category === category;
      var sizeText = p.sizes.map(function (size) { return size.label; }).join(' ');
      var haystack = (p.name + ' ' + p.description + ' ' + p.categoryLabel + ' ' + sizeText).toLowerCase();
      return matchesCategory && (term === '' || haystack.indexOf(term) !== -1);
    }).sort(sorters[sortSelect.value]);

    list.replaceChildren.apply(list, shown.map(buildCard));

    if (shown.length === 0) {
      count.textContent = 'No products match your search. Try a different word or clear the filters.';
    } else {
      count.textContent = 'Showing ' + shown.length + ' of ' + products.length + ' products.';
    }
  }

  searchInput.addEventListener('input', render);
  categorySelect.addEventListener('change', render);
  sortSelect.addEventListener('change', render);

  resetButton.addEventListener('click', function () {
    searchInput.value = '';
    categorySelect.value = 'all';
    sortSelect.value = 'name-asc';
    render();
    searchInput.focus();
  });

  // Links from the home page use ?category=oils (only known categories are accepted)
  var requested = new URLSearchParams(window.location.search).get('category');
  var known = products.map(function (p) { return p.category; });
  if (requested && known.indexOf(requested) !== -1) {
    categorySelect.value = requested;
  }

  render();
})();