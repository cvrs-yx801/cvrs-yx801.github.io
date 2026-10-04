(function () {
  'use strict';
  var toggle = document.querySelector('.theme-toggle');
  var control = document.querySelector('.theme-control');

  function updateThemeControl() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    var label = dark ? 'Switch to light mode' : 'Switch to dark mode';
    toggle.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    toggle.title = label;
    toggle.setAttribute('aria-label', label);
  }

  if (window.cvrsTheme && toggle) {
    control.hidden = false;
    updateThemeControl();
    toggle.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      window.cvrsTheme.setPreference(dark ? 'light' : 'dark');
    });
    window.addEventListener('cvrs-theme-change', updateThemeControl);
  }

  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      document.documentElement.classList.add('theme-ready');
    });
  });
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}());
