var params = {
    "appName": "geometry", "width": 1000, "height": 700, "showToolBar": true, "showAlgebraInput": true, "showMenuBar": true,
    "scaleContainerClass": "ggb-container", "allowUpscale": true, "language": "russian"
};

var ggbApplet = new window.GGBApplet(params, true);

window.addEventListener("load", function () {
    ggbApplet.inject("ggb-element");
});

