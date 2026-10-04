/* Run before styles load to avoid flashing the wrong theme. */
(function () {
  'use strict';
  var key = 'cvrs-theme';
  var preference = 'system';
  var media = window.matchMedia('(prefers-color-scheme: dark)');
  try {
    var saved = window.localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) { /* Storage may be unavailable in private or file browsing. */ }

  function apply() {
    var theme = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]').setAttribute('content', theme === 'dark' ? '#181a1d' : '#ffffff');
    window.dispatchEvent(new Event('cvrs-theme-change'));
  }
  window.cvrsTheme = {
    getPreference: function () { return preference; },
    setPreference: function (next) {
      if (['system', 'light', 'dark'].indexOf(next) === -1) return;
      preference = next;
      try {
        if (next === 'system') window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, next);
      } catch (_) { /* The current session still uses the selected theme. */ }
      apply();
    }
  };
  if (media.addEventListener) media.addEventListener('change', apply);
  else media.addListener(apply);
  window.addEventListener('storage', function (event) {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : 'system';
    apply();
  });
  apply();
}());
