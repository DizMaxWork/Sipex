$ (function() {
  $(".bars").on("click",function(){
    $(".mobile-menu").fadeIn();
    $(".mobile-menu__close").show();
});
$(".mobile-menu__close").on("click", function(){
    $(".mobile-menu").fadeOut();
});
$('.slider').slick({
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 3,
    prevArrow: "<img src='img/prev-arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/next-arrow.svg' class='next' alt='2'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: '120px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px'
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px'
        }
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
    })
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider-nav',
        prevArrow: "<img src='img/prev-arrow.svg' class='prev-2' alt='1'>",
        nextArrow: "<img src='img/next-arrow.svg' class='next-2' alt='2'>"
      });
      $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $(".slideto").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
    
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
    
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
    
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
    $(".contacts").on("click",function(){$(this).find(".contacts__block").fadeIn(),
    $(document).mouseup(function(t){var a=$(".contacts__block");
    a.is(t.target)||0!==a.has(t.target).length||a.hide()})})
});