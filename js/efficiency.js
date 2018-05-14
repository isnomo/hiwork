(function () {

  $(window).load(() => {
    $('#videpStart').on('click',function(){
      $('.video-module').fadeIn(400)
    })
    $('.video-module .video-module-main .module-close').on('click',function(){
      $('.video-module').fadeOut(400)
    })
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()
    // console.log(toTop)

  })
})()