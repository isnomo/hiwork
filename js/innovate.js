(function () {


  $(window).load(() => {
    $('.banner .banner-main h3').css({ 'color': 'rgba(255,255,255,1)', 'transform': 'scale(1)','letter-spacing':'7px'})
    
    $('.floor-main .floor-main-wall .floor-bg-div .floor-bg-div__item').hover(function(){
      let hoverIndex = $(this).index()
      $(this).addClass('active').siblings().removeClass("active")
      $('.floor-main .floor-main-wall .floor-bg-img img.floor-bg-colours').eq(hoverIndex).addClass('active').siblings().removeClass("active")
      $(this).find('.btn').on('click',function(){
        let clickIndex = $(this).index()

        let floorNum = $(this).parent('.floor-bg-div__item').attr('data-floor') - 1
        $('.floor-carousel').css({'top' : floorNum * 200}).fadeIn(300)
      })
    })
    $('.floor-carousel .floor-carousel-wall .floor-carousel-close').on('click',function(){
      $('.floor-carousel').fadeOut(300)
    })
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()
  })
})()