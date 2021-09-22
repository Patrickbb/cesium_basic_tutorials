// import './token.js';
import { flyToDegrees } from './funs.js';

// 設定Token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjhhOWUxNy1iMDVkLTRjOWMtYjVhZC0wMDM5NGFkODdkOGEiLCJpZCI6MTg4NzUsInNjb3BlcyI6WyJsZ24iLCJwciIsImFjdyIsImFzbCIsImFzciIsImFzdyIsImFzcyIsImdjIiwibHIiLCJsdyIsInRyIiwidHciLCJ1c2ciXSwiaWF0IjoxNjMyMzAwMTc3LCJleHAiOjE2MzI5MDQ5Nzd9.r-Z062ATWqFNKJsi25IqtKttYUGKHlpTuqNAb0L_qnA';

// 初始化圖台
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

// 設定按鈕功能
document.getElementById('btnFly')
    .addEventListener('click', event => flyToDegrees(viewer, 121.5, 23.5, 10000, 0, -90));