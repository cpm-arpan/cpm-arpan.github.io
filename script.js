
$('.lp-featured-products').slick({
  centerMode: false,
  centerPadding: '60px',
  slidesToShow: 3,

  
  responsive: [
    {
      breakpoint: 1024,
settings:{
        arrows:true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll:1,
}},
{
  breakpoint: 768,
settings:{
    arrows:true,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 2,
    slidesToScroll:1,
}},
 {
      breakpoint: 576,
settings:{
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
    }
    }
  ]
})
// Slider 2nd for testimonial section=============
$('.testimonial-content').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




