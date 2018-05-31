$(document).ready(function(){
  $('.menu-icon').click(function(){
    $(this).toggleClass('open');
    $('.menu').toggleClass('show')
  });

  $(window).scroll(function(){
   $('.fixed').toggleClass("box-shadow", ($(window).scrollTop() > 40));
 });

 $(".go-to-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
 });

})
