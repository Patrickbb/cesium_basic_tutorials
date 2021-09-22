import './token.js';
import { flyToDegrees } from './funs.js';

// 初始化圖台
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

// 設定按鈕功能
document.getElementById('btnFly')
    .addEventListener('click', event => flyToDegrees(viewer, 121.5, 23.5, 10000, 0, -90));