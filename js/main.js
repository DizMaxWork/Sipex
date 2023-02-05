$ (function() {
  $(".bars").on("click",function(){
    $(".mobile-menu").fadeIn();
    //$(this).hide();
    $(".mobile-menu__close").show();
});
$(".mobile-menu__close").on("click", function(){
    $(".mobile-menu").fadeOut();
    //$(this).hide();
   // $(".bars").show();
});
    $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img src='img/prev-arrow.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/next-arrow.svg' class='next' alt='2'>",
    })
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false
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
    $(".contacts").on("click",function(){$(this).find(".contacts__block").fadeIn(),$(document).mouseup(function(t){var a=$(".contacts__block");
a.is(t.target)||0!==a.has(t.target).length||a.hide()})})
});
