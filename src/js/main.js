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
