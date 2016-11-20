;(function (win) {
  var doc = win.document,
      docEl = doc.documentElement,
      dpr = win.navigator.appVersion.match(/iphone/gi) ? win.devicePixelRatio : 1,
      scale = 1 / dpr,
      tid = null; // 定时器

  var metaEl = doc.createElement('meta');
  metaEl.setAttribute('name', 'viewport');
  metaEl.setAttribute('content', 'initial-scale='+scale+', minimum-scale='+scale+', maximum-scale='+scale+', user-scalable=no');

  docEl.setAttribute('data-dpr', dpr);
  docEl.firstElementChild.appendChild(metaEl);

  function refreshRem () {
    var width = docEl.getBoundingClientRect().width;

    if (width > 750 * dpr) {
      width = 750 * dpr;
    }

    docEl.style.fontSize = width / 7.5 + 'px';
  }

  win.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 200);
  }, false);

  doc.addEventListener('DOMContentLoaded', function () {
    doc.body.style.fontSize = 12 * dpr + 'px';
  }, false);

  // 初始化rem
  refreshRem();
})(window);
