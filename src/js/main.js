$("#order-call-popup" ).dialog({
	autoOpen: false,
    modal: true,
    show: { effect: "fadeIn", duration: 400 },
    hide: {effect: "fadeOut", duration: 400}
});

$('#order-call-button').click(function(event){
    $('#order-call-popup').dialog("open");
    event.preventDefault();
});