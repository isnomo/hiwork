
    function carousel(option) {
        let $bannerWall = option.wall;
        let timejg = option.timer || 3000;
        let moveSpeed = option.speed || 300;
        let $boxTab = option.boxTab || null;
        let $boxImg = option.boxImg || null;
        let $boxArrow = option.boxArrow || null;
        let defaultActive = option.defaultActive || 0;

        // var size = $boxImg.find('ul').find('li').size();
        // for (var i = 1; i <= size; i++) {
        //     $boxTab.append('<a href=""><span></span></a>')
        // }
        
        // if(size<2){
        //     $bannerWall.find('.box_right').hide();
        //     $bannerWall.find('.box_left').hide();
        // }

        // 初始化
        $boxImg.find('ul').find('li').eq(defaultActive).addClass('active');
        $boxTab.find('ul').find('li').eq(defaultActive).addClass('active');
        // 圆点点击事件
        $boxTab.find('ul').find('li').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
            let index = $(this).index();
            i = index;
            $boxImg.find('ul').find('li').eq(index).stop().fadeIn(moveSpeed).siblings().stop().fadeOut(moveSpeed);
        });

        var i = 0;
        var time = setInterval(moveUp, timejg);

        function moveUp() {
            i++;
            if (i >= size) {
                i = 0;
            }

            $boxTab.find('a').eq(i).addClass('active').siblings().removeClass('active');
            $boxImg.find('ul').find('li').eq(i).fadeIn(moveSpeed).siblings().fadeOut(moveSpeed);
        }

        function moveDown() {
            i--;
            if (i < 0) {
                i = size - 1;
            }

            $boxTab.find('a').eq(i).addClass('active').siblings().removeClass('active');
            $boxImg.find('ul').find('li').eq(i).fadeIn(moveSpeed).siblings().fadeOut(moveSpeed);
        }


        var touch_px;
        var rate;
        // var bannerBox = document.getElementsByClassName('box')[0];
        // bannerBox.addEventListener('touchstart', function (ev) {
        //     var touch = ev.targetTouches[0];
        //     touch_px = touch.pageX;
        //     clearInterval(time);
        // }, false);
        // bannerBox.addEventListener('touchmove', function (ev) {
        //     var touch = ev.targetTouches[0];
        //     rate = touch_px - touch.pageX;
        // }, false);
        // bannerBox.addEventListener('touchend', function (ev) {
        //     if (rate > 50) {
        //         $(this).stop(true);
        //         moveUp();
        //         rate = 0;
        //     } else if (rate < -50) {
        //         $(this).stop(true);
        //         moveDown();
        //         rate = 0;
        //     }
        // }, false);

        $bannerWall.on('touchstart', function (e){
            var touch = e.originalEvent.targetTouches[0];
            touch_px = touch.pageX;
            clearInterval(time);
        });
        $bannerWall.on('touchmove', function (e){
            var touch = e.originalEvent.targetTouches[0];
            rate = touch_px - touch.pageX;
        });
        $bannerWall.on('touchend', function (e){
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



        $bannerWall.hover(function () {
            clearInterval(time);
        }, function () {
            time = setInterval(moveUp, timejg);
        });
        $bannerWall.find('.box_left').click(function(){
            clearInterval(time);
            moveDown();

        });
        $bannerWall.find('.box_right').click(function(){
            clearInterval(time);
            moveUp();
        });
    }
