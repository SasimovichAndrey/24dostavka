$('#questions-form').validator({focus: false});

$('#questions-form').validator().on('submit', function (e) {
  if (e.isDefaultPrevented()) {
    // handle the invalid form...
  } else {
    e.preventDefault();

    var data = $(this).serialize()
    backendService.sendMail(data, function(){
        $("#questions-form-button-loader").removeClass("loader");
        $("#questions-form-button-text").html("Ваш вопрос принят!");

        var timeoutID = window.setTimeout(function(){
            $("#questions-form-button-text").html("Спросить");
        }, 5000)
    })

    $("#questions-form-button-loader").addClass("loader");
  }
})