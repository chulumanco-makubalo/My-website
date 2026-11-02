/* Sibahle Naturals - one-question hair quiz on the home page.
   Recommends a product and links to the enquiry form with it pre-filled. */
(function () {
  'use strict';

  var form = document.getElementById('quiz-form');
  var result = document.getElementById('quiz-result');
  if (!form || !result) return;

  var picks = {
    moisture:   { name: 'Coil & Curl Oil',       slug: 'coil-curl-oil' },
    definition: { name: 'Curl Definition Cream', slug: 'curl-definition-cream' },
    cleanse:    { name: 'Gentle Wash',           slug: 'gentle-wash' },
    style:      { name: 'Styling Range',         slug: 'styling-range' }
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var chosen = form.querySelector('input[name="goal"]:checked');
    result.textContent = '';

    if (!chosen) {
      result.className = 'form-status failure';
      result.textContent = 'Please choose an option to get your recommendation.';
      return;
    }

    var pick = picks[chosen.value];
    var strong = document.createElement('strong');
    strong.textContent = pick.name;

    var link = document.createElement('a');
    link.href = './pages/enquiry.html?product=' + pick.slug;
    link.textContent = 'Enquire about it';

    result.className = 'form-status success';
    result.append('We recommend our ', strong, '. ', link);
  });
})();