(function () {
  function canvasRound(bgId,textId,deg) {
    let c = document.getElementById(bgId);
    let text = document.getElementById(textId);
    let ctx = c.getContext('2d');

    let fullDeg = deg / 100
    let mW = c.width = 292;
    let mH = c.height = 292;
    let lineWidth = 8;
    let r = mW / 2; //中间位置
    let cR = r - 4 * lineWidth; //圆半径
    let startAngle = -(1 / 2 * Math.PI); //开始角度
    let endAngle = startAngle + 2 * Math.PI * fullDeg; //结束角度
    let xAngle = 3 * (Math.PI / 180); //偏移角度量
    // var fontSize = 35; //字号大小
    let tmpAngle = startAngle; //临时角度变量

    //渲染函数
    let rander = function () {
      if (tmpAngle >= endAngle) {
        return;
      } else if (tmpAngle + xAngle > endAngle) {
        tmpAngle = endAngle;
      } else {
        tmpAngle += xAngle;
      }
      ctx.clearRect(0, 0, mW, mH);

      //画圈
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = '#93D2E9';
      ctx.arc(r, r, cR, startAngle, tmpAngle);
      ctx.stroke();
      ctx.closePath();

      //写字
      // ctx.fillStyle = '#1d89d5';
      // ctx.font = fontSize + 'px Microsoft Yahei';
      // ctx.textAlign = 'center';
      // ctx.fillText(Math.round((tmpAngle - startAngle) / (endAngle - startAngle) * fullDeg * 100) + '%', r, r + fontSize / 2);

      text.innerHTML = Math.round((tmpAngle - startAngle) / (endAngle - startAngle) * fullDeg * 100)
      requestAnimationFrame(rander);
    };

    rander();
  }

  $(window).load(() => {
    $('.banner .banner-main h3').css({ 'color': 'rgba(255,255,255,1)', 'transform': 'scale(1)', 'letter-spacing': '7px' })

    $('.floor-main .floor-main-wall .floor-bg-div .floor-bg-div__item').hover(function () {
      let hoverIndex = $(this).index()
      $(this).addClass('active').siblings().removeClass("active")
      $('.floor-main .floor-main-wall .floor-bg-img img.floor-bg-colours').eq(hoverIndex).addClass('active').siblings().removeClass("active")
      $(this).find('.btn').on('click', function () {
        let clickIndex = $(this).index()

        let floorNum = $(this).parent('.floor-bg-div__item').attr('data-floor') - 1
        $('.floor-carousel').css({ 'top': floorNum * 200 }).fadeIn(300)
      })
    })
    $('.floor-carousel .floor-carousel-wall .floor-carousel-close').on('click', function () {
      $('.floor-carousel').fadeOut(300)
    })

    setTimeout(function(){
      canvasRound('item1','text1',66);
      canvasRound('item2','text2',70);
      canvasRound('item3','text3',61);
      canvasRound('item4','text4',77);
    },2000)
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()
  })
})()