(function (win, doc) {
    function fixViewport (width) {
        var docEl = doc.documentElement;
        var metaEl = doc.querySelector('meta[name="viewport"]');

        //由于页面初始设置了viewport的width=device-width,所以此处docEl.clientWidth即是屏幕的设备宽度（同时判断clientHeight以较小值为准）
        var clientWidth = Math.min(docEl.clientWidth, docEl.clientHeight);
        var scale, content;

        var dpr = win.devicePixelRatio || 1;
        // 设置data-dpr属性，留作css hack设置元素的font-size用
        docEl.setAttribute('data-dpr', dpr);
        docEl.style.fontSize = 100 * (clientWidth * dpr / width) + "px";

        scale = 1 / dpr;
        content = 'width=' + clientWidth * dpr + ',initial-scale=' + scale + ',maximum-scale=' + scale +
                    ', minimum-scale=' + scale;
        // 使用css hack的方式去写不同dpr下的font-size
        metaEl.setAttribute('content', content);
    }

    fixViewport('640');
}(window, document));