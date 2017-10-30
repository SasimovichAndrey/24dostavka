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

  // Call order form validation
$('#order-call-form').validator({focus:false});

$('#order-call-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
  } else {
    e.preventDefault();

    var data = $(this).serialize()
    backendService.sendMail(data, function(){
        $("#call-order-form-button-loader").removeClass("loader");
        $("#order-call-popup-page1").hide();
        $("#order-call-popup-page2").show();
    });

    $("#call-order-form-button-loader").addClass("loader");
  }
})
