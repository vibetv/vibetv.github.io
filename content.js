(function() {
  const adSelectors = [
    'iframe',        // Banyak iklan menggunakan iframe
    '.ad',           // Banyak iklan menggunakan class "ad"
    '.ads',          // Variasi lain dari class "ad"
    '.advertisement', // Class umum lain untuk iklan
    '#ad',           // ID umum untuk iklan
    '#ads',          // Variasi lain dari ID untuk iklan
    '[id^="ad-"]',   // ID yang dimulai dengan "ad-"
    '[class^="ad-"]' // Class yang dimulai dengan "ad-"
  ];

  adSelectors.forEach(selector => {
    const ads = document.querySelectorAll(selector);
    ads.forEach(ad => {
      ad.style.display = 'none';
    });
  });
})();
