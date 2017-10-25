$("#order-call-popup").dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    "Заказать звонок": function() {
      $(this).dialog("close");
    },
    "Отмена": function() {
      $(this).dialog("close");
    }
  },
  show: {
    effect: "fadeIn",
    duration: 400
  },
  hide: {
    effect: "fadeOut",
    duration: 400
  },
  resizable: false,
  draggable: false
});

$('#order-call-button').click(function(event) {
  $('#order-call-popup').dialog("open");
  event.preventDefault();
});

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('fixed');
				$('#scroll').fadeIn();
    } else {
        $('.navbar').removeClass('fixed');
				$('#scroll').fadeOut();
    }
});

$('#scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
