(function () {
  // 获取门店
  $.ajax({
    url: 'http://www.cb-asahi.com.cn/home/api/public/shopm_showshop',
    type: 'POST',
    dataType: 'JSON',
    success: function (res) {
      // var shopCity = res.data.city
      var shopList = res.data
      var cityHtml = ''
      for (var i = 0; i < shopList.length; i++) {
        var shopItem = shopList[i]
        cityHtml += `<li>${shopItem.city}</li>`
      }
      $('#cityList').html(cityHtml)

      $('.shops-nav li').on('click', function () {
        var val = $(this).html();
        $('.shops-nav li').removeClass('active');
        $(this).addClass('active');
        if (val <= 0) {
          return false;
        } else {
          drawHtml(val);
        }
      });


      function drawHtml(val) {
        var shopsHtml = '';
        for (var i = 0; i < shopList.length; i++) {
          var cityList = shopList[i];
          if (val == cityList.city) {
            for (var c = 0; c < cityList.data.length; c++) {
              var shopsList = cityList.data[c];
              shopsHtml += `<tr>
                                        <td>${shopsList.name}</td>
                                        <td>${shopsList.mail}</td>
                                        <td>${shopsList.site}</td>
                                    </tr>`;

            }
            $('.shops-list table tbody').html(shopsHtml);
          }
        }

      }
      
      $('#cityList li:first-child').addClass('active')
      let firstCity = $('#cityList li:first-child').html()
      drawHtml(firstCity);
    }
  })

})()