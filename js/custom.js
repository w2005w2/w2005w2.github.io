// 定义图片数组
const imgs = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
    "/img/11.jpg",
    "/img/12.jpg",
    "/img/13.jpg",
    "/img/14.jpg",
    "/img/15.jpg",
    "/img/16.jpg",
];

// 随机选择一张图片
const luck_img = imgs[Math.floor(Math.random() * imgs.length)];

// 获取 banner 元素并修改其背景样式
const banner = document.getElementById('banner');
if (banner) {
    banner.style.background = `url(${luck_img}) center center / cover no-repeat`;
}