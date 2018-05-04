(function () {
  // 首页banner房子跟随浮动
  let inTime = 0
  $('#indexBanner').mousemove((e) => {
    let nowTime = new Date().getTime()
    if (nowTime - inTime > 100) {
      // let x = e.pageX
      let y = e.pageY
      $('.banenr-main__floor img').each(function (index) {
        let i
        switch (index) {
          case 0:
            i = 4;
            break;
          case 1:
            i = 3.5;
            break;
          case 2:
            i = 3;
            break;
          case 3:
            i = 2;
            break;
          case 4:
            i = 2.4;
            break;
          case 5:
            i = 2.8;
            break;
          case 6:
            i = 3.2;
            break;
        }
        // let itemX = $(this).width() / 2 + $(this).offset().left
        // let itemY = $(this).height() / 2 + $(this).offset().top
        let itemY = $('#indexBanner').height() / 2
        // let moveX = itemX / x
        let moveY = itemY / y
        if (y - itemY > 0) {
          moveY = (y - itemY) / itemY
        }
        // moveX > 10 ? moveX = 10 : moveX = moveX
        moveY > 5 ? moveY = 5 : moveY = moveY
        // moveX > 1 ? moveX = (moveX - 1) * i : moveX = -(moveX * i)
        moveY > 1 ? moveY = (moveY - 1) * i : moveY = -(moveY * i * 8)
        $(this).css({ 'transform': 'translate3d(0,' + moveY + 'px,0)' })
      })
      inTime = nowTime
    }
  }).mouseleave((e) => {
    // $('.banenr-main__floor img').each(function () {
    //   $(this).css({ 'transform': 'translate3d(0,0,0)' })
    // })
  })

  $(window).load(() => {
    $('.banenr-main__floor .inShow').each(function (i) {
      const that = $(this)
      setTimeout(function () {
        that.css({ 'transform': 'translateY(0)', 'opacity': '1' })
      }, i * 150)
    })
    setTimeout(function () {
      $('.banenr-main__floor img').removeClass('inShow')
    }, 1200)
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop();
    $('.banenr-main__floor').css({'transform' : 'translateY(-'+ toTop / 4 +'px)'})
    $('.bannerBack').css({'transform' : 'translateY(-'+ toTop / 10 +'px)'})
  })
})()