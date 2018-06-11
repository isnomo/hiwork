(function () {
  $.getUrlParam = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象 
    var r = window.location.search.substr(1).match(reg);    //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null;      //返回参数值
  };
  //得到url参数
  var urltype = $.getUrlParam('city');
  // 首页banner房子跟随浮动
  let inTime = 0
  $('#indexBanner').mousemove((e) => {
    let pageTop = window.pageYOffset
    if (pageTop > 100 ) {
      return false
    }
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

    $('.project-map-control').on('click',function(){
      setInterval(function(){
        $('.project-map ul li').each(function(){
          if($(this).hasClass('active')){
            let itemIndex = $(this).index()
            $('.project-control__item').children().eq(itemIndex).addClass('active').siblings().removeClass("active")
          }
        })
      },200)
    })
    $('.project-control__item span').on('click',function(){
      let clickIndex = $(this).index()
      $('.box_button ul li').eq(clickIndex).click()
    })
    if(urltype == 'sh'){
      changeSH()
      $('#project__select').val('上海')
    }
    if(urltype == 'bj'){
      changeBJ()
      $('#project__select').val('北京')
    }
  })

  let sloutionNum
  if($(window).width()>1000){
    sloutionNum = 500
  }else{
    sloutionNum = 200
  }
  $(window).scroll(() => {
    let toTop = $(this).scrollTop()
    // console.log(toTop)
    let solutionTop = $('.solution').offset().top - toTop
    if (solutionTop - 100 < window.innerHeight && toTop < $('.solution').offset().top + 500) {
      $('.solution-bg').css({'display' : 'block'})
      $('.solution-bg').css({'display' : 'block','transform' : 'translateY('+ (solutionTop - sloutionNum) / 1.5 +'px)'})
    } else {
      $('.solution-bg').css({'display' : 'none'})
    }

    if (toTop < 1000) {
      $('.bannerBack').css({'display' : 'block'})
      $('.banenr-main__floor').css({'transform' : 'translateY(-'+ toTop / 6 +'px)'})
      $('.bannerBack').css({'transform' : 'translateY(-'+ toTop / 10 +'px)'})
    }
    
  })

  // 切换项目
  $('#project__select').change(function(){
    if($(this).val() == '上海'){
      changeSH()
    }
    if($(this).val() == '北京'){
      changeBJ()
    }
  })
  
  function changeSH(){
    $('#project .project-control h4').html('上海')
    $('#project .project-control .project-control__item span').html('高和云峰')
    $('#project .project-map .project-map-wall .project-map-item').css({'background-image' : "url('../img/mapBg2.png')"})
    $('#project .project-map .project-map-wall li .project-map-item__text h5').html('高和云峰')
    $('#project .project-map .project-map-wall li .project-map-item__text p').html('上海市杨浦区通北路749号高和云峰')
    $('#project .project-map .project-map-wall li .project-map-item__img img').attr('src','img/map/map2.png')
  }
  function changeBJ(){
    $('#project .project-control h4').html('北京')
    $('#project .project-control .project-control__item span').html('新街高和')
    $('#project .project-map .project-map-wall .project-map-item').css({'background-image' : "url('../img/mapBg.png')"})
    $('#project .project-map .project-map-wall li .project-map-item__text h5').html('新街高和')
    $('#project .project-map .project-map-wall li .project-map-item__text p').html('北京市西城区新街口北大街3号新街高和')
    $('#project .project-map .project-map-wall li .project-map-item__img img').attr('src','img/map/map1.png')
  }
  
})()