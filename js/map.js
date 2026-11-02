/* Sibahle Naturals - interactive shop map (contact page).
   Uses Leaflet (https://leafletjs.com) with OpenStreetMap tiles; no API key.
   Leaflet is loaded from cdnjs in contact.html before this file runs.

   How the pin is placed: the map opens on an approximate position in Central,
   Gqeberha. The script then asks OpenStreetMap's Nominatim search service
   (fetch, no key) for the shop address and moves the pin to the result. If
   the address is not found, or the request fails, the approximate pin stays.

   To fix the pin by hand: find the shop on https://www.openstreetmap.org,
   right-click it, choose "Show address", and copy the latitude and longitude
   into FALLBACK_POSITION below. */
(function () {
  'use strict';

  var container = document.getElementById('map');
  if (!container || typeof L === 'undefined') return; // the plain Google Maps link remains

  var FALLBACK_POSITION = [-33.9615, 25.6190]; // [latitude, longitude], approximate
  var SEARCHES = [
    '14 Bird Street, Central, Gqeberha, South Africa',
    'Bird Street, Central, Gqeberha, South Africa'
  ];

  var map = L.map(container, { scrollWheelZoom: false }).setView(FALLBACK_POSITION, 16);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var popup = document.createElement('div');
  var name = document.createElement('strong');
  name.textContent = 'Sibahle Naturals';
  popup.append(name, document.createElement('br'), '14 Bird Street, Central, Gqeberha');

  var marker = L.marker(FALLBACK_POSITION).addTo(map).bindPopup(popup).openPopup();

  function geocode(query) {
    var url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=za&q=' +
      encodeURIComponent(query);
    return fetch(url, { headers: { 'Accept': 'application/json' } })
      .then(function (response) {
        if (!response.ok) throw new Error('Geocoding failed');
        return response.json();
      })
      .then(function (results) {
        return results.length ? [parseFloat(results[0].lat), parseFloat(results[0].lon)] : null;
      });
  }

  // Try the full address first, then just the street
  SEARCHES.reduce(function (chain, query) {
    return chain.then(function (found) { return found || geocode(query); });
  }, Promise.resolve(null)).then(function (position) {
    if (position) {
      marker.setLatLng(position).openPopup();
      map.setView(position, 16);
    }
  }).catch(function () { /* keep the approximate pin */ });
})();