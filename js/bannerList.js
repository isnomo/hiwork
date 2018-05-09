
function carousel(option) {
  // 轮播最外层
  let $bannerWall = option.wall
  // 轮播等待时间
  let timejg = option.timer || 3000
  // 滑动速度
  let moveSpeed = option.speed || 300
  // 小按钮dom
  let $btnTab = option.btnTab || null
  // 轮播 ul父层dom
  let $boxImg = option.boxImg || null
  // 轮播左右切换按钮
  let $boxArrow = option.boxArrow || null
  // 初始展示的模块
  let defaultActive = option.defaultActive || 0
  // 移动上方停止播放
  let hoverStop = option.hoverStop || false
  // 是否自动播放
  let autoPlay = option.autoPlay || true
  // item 元素
  let liList = $boxImg.find("ul").find("li")
  // 轮播最后需要克隆的元素
  let cloneOne = liList.first().clone()
  // 获取 item 元素的宽
  let liWidth = liList.width()
  // 循环执行动画名称
  let timer = null
  // 当前active 的元素
  let itemIndex = 0
  // item 数量
  let itemlength = liList.length

  // 初始化
  // 把克隆元素添加进ul
  $boxImg.find("ul").append(cloneOne)
  // 给ul宽度
  $boxImg.find("ul").width(liWidth * itemlength)

  // 如果有圆点按钮就执行 圆点事件
  $btnTab ? btnList() : btnList

  function btnList() {
    // 生成小圆点
    for (let i = 0; i < itemlength - 1; i++) {
      $btnTab.find('ul').append("<li></li>")
    }
    // 给默认item元素添加active
    $btnTab.find('ul').find('li').eq( defaultActive ).addClass("active")
    // 圆点点击事件
    $btnTab.find('ul').find('li').on('click', function () {
      clearInterval(timer)
      let index = $(this).index()
      itemIndex = index
      imgMove(index)
      $btnTab.find('ul').find('li').eq(index).addClass("active").siblings().removeClass("active")
      autoPlay ? setAutoPlay() : setAutoPlay
    })
  }
  // 滑动的动画
  function imgMove(i) {
    $boxImg.find("ul").css({'transform' : 'translate3d(' + (- i * liWidth) + 'px,0,0)'})
  }
  // 是否自动播放
  autoPlay ? setAutoPlay() : setAutoPlay

  function setAutoPlay() {
    timer = setInterval(function () {
      itemIndex ++
      move()
    }, timejg)
  }

  // 播放函数
  function move() {
    if (itemIndex == itemlength) {
      $boxImg.find("ul").css({'transform' : 'translate3d(0,0,0)'})
      itemIndex = 1;
    }

    if (itemIndex == -1) {
      $boxImg.find("ul").css({'transform' : 'translate3d(' + (- liWidth * (itemlength - 1)) + 'px,0,0)'})
      itemIndex = itemlength - 2
    }
    
    $bannerMaxWapDom.find("ul").stop(true).animate({
      left: -itemIndex * liWidth
    }, 500);

    (itemIndex == itemlength - 1) ? $imgBtnList.children().eq(0).addClass("current").siblings().removeClass("current") : $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");
  }

  var touch_px;
  var rate;
  // $bannerMaxWapDom[0].addEventListener('touchstart', function (ev) {
  //     // ev.preventDefault();
  //     var touch=ev.targetTouches[0];
  //     touch_px = touch.pageX;
  //     clearInterval(timeOff);

  // },false);
  // $bannerMaxWapDom[0].addEventListener('touchmove', function (ev) {
  //     // ev.preventDefault()
  //     var touch=ev.targetTouches[0];
  //     rate =  touch_px-touch.pageX;

  // },false);
  // $bannerMaxWapDom[0].addEventListener('touchend', function (ev) {
  //     if(rate > 50){
  //         $(this).stop(true);
  //         array++;
  //         move();
  //         rate = 0;
  //     }else if(rate < -50){
  //         $(this).stop(true);
  //         array--;
  //         move();
  //         rate = 0;
  //     }

  //     (auto) ? setTime() : setTime;

  // },false);

  $bannerWall.on('touchstart', function (e) {
    var touch = e.originalEvent.targetTouches[0];
    touch_px = touch.pageX;
    clearInterval(time);
  });
  $bannerWall.on('touchmove', function (e) {
    var touch = e.originalEvent.targetTouches[0];
    rate = touch_px - touch.pageX;
  });
  $bannerWall.on('touchend', function (e) {
    if (rate > 50) {
      $(this).stop(true);
      moveUp();
      rate = 0;
    } else if (rate < -50) {
      $(this).stop(true);
      moveDown();
      rate = 0;
    }
  });



  if (hoverStop) {
    $bannerWall.hover(function () {
      clearInterval(time);
    }, function () {
      time = setInterval(moveUp, timejg);
    });
  }

  $bannerWall.find('.box_left').click(function () {
    clearInterval(time);
    moveDown();

  });
  $bannerWall.find('.box_right').click(function () {
    clearInterval(time);
    moveUp();
  });

}























