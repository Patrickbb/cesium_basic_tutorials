// import './token.js';
import { flyTo, flyToDegrees, getLocation, pick3DModel, pin, place3DModel, zoomIn, zoomOut } from './funs.js';

// 設定Token
// Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjhhOWUxNy1iMDVkLTRjOWMtYjVhZC0wMDM5NGFkODdkOGEiLCJpZCI6MTg4NzUsInNjb3BlcyI6WyJsZ24iLCJwciIsImFjdyIsImFzbCIsImFzciIsImFzdyIsImFzcyIsImdjIiwibHIiLCJsdyIsInRyIiwidHciLCJ1c2ciXSwiaWF0IjoxNjMyMzAwMTc3LCJleHAiOjE2MzI5MDQ5Nzd9.r-Z062ATWqFNKJsi25IqtKttYUGKHlpTuqNAb0L_qnA';

// 初始化圖台
const viewer = new Cesium.Viewer('cesiumContainer', {
    shouldAnimate: true,
    timeline: false,
    animation: false,
    shadow: false,
    infoBox: false,
    selectionIndicator: false,
    geocoder: false,
    homeButton: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    sceneModePicker: false,
});
viewer._cesiumWidget._creditContainer.style.display = 'none';

// 設定按鈕功能
const setHandler = (e, h) => {
    document.getElementById(e).addEventListener('click', h);
}

setHandler('btnZoomIn', e => zoomIn(viewer, 0.8));
setHandler('btnZoomOut', e => zoomOut(viewer, 1.2));
setHandler('btnFlyTo', e => flyTo(viewer, 121.5045,23.5,100));
setHandler('btnGetLocation', e => getLocation(viewer));
setHandler('btnPin', e => pin(viewer));
setHandler('btnPlace3DModel', e => place3DModel(viewer));
setHandler('btnPick3DModel', e => pick3DModel(viewer));