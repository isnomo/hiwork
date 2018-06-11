(function () {
  var winWidth = 0;
  var winHeight = 0;
  var pcUrl = window.location.pathname
  function findDimensions() { //函数：获取尺寸
    //获取窗口宽度
    if (window.innerWidth)
      winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
      winWidth = document.body.clientWidth;
    //获取窗口高度
    if (window.innerHeight)
      winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
      winHeight = document.body.clientHeight;
    //通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
      winHeight = document.documentElement.clientHeight;
      winWidth = document.documentElement.clientWidth;
    }
    //结果输出至两个文本框
    console.log(winHeight)
    console.log(winWidth)
    if(pcUrl != '/phone.html'){
      if (winWidth < 1000) {
        // location.href = 'phone.html'
      }
    }
  }
  

  function showImages() {
    var images = document.getElementsByClassName('isShow');
    for (var i = images.length - 1; i >= 0; i--) {
      var el = images[i];
      if (imgShow(el)) {
        el.style.transform = 'translate3d(0,0,0)';
        el.style.opacity = '1';
      }
    }
    function imgShow(el) {
      return (window.innerHeight || document.documentElement.clientHeight) - el.getBoundingClientRect().top > 30;
    }
  }

  $(window).scroll(() => {
    // showImages ();
    var toTop = $(this).scrollTop();
    
    if(toTop > window.innerHeight){
      $('.smallNav').addClass('active')
      $('.smallPhone').addClass('active')
    }else{
      $('.smallNav').removeClass('active')
      $('.smallPhone').removeClass('active')
    }
  })

  $(window).load(() => {
    // showImages (); 
    $('.loading').fadeOut(300)
  })

  // 导航
  $(".header-wall").load("header.html", () => {
    // console.log("导航栏加载成功");
    $('.header-wall .header-nav>ul>li').hover(function(){
      $(this).find('.drop-menu').stop().fadeIn();
    },function(){
      $(this).find('.drop-menu').stop().fadeOut();
    });
  });
  $(".smallNav").load("header.html", () => {
    // console.log("导航栏加载成功");
    $('.smallNav .header-nav>ul>li').hover(function(){
      $(this).find('.drop-menu').stop().fadeIn();
    },function(){
      $(this).find('.drop-menu').stop().fadeOut();
    });
  });
  $("footer").load("footer.html", () => {

  });
  $(".phone-wall").load("phoneHeader.html", () => {
    // console.log("手机导航加载成功");
    let isOpen = false;
    $('.phone-wall .menu-btn').on('click',toggleMenu);	
    function toggleMenu() {
      if( isOpen ) {
          $('html').removeClass('show-menu');
          $('.phone-wall .menu-btn').removeClass('btn-close');
      }else {
          $('html').addClass('show-menu');
          $('.phone-wall .menu-btn').addClass('btn-close');
      }
      isOpen = !isOpen;
    }

    $('.phone-wall .phoneHeader .menu-btn').on('click',function(){
      $('.phone-wall .phoneHeader .menu-main').stop().slideToggle(300)
    })
    $('.phone-wall .phoneHeader .menu-main li').on('click',function(){
      $(this).find('.menu-main__item').stop().slideToggle(300)
    })
  });

  $(".smallPhone").load("phoneHeader.html", () => {
    // console.log("手机导航加载成功");
    let smisOpen = false;
    $('.smallPhone .menu-btn').on('click',toggleMenu);	
    function toggleMenu() {
      if( smisOpen ) {
          $('html').removeClass('show-menu');
          $('.smallPhone .menu-btn').removeClass('btn-close');
      }else {
          $('html').addClass('show-menu');
          $('.smallPhone .menu-btn').addClass('btn-close');
      }
      smisOpen = !smisOpen;
    }

    $('.smallPhone .phoneHeader .menu-btn').on('click',function(){
      $('.smallPhone .phoneHeader .menu-main').stop().slideToggle(300)
    })
    $('.smallPhone .phoneHeader .menu-main li').on('click',function(){
      $(this).find('.menu-main__item').stop().slideToggle(300)
    })
  });

  // 初始化函数
  function init() {
    findDimensions()
    //调用函数，获取数值
    $(window).resize(() => {
      findDimensions()
    })
    if (window.devicePixelRatio > 1) {
      var images = $("img.retina");
      images.each(function (i) {
        var x1 = $(this).attr('src');
        var x2 = 'x2' + x1;
        $(this).attr('src', x2);
      });
    }
  }

  init()
})();