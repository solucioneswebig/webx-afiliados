$(document).ready(function() {
  //variables
  var pass1 = $("[name=password1]");
  var pass2 = $("[name=password]");
  var confirmacion = "Las contraseñas si coinciden";
  var longitud =
    "La contraseña debe estar formada entre 6-10 carácteres (ambos inclusive)";
  var negacion = "No coinciden las contraseñas";
  var vacio = "La contraseña no puede estar vacía";
  //oculto por defecto el elemento span
  var span = $("<span></span>").insertAfter(pass2);
  span.hide();
  //función que comprueba las dos contraseñas
  function coincidePassword() {
    var valor1 = pass1.val();
    var valor2 = pass2.val();
    //muestro el span
    span.show().removeClass();
    //condiciones dentro de la función
    if (valor1 != valor2) {
      span.text(negacion).addClass("negacion");
    }
    if (valor1.length == 0 || valor1 == "") {
      span.text(vacio).addClass("negacion");
    }
    if (valor1.length < 6 || valor1.length > 10) {
      span.text(longitud).addClass("negacion");
    }
    if (valor1.length != 0 && valor1 == valor2) {
      span
        .text(confirmacion)
        .removeClass("negacion")
        .addClass("confirmacion");
    }
  }
  //ejecuto la función al soltar la tecla
  pass2.keyup(function() {
    coincidePassword();
  });


  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $(this).toggleClass('active');
  });


  var url = window.location.href;
  var indice = url.split("/");

  var pagActual = indice[indice.length -1];

  if(pagActual == "cuenta" || pagActual == "cuenta#" ){
    $("#menu-principal").addClass("d-none");
  }


});
