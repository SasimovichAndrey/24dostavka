$("#quick-order-popup-page2").hide();

$('#quick-order-button').click(function(event) {
    $('#quick-order-popup').dialog("open");
    event.preventDefault();
  });

$("#quick-order-popup").dialog({
    title: "Оформление заказа",
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
      $("#quick-order-popup-page2").hide();
      $("#quick-order-popup-page1").show();
  
      $("#quick-order-form input[type=text]").val("");
      $("#quick-order-form input[type=email]").val("");
      $("#quick-order-form textarea").val("");
    }
});

$('#quick-order-form').validator({focus: false});

$('#quick-order-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
  } else {
    e.preventDefault();

    var data = $(this).serialize()
    backendService.sendMail(data, function(){
        $("#quick-order-form-button-loader").removeClass("loader");
        $("#quick-order-popup-page1").hide();
        $("#quick-order-popup-page2").show();
    })

    $("#quick-order-form-button-loader").addClass("loader");
  }
})