(function(d, w) {
    const documentEl = d.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            const clientWidth = documentEl.clientWidth;
            if (!clientWidth) return;
            documentEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };

    if (!d.addEventListener) return;
    w.addEventListener(resizeEvt, recalc, false);
    d.addEventListener('DOMContentLoaded', recalc, false);
    d.addEventListener('orientationchange', recalc, false);
    d.addEventListener('resize', recalc, false);
})(document, window)