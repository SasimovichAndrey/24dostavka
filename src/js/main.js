var backendBaseUrl = "backend/";
var backendService = new BackendServiceFake();

$("#order-call-popup-page2").hide();

$("#order-call-popup").dialog({
  title: "Заказать звонок",
  autoOpen: false,
  modal: true,
  show: {
    effect: "drop",
    duration: 400
  },
  hide: {
    effect: "fadeOut",
    duration: 400
  },
  resizable: false,
  draggable: false,
  classes: {
    "ui-dialog": "fixed-dialog"
  },

  close: function(){
    $("#order-call-popup-page2").hide();
    $("#order-call-popup-page1").show();

    $("#order-call-form input[type=text]").val("");
  }
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

// Call order form validation
$('#order-call-form').validator();

$('#order-call-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
  } else {
    e.preventDefault();

    var data = $(this).serialize()
    backendService.sendMail(data, function(){
      $("#order-call-popup-page1").hide();
      $("#order-call-popup-page2").show();
    })
  }
})