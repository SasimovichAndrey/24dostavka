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
    }
});