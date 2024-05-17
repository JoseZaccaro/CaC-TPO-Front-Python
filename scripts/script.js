function menuMobile() {
    var x = document.getElementById("mainMenu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar secciones al hacer scroll
    function mostrarSecciones() {
      var secciones = document.querySelectorAll(".seccion");
      var alturaVentana = window.innerHeight;
      var alturaScroll = window.pageYOffset;
      for (var i = 0; i < secciones.length; i++) {
        var alturaSeccion = secciones[i].offsetTop;
        if (alturaScroll > alturaSeccion - alturaVentana + 200) {
          secciones[i].classList.add("mostrar"); 
        }
      }
    }
    
    // Función para ajustar el ancho de los elementos hr
    function ajustarAnchoHr() {
      var hrs = document.querySelectorAll(".miHr");
      var alturaVentana = window.innerHeight;
      for (var i = 0; i < hrs.length; i++) {
        var hr = hrs[i];
        var seccion = hr.closest("section"); 
        var distanciaDesdeArriba = seccion.getBoundingClientRect().top; 
        if (distanciaDesdeArriba < alturaVentana) {
          var porcentajeAncho = Math.min(50, (alturaVentana - distanciaDesdeArriba) / alturaVentana * 100); 
          hr.style.width = porcentajeAncho + "%"; 
        }
      }
    }
  
    // Event listener para mostrar secciones al hacer scroll
    window.addEventListener("scroll", mostrarSecciones);
    
    // Event listener para ajustar el ancho de los elementos hr al hacer scroll o cambiar el tamaño de la ventana
    window.addEventListener("scroll", ajustarAnchoHr);
    
    // Llama a las funciones inicialmente
    mostrarSecciones();
    ajustarAnchoHr();
  });