auto.waitFor();
device.setMusicVolume(0);
device.setNotificationVolume(0);
// device.setBrightness(0);
for(var i=1;i<99;i++)
{
integration4();
integration4();
}


function checkclickimg(tupian) //识别点击图片 
{
    let imgPath = files.path("/storage/emulated/0/img/img.png");
    let img2Path = files.path("/storage/emulated/0/img/" + tupian +".png");
    shell("screencap -p " +imgPath, true);
    var bigimg = images.read(imgPath);
    var smallimg = images.read(img2Path);
    var pfd = findImage(bigimg,smallimg,{
    // region: [0, 50],
    threshold: 0.9
});
if(pfd){
    toast("找到"+tupian);
    click( + pfd.x +10, + pfd.y +10 );
    return true;
    }
}

function checkimg(tupian) //截图识别点击图片
{
    let imgPath = files.path("/storage/emulated/0/img/img.png");
    let img2Path = files.path("/storage/emulated/0/img/" + tupian +".png");
    shell("screencap -p " +imgPath, true);
    var bigimg = images.read(imgPath);
    var smallimg = images.read(img2Path);
    var pfd = findImage(bigimg,smallimg,{
    // region: [0, 50],
    threshold: 0.9
});
if(pfd){
    toast("找到"+tupian);
    return true;
} 
}

function contrast(tupian)//不截图只识别
{
    let imgPath = files.path("/storage/emulated/0/img/img.png");
    let img2Path = files.path("/storage/emulated/0/img/" + tupian +".png");
    var bigimg = images.read(imgPath);
    var smallimg = images.read(img2Path);
    var pfd = findImage(bigimg,smallimg,{
    // region: [0, 50],
    threshold: 0.9
});
if(pfd){
    toast("找到"+tupian);
    return true;
} 
}

function contrastclick(tupian)//不截图识别点击
{
    let imgPath = files.path("/storage/emulated/0/img/img.png");
    let img2Path = files.path("/storage/emulated/0/img/" + tupian +".png");
    var bigimg = images.read(imgPath);
    var smallimg = images.read(img2Path);
    var pfd = findImage(bigimg,smallimg,{
    // region: [0, 50],
    threshold: 0.9
});
if(pfd){
    toast("找到"+tupian);
    click( + pfd.x +10, + pfd.y +10 );
    return true;
} 
}

function tuichu()//退出王者
{
    back();
    sleep(500);
    home();
    sleep(1000);
    let packageName = "com.tencent.tmgp.sgame";
    app.openAppSetting(packageName);
    sleep(4000);
    //text(app.getAppName(packageName)).waitFor();  
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
    if (is_sure.enabled()) {
        textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
        sleep(4000);
        textMatches(/(.*确.*|.*定.*)/).findOne().click();
        log(app.getAppName(packageName) + "应用已被关闭");
        sleep(1000);
        back();
    } else {
        log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
        back();
        sleep(500);
        home();
    }
    if(text("等待").findOnce())
    {
    text("等待").findOnce().click();//设置停止运行
    sleep(1000);
    }
}

function ckscreen()//检测屏幕是否亮着，点亮屏幕
{
    if (!device.isScreenOn()) {
        device.wakeUp();
        sleep(500);
        swipe(500, 2000, 500, 1000, 210);
        sleep(500);
        back();
        sleep(500);
        home();
    }
    if(text("等待").findOnce())
    {
    text("等待").findOnce().click();//设置停止运行
    sleep(1000);
    }
}

function openwzry() //打开王者荣耀
{
    home();
    sleep(2000);
    back();
    sleep(1000);
    app.launch("com.tencent.tmgp.sgame");
    sleep(25*1000);
    for(var i=1;i<11;i++)
    {
    if(text("等待").findOnce())
    {
    text("等待").findOnce().click();//设置停止运行
    sleep(1000);
    }
}
}

function openautojs() //打开autojs
{
    sleep(2000);
    home();
    sleep(2000);
    back();
    sleep(1000);
    app.launch("org.autojs.autojs");
    sleep(10*1000);
    for(var i=1;i<11;i++)
    {
    if(text("等待").findOnce())
    {
    text("等待").findOnce().click();//设置停止运行
    sleep(1000);
    }
    home();
    sleep(2000);
}
}

function updatagame()
{
    for (var i=1;i<4;i++)//关广告
    {
        click(2372, 261); 
        sleep(1000);
    }
    if (checkclickimg('xieyi') == true)
    {
        toast("同意协议等东西")
        sleep(3000);
        checkclickimg('quanxian');
        sleep(3000);
        checkclickimg('yunxu');
        sleep(3000);
        checkclickimg('yunxu');
        sleep(3000);
    }
    for (var i=1;i<4;i++)//关广告
    {
        click(2372, 261); 
        sleep(1000);
    }
    sleep(5000);
    for(var i=1;i<41;i++)
    {
        for (var i=1;i<4;i++)//关广告
        {
            click(2372, 261); 
            sleep(1000);
        }
        if (checkclickimg('xieyi') == true)
        {
            toast("同意协议等东西")
            sleep(3000);
            checkclickimg('quanxian');
            sleep(3000);
            checkclickimg('yunxu');
            sleep(3000);
            checkclickimg('yunxu');
            sleep(3000);
        }
        for (var i=1;i<4;i++)//关广告
        {
            click(2372, 261); 
            sleep(1000);
        }
        sleep(5000);
        if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    if(checkimg('updataing') == true)
    {
        toast("等待更新完成");
        sleep(20000);
    }
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    if(contrast('updatafinish') == true)
    {
        toast("更新完成");
        integration4();
        return;
    }
    if(contrast('xieyi') == true || contrast('weiDL') == true || contrast('startgame') == true || contrastclick('close') == true)
    {
        toast("无需更新")
        return;
    }
    for (var i=1;i<4;i++)//关广告
    {
        click(2372, 261); 
        sleep(1000);
    }
    toast("好像什么都没，等会再找一次哟");
}
}

function weiDL() //检测登录
{
    updatagame();
    for (var i=1;i<4;i++)//关广告
    {
        if(text("等待").findOnce()){
            text("等待").findOnce().click();//设置停止运行
            sleep(1000);
            }
        click(2372, 261); 
        sleep(1000);
    }
    sleep(2000);
    if(checkimg('weiDL') == true){//未登录qq，去登录
    click(1360, 1130); //同意
    sleep(1000);
    for (var i=1;i<4;i++)//关广告
    {
        click(2372, 261); 
        sleep(1000);
    }
    click(1360, 1130); //QQ登录
    sleep(18000);
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    QQdl();
    }
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
    }
    for (var i=1;i<4;i++)//关广告
    {
        click(2372, 261); 
        sleep(1000);
    }
    startgame();
}
 
function startgame()
{
    for(var i=1;i<25;i++)
    {
        if(checkimg('startgame') == true)
        {
            toast("找到开始游戏");
            click(1360,1130);
            break;
        } else{
            toast("没找到开始游戏，等几十秒再找")
            sleep(10000);
        }
    }
    // click(1360, 1130); //开始游戏
    sleep(18000);
    checkclickimg('weizhi');
    sleep(3000);
    if (checkimg('jiankang') == true || contrast('jinsai') == true || contrast('paiwei') == true || desc("王者荣耀").findOnce() )
    {
        integration4();
        return;
    }
    for (var i=1;i<6;i++){//关主界面广告
        click(2375, 211); 
        sleep(1000);
        click(21, 96); //返回
        sleep(500);
    }
    sleep(500);
    click(21, 96);
    sleep(500);
    click(2258, 141); //关直播广告
    sleep(1000);
    click(2258, 141);
    sleep(1000);
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    if (checkclickimg('close2') == true)
    {
        sleep(1000);
        if(checkclickimg('close') == true)
        {
            sleep(1000);
            checkclickimg('guanggao');
        }
     } else {
        if(contrastclick('close') == true)
        {
            sleep(1000);
            checkclickimg('guanggao');
        } else {
            contrastclick('guanggao');
        }
    }
    sleep(2000);
    jiance1();
    sleep(1000);
}

function wurao() //勿扰模式 
{
    click(2329, 84); //设置
    sleep(1000);
    click(83, 1306); //隐私
    sleep(500);
    swipe(1384, 1200, 1384, 343, 200); //上划
    sleep(500);
    swipe(1384, 1200, 1384, 343, 200); //上划
    sleep(500);
    swipe(1384, 1200, 1384, 343, 200);
    sleep(1000);
    click(1472, 463); //勿扰
    sleep(500);
    click(21, 96); //返回
    sleep(500);
    click(21, 96);
    sleep(1000);
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
}

function pipei()
{
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    sleep(500);
    click(21, 96); //返回
    sleep(500);
    click(21, 96);
    sleep(500);
    click(21, 96); //返回
    sleep(500);
    click(21, 96);
    sleep(500);
    if(checkclickimg('duizhan') == true ){
    sleep(1000);
    } else {
        integration4();
        return;
    }
    click(1500, 700);//1v1
    sleep(1000);
    click(800, 800);//匹配
    sleep(1000);
    if(checkimg('pipeimo') != true)
    {
        integration4();
        return;
    }
    sleep(1000);
    click(890,670);
    sleep(1000);
    click(890,670);
    sleep(1000);
    click(1700, 980);//确定
    sleep(2000);
}

function pipeishou()
{
for (var i=1;i<6;i++){//关主界面广告
    click(2375, 211); 
    sleep(1000);
    click(21, 96); //返回
    sleep(500);
}
sleep(500);
click(21, 96);
sleep(500);
click(2258, 141); //关直播广告
sleep(1000);
click(2258, 141);
sleep(1000);
if(text("等待").findOnce()){
    text("等待").findOnce().click();//设置停止运行
    sleep(1000);
    }
if (checkclickimg('close2') == true)
{
    sleep(1000);
    if(checkclickimg('close') == true)
    {
        sleep(1000);
        checkclickimg('guanggao');
    }
    } else {
    if(contrastclick('close') == true)
    {
        sleep(1000);
        checkclickimg('guanggao');
    } else {
        contrastclick('guanggao');
    }
}
sleep(2000);
jiance1();
sleep(1000);
if(text("等待").findOnce())
    {
    text("等待").findOnce().click();//设置停止运行
    sleep(1000);
    }
sleep(500);
click(21, 96); //返回
sleep(500);
click(21, 96);
sleep(500);
click(21, 96); //返回
sleep(500);
click(21, 96);
sleep(500);
if(checkclickimg('duizhan') == true ){
sleep(1000);
} else {
    integration4();
    return;
}
click(1500, 700);//1v1
sleep(1000);
click(800, 800);//匹配
sleep(1000);
if(checkimg('pipeimo') == true)
{
    click(1115,1250);//选英雄
    sleep(5000);
    for(var i=1;i<10;i++)//滑到选英雄最下面
    {
    swipe(260,1250,260,250,100);
    sleep(500);
    }
    sleep(1000);
    click(120,1300);//选熟练度最后一名英雄
    sleep(2000);
    click(2360,1350);//开始游戏
    sleep(1000);
}
}

function pipeifinish()
{
    sleep(3000);
    jiance2();
    for (var i = 1; i < 11; i++)
        {
            if(text("等待").findOnce()){
                text("等待").findOnce().click();//设置停止运行
                sleep(1000);
                }
            click(1280,1060);//匹配成功
            sleep(1000);
            click(1700, 980);//下线
            sleep(1000);
        }
        jiance2();
}

function touxiang()//投降 
{
    sleep(2000);
    click(2300, 75);
    sleep(500);
    for (var i = 1; i < 5; i++) {//投降
        click(1710, 1280);
        sleep(1000);
    }
    sleep(5000);
    for (var v = 1; v < 11; v++)//循环点击
    {
        click(1700, 980);//下线
        sleep(1000);
    }
}

function automove()
{
    ckscreen();
    click(1280,1060);//匹配成功
    for(var i=1;i<4;i++){
        if(checkimg('pipeiok') != true)
        {
            toast("没匹配成功，第"+i+"次匹配")
            pipeifinish();
            sleep(1000);
            jiance2();
        } else {
            break;
        }
    }
    sleep(2000);
    click(2460, 560)//说话
    sleep(1000);
    checkclickimg('wofang');
    sleep(1000);
    click(1280,1060);//匹配成功
    sleep(1000);
    speak1();
    for(var i=1;i<8;i++)
    {
        if(text("等待").findOnce()){
            text("等待").findOnce().click();//设置停止运行
            sleep(1000);
            }
        jiance1();
        sleep(2000);
        if(contrast('goon') == true)
        {
            break;
        }
        sleep(500);
        click(1280,1060);//匹配成功
        sleep(500);
        click(1700, 980);//下线
        sleep(500);
        toast("第" + i + "次移动，总共6次");
        move();
    }
}

function shouliandu()
{
    if(checkimg('shouman') == true)
    {
        toast("熟练度满了，即将更换英雄继续对战");
        sleep(2000);
        click(1280, 1300);//继续
        sleep(2000);
        click(1280, 1300);//继续
        sleep(2000);
        click(1100,1300);//返回主页
        sleep(2000);
        jiance1();
        sleep(2000);
        pipeishou();
        return;
    }
    click(21, 96); //返回
    sleep(500);
}

function again()
{
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    ckscreen();
    sleep(3000);
    jiance2();
    sleep(3000);
    if(checkimg('shouman') == true)
    {
        toast("熟练度满了，即将更换英雄继续对战");
        sleep(2000);
        click(1280, 1300);//继续
        sleep(2000);
        click(1280, 1300);//继续
        sleep(2000);
        click(1100,1300);//返回主页
        sleep(2000);
        jiance1();
        sleep(2000);
        pipeishou();
        return;
    }
    click(1280, 1300);//继续
    sleep(2000);
    click(1280, 1300);//继续
    sleep(3000);
    if(checkimg('again') == true)
    {
    click(1500, 1300);//再来一局
    sleep(2000);
    } else {
        integration4();
    }
}

function timeon()
{
    if (new Date().getHours() == 00 && //定时0点多就停止运行，再重新运行
    new Date().getMinutes() >= 00 &&
    new Date().getMinutes() <= 05 ){
        toast("位于休息时间");
        sleep(30000);
        integration4();
        return;
    } 
    if (new Date().getHours() == 04 && //定时4点多就停止运行，再重新运行
    new Date().getMinutes() >= 00 &&
    new Date().getMinutes() <= 05 ){
        toast("位于休息时间");
        sleep(30000);
        integration4();
        return;
    } 
    if (new Date().getHours() == 05 && //定时5点多就停止运行，再重新运行
    new Date().getMinutes() >= 00 &&
    new Date().getMinutes() <= 05 ){
        toast("位于休息时间");
        sleep(30000);
        integration4();
        return;
    } 
    if (new Date().getHours() == 06 && //定时6点多就停止运行，再重新运行
    new Date().getMinutes() >= 00 &&
    new Date().getMinutes() <= 05 ){
        toast("位于休息时间");
        sleep(30000);
        integration4();
        return;
        }
}

function integration1()//开屏幕到打完一局
{
    ckscreen();
    openautojs();
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    tuichu();
    timeon();
    openwzry();
    weiDL();
    wurao();
    pipei();
    pipeifinish();
    automove();
    touxiang();
}

function integration2()//再来一局到打完
{
    if(text("等待").findOnce()){
        text("等待").findOnce().click();//设置停止运行
        sleep(1000);
        }
    timeon();
    again();
    pipeifinish();
    automove();
    touxiang();
}

function integration3()//循环22遍
{
    integration1();
    for(var i=1;i<23;i++)
    {
        toast("第"+i+"遍，共22遍");
        integration2();
    }
    tuichu();
}

function integration4()
{
    for(var i=1;i<9999;i++)
    {

        integration3();
    }
}

function QQdl()
{

    if (desc("QQ授权登录").findOnce()) {
        desc("QQ授权登录").findOnce().click();
        sleep(5000);
        if (text("允许授权").findOnce()) {
            text("允许授权").findOnce().click();
            sleep(10000);
        }
    }
}

function move() {
    click(2290, 230);//装备
    sleep(500);
    swipe(715, 1137, 545, 1022, 900);
    swipe(715, 1137, 315, 1322, 1000);
    swipe(715, 1137, 315, 1322, 900);
    swipe(715, 1322, 315, 1137, 1000);
    swipe(315, 1137, 715, 1322, 1000);
    swipe(715, 1137, 315, 1322, 900);
    swipe(380, 1137, 674, 1005, 1000);
    swipe(674, 1137, 380, 1005, 900);
    swipe(380, 1005, 674, 1137, 1000);
    swipe(499, 1111, 833, 791, 1000);
    sleep(1000);
}

function speak1()//第1句话
{
    sleep(500);
    click(2460, 560)//说话
    sleep(500);
    click(2325, 1100);//打字
    sleep(1000);
    click(85, 828);//google
    sleep(500);
    click(1670,890);//剪切板
    sleep(500);
    click(270, 1020);//第一句话
    sleep(500);
    click(2325, 665);//确定
    sleep(500);
}

function jiance1() //包括活动、五排、早退、电竞、开始游戏、禁赛、挂机、排位、桌面
{
    if (checkimg('huod') == true || contrast('5pai') == true || contrast('zaotui') == true || 
    contrast('dianj') == true || contrast('startgame') == true || contrast('jinsai') == true || contrast('guaji') == true ||
    contrast('paiwei') == true || desc("王者荣耀").findOnce() )
    {
        integration4();
        return;
    }
}

function jiance2() //包括活动X、五排、早退、电竞X、开始游戏、禁赛、挂机、排位X、桌面
{
    if ( checkimg('5pai') == true || contrast('zaotui') == true || 
     contrast('startgame') == true || contrast('jinsai') == true || contrast('guaji') == true ||
     desc("王者荣耀").findOnce() )
    {
        integration4();
        return;
    }
}



