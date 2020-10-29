$(document).ready(function() {
    //var url = "https://sanfranciscodekkerlab.com/matriz/auth.php?callback=?";
    var url = "http://192.168.1.245/flight-admin/api-flight-connect.php?callback=?";
    //var url = "https://sanfranciscodekkerlab.com/crm/authenticador.php?callback=?";
  
    //Login Function
    $("#btnAcceso").click(function() {
       
      var email = $("#emailUser").val();
      var password = $("#passwordUser").val();
      var dataString = "email=" + email + "&password=" + password + "&login=";
  
      if ($.trim(email).length > 0 & $.trim(password).length > 0) {
        $.ajax({
          type: "POST",
          url: url,
          data: dataString,
          crossDomain: true,
          cache: false,
          beforeSend: function() {
            $(".header-login").html("<div class='sk-chase'><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div><div class='sk-chase-dot'></div></div><div class='spinner'></div>");
            $(".spinner").show();
          },
          success: function(data) {
            if (data != "fail") {
              localStorage.login = "true";
              var json = data;
              for (var clave in json) {
                localStorage.idUsuario = JSON.parse(json).idUsuario;
                localStorage.nombre = JSON.parse(json).nombre;
  
              }
              setTimeout(function(){ 
                $(".spinner").hide();
                $(".header-login").html('<img src="img/logo-login.png">');
                var idUsuario = 1;
                var dataString = "idUsuario=" + idUsuario + "&listaMenu=";
                $.ajax({
                type: "POST",
                url: url,
                data: dataString,
                crossDomain: true,
                cache: false,
                success: function(data) {
                    if (data != "failed") {
                    localStorage.listaMenu = data;
                    swal({
                        title: "",
                        text: "Bienvenido",
                        icon: "success",
                        button: true,
                        dangerMode: false,
                      })
                      .then((willDelete) => {
                        
                        if (willDelete) {
                           
                            window.location.href = "index.html";
          
                        }
                      });
                   
            
                    }
                }
                })
                
      
             }, 3000);
             
            } else if (data == "fail") {
                setTimeout(function(){ 
                    $(".spinner").hide();
                    $(".header-login").html('<img src="img/logo-login.png">');
                    swal("Algo Salio Mal", "verifique su correo o contraseña", "error");
                 }, 3000);
                
              
            }
          }
        });
      } else {
        swal("Llenar Todos los Campos...", "", "info");
      }
      return false;
    });
   
  });
  