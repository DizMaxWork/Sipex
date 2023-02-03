$ (function() {
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
});
