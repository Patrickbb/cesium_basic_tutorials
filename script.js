// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token from your ion account

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMTdkZGUxNi1kMTg5LTQxNjQtYjFiMi1hZDFiOTMxMjlhNjIiLCJpZCI6NjczMDUsImlhdCI6MTY0NzMyMTM0MX0.kJuSMcamqwiDhWSsTKng0wk3QAvB0OsdHHHFeMWhCOM';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(121.552039, 24.87986, 1500)
});
const addLabel = (text, lon, lat) => {
    viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(lon, lat),
        label: {
            text: text,
        },
    });
};

//   fetch(
//     "https://home.weatherangel.com.tw/AWS_API/sensor_hourly.php?station_id=211003&date=2022-03-02&days=1&set_max_tx=30&set_min_tx=15"
//   )
//     .then(response => response.json())
//     .then(json => {

//       json.map(e => {
//         addLabel(
//           e.station_id,
//           121.552039,
//           24.87986
//         );
//       });
//     });


//http://127.0.0.1:5500/Data.json

fetch(
    "http://127.0.0.1:5500/Data.json")
    .then(response => response.json())
    .then(json => {
            addLabel(
                data[0].station_id,
                data[0].lon,
                data[0].lat
            );
    });

    fetch(
        "http://127.0.0.1:5500/Data.json")
        .then(response => response.json())
        .then(json => {
                addLabel(
                    data[1].station_id,
                    data[1].lon,
                    data[1].lat
                );
        });