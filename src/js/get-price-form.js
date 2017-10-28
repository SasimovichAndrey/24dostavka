$('#get-price-form').validator({focus: false});

$('#get-price-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
  } else {
    e.preventDefault();

    var data = $(this).serialize()
    backendService.sendMail(data, function(){
        $("#get-price-loader").removeClass("loader");
        $("#get-price-button-text").html("Ваша заявка принята!");

        var timeoutID = window.setTimeout(function(){
            $("#get-price-button-text").html("Узнать цену");
        }, 5000)
    })

    $("#get-price-loader").addClass("loader");
  }
})