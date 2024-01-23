require([
    "esri/WebMap",
    "esri/layers/FeatureLayer",
    "esri/views/MapView",
    "esri/widgets/Legend"
], (WebMap, FeatureLayer, MapView, Legend) => {

    const url = "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/FatalAccidents2017/FeatureServer";

    const layer = new FeatureLayer({
        title: "Fatal car accidents (2017)",
        url
    });


    const colors = ["rgba(115, 0, 115, 0)", "#820082", "#910091", "#a000a0", "#af00af", "#c300c3", "#d700d7", "#eb00eb", "#ff00ff", "#ff58a0", "#ff896b", "#ffb935", "#ffea00"];

    layer.renderer = {
        type: "heatmap",
        colorStops: [
        { color: colors[0], ratio: 0 },
        { color: colors[1], ratio: 0.083 },
        { color: colors[2], ratio: 0.166 },
        { color: colors[3], ratio: 0.249 },
        { color: colors[4], ratio: 0.332 },
        { color: colors[5], ratio: 0.415 },
        { color: colors[6], ratio: 0.498 },
        { color: colors[7], ratio: 0.581 },
        { color: colors[8], ratio: 0.664 },
        { color: colors[9], ratio: 0.747 },
        { color: colors[10], ratio: 0.83 },
        { color: colors[11], ratio: 0.913 },
        { color: colors[12], ratio: 1 }
        ],
        radius: 18,
        maxDensity: 0.04625,
        minDensity: 0
    };


    const map = new WebMap({
        basemap: {
        portalItem: {
            id: "466f3f43c231453c938c6776777b89e2"
        }
        },
        layers: [ layer ]
    });

    const view = new MapView({
        container: "viewDiv",
        center: [-117.79621, 33.91474],
        scale: 1155581,
        constraints: {
        snapToZoom: false,
        minScale: 4622324,
        maxScale: 1155500
        },
        map
    });

    view.ui.add(
        new Legend({
        view
        }),
    "top-right");
        
});