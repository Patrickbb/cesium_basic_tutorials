// 輸入下列參數：
//      圖台(viewer)
//      經度(longitude)
//      緯度(latitude)
//      高層(elevation)
//      方位角(heading)
//      俯仰角(pitch)
// 相機飛至指定位置。
export function flyToDegrees(viewer, longitude, latitude, elevation, heading, pitch) {
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, elevation),
        orientation: {
            heading: Cesium.Math.toRadians(heading),
            pitch: Cesium.Math.toRadians(pitch),
        }
    });
}