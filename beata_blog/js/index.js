var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_yvbgFp.json'
    // animationData: animationData,
})
var params = {
    container: document.getElementById('animation'),  //播放的位置
    renderer: 'svg', 
    loop: false, //是否循环播放
    autoplay: true, //是否自动播放
    path: 'https://assets10.lottiefiles.com/packages/lf20_4ENWTV.json' // 加载json的文件名
};