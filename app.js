$(document).ready(function(){
  $('.h-main-stories').slick({
    autoplay: true,
    adaptiveHeight: true,
    dots: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev" style="background-image: url(images/prev.png);background-position: center;width:30px;height:30px;background-size: contain;background-repeat: no-repeat;left:-30px"></button>',
    nextArrow: '<button type="button" class="slick-next" style="background-image: url(images/next.png);background-position: center;width:30px;height:30px;background-size: contain;background-repeat: no-repeat;right:-30px">Previous</button>'
  });
});

$(document).ready(function(){
  $('.h-news-cat-slider').slick({
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev" style="background-image: url(images/prev.png);background-position: center;width:30px;height:30px;background-size: contain;background-repeat: no-repeat;top:32%;left:-30px">Previous</button>',
    nextArrow: '<button type="button" class="slick-next" style="background-image: url(images/next.png);background-position: center;width:30px;height:30px;background-size: contain;background-repeat: no-repeat;top:32%;right:-30px">Previous</button>',
    responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

$(document).ready(function(){
    var curretScroll = 0;
    $(window).scroll(function(){
        if(curretScroll < $(window).scrollTop() && $(window).scrollTop() > 70){
            $('.main-header').css('transform', 'translateY(-70px)');
            curretScroll = $(window).scrollTop();
        }else {
            $('.main-header').css('transform', 'translateY(0px)');
            curretScroll = $(window).scrollTop();
        }
    });
});


$(document).ready(function(){

    var mobMenuBtn = $('#mob-btn');
    var navLink = $('.nav-link');

    mobMenuBtn.click(function(){
        $('header').toggleClass('main-header');
        $('nav').toggleClass('show');
    });
    navLink.click(function(){
        $('header').addClass('main-header');
        $('nav').removeClass('show');
    });
});
