/* Sibahle Naturals - product data.
   One list that feeds the Our Range page (js/range.js) and the enquiry form
   (js/forms.js), so a price or stock change is made in ONE place.

   SAMPLE DATA: the first size of the four original products uses the prices
   you gave (Coil & Curl Oil R120, Curl Definition Cream R180, Gentle Wash R150,
   Styling Range R130). The other products and sizes were created as realistic
   sample data. Before you submit, change them to match what the shop really
   sells, or delete the ones that do not exist.

   Each product has one or more sizes: { label, price (rand), stock }.
   stock can be "In stock", "Low stock" or "Out of stock". */
window.SIBAHLE_PRODUCTS = [
  {
    slug: 'coil-curl-oil',
    name: 'Coil & Curl Oil',
    category: 'oils',
    categoryLabel: 'Oils',
    description: 'A lightweight daily oil for shine, softness and scalp care.',
    sizes: [
      { label: '100 ml', price: 120, stock: 'In stock' },
      { label: '250 ml', price: 260, stock: 'In stock' }
    ]
  },
  {
    slug: 'scalp-care-oil',
    name: 'Scalp Care Oil',
    category: 'oils',
    categoryLabel: 'Oils',
    description: 'A light oil blend for massaging into the scalp between washes.',
    sizes: [
      { label: '50 ml', price: 95, stock: 'In stock' },
      { label: '100 ml', price: 160, stock: 'Low stock' }
    ]
  },
  {
    slug: 'curl-definition-cream',
    name: 'Curl Definition Cream',
    category: 'creams',
    categoryLabel: 'Creams',
    description: 'Hold and definition for 4C and afro-textured curls.',
    sizes: [
      { label: '250 ml', price: 180, stock: 'In stock' },
      { label: '500 ml', price: 320, stock: 'In stock' }
    ]
  },
  {
    slug: 'deep-conditioning-mask',
    name: 'Deep Conditioning Mask',
    category: 'creams',
    categoryLabel: 'Creams',
    description: 'A rich weekly treatment that leaves hair soft and easy to detangle.',
    sizes: [
      { label: '250 ml', price: 210, stock: 'In stock' }
    ]
  },
  {
    slug: 'gentle-wash',
    name: 'Gentle Wash',
    category: 'wash',
    categoryLabel: 'Wash',
    description: "A gentle, organic cleanse that's kind to sensitive scalps.",
    sizes: [
      { label: '250 ml', price: 150, stock: 'In stock' },
      { label: '500 ml', price: 270, stock: 'In stock' }
    ]
  },
  {
    slug: 'moisture-conditioner',
    name: 'Moisture Conditioner',
    category: 'wash',
    categoryLabel: 'Wash',
    description: 'A creamy rinse-out conditioner to follow your wash day cleanse.',
    sizes: [
      { label: '250 ml', price: 160, stock: 'In stock' },
      { label: '500 ml', price: 290, stock: 'Low stock' }
    ]
  },
  {
    slug: 'styling-range',
    name: 'Styling Range',
    category: 'styling',
    categoryLabel: 'Styling',
    description: 'Everyday styling products to hold and finish your look.',
    sizes: [
      { label: '150 ml', price: 130, stock: 'In stock' }
    ]
  },
  {
    slug: 'leave-in-hair-mist',
    name: 'Leave-In Hair Mist',
    category: 'styling',
    categoryLabel: 'Styling',
    description: 'A light spray to refresh curls and add moisture between wash days.',
    sizes: [
      { label: '200 ml', price: 110, stock: 'In stock' }
    ]
  },
  {
    slug: 'edge-control',
    name: 'Edge Control',
    category: 'styling',
    categoryLabel: 'Styling',
    description: 'A smooth, flake-free hold for neat edges and sleek styles.',
    sizes: [
      { label: '50 ml', price: 85, stock: 'Out of stock' },
      { label: '100 ml', price: 140, stock: 'In stock' }
    ]
  }
];

/* Formats a number as South African rand, e.g. 120 -> "R120" */
window.formatRand = function (amount) {
  return 'R' + amount.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
};

/* Lowest price across a product's sizes (used for "From R95" and sorting) */
window.lowestPrice = function (product) {
  return Math.min.apply(null, product.sizes.map(function (s) { return s.price; }));
};