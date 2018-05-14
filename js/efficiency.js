(function () {

  $(window).load(() => {
    $('#videpStart svg').on('click',function(){
      $('.video-module').fadeIn(400)
      let videoPlay = document.getElementById('video')
      setTimeout(() => {
        videoPlay.play()
      }, 300);
    })
    $('.video-module .video-module-main .module-close').on('click',function(){
      let videoPlay = document.getElementById('video')
      videoPlay.pause()
      setTimeout(() => {
        $('.video-module').fadeOut(400)
      }, 300);
    })
  })

  $(window).scroll(() => {
    let toTop = $(this).scrollTop()
    // console.log(toTop)

  })
})()