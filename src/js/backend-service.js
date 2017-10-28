function BackendService(){
    this.sendMail = function(data, successFunc) {
        $.ajax({
            url: backendBaseUrl + "mail.php", 
            data: data,
            type: "POST",
            success: successFunc
          });
    };
}

function BackendServiceFake(){
    this.sendMail = function(data, successFunc){
        window.setTimeout(successFunc, 2000);
    }
}

