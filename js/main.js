var backendBaseUrl = "backend/";
var backendService = new BackendServiceFake();

checkWidth();

$(window).on('resize', function() {
  checkWidth();
});

$(".navbar-nav li a").click(function() {
  var width = $(window).width();
  if (width < 768) {
    $(".navbar-toggle").click();
  }
});


$(window).bind('scroll', function() {
  var width = $(window).width();
  var scrollValueForFixedMenu = 100;
  if (width < 768) {
    scrollValueForFixedMenu = 250;
  }

  if ($(window).scrollTop() > scrollValueForFixedMenu) {
    $('.navbar').addClass('fixed');
    $('#scroll').fadeIn();
  } else {
    $('.navbar').removeClass('fixed');
    $('#scroll').fadeOut();
  }
});

$('#scroll').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 600);
  return false;
});

function checkWidth() {
  var width = $(window).width();
  if (width >= 768) {
    $("body").removeAttr('class');
    $("body").addClass("desktop")
  } else {
    $("body").removeAttr('class');
    $("body").addClass("mobile")
  }
}
