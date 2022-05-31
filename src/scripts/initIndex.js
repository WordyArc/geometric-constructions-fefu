var params = {
    "appName": "geometry", "width": 1200, "height": 700, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true,
    "scaleContainerClass": "ggb-container", "allowUpscale": true
};

var ggbApplet = new window.GGBApplet(params, true);

window.addEventListener("load", function () {
    ggbApplet.inject("ggb-element");
});

