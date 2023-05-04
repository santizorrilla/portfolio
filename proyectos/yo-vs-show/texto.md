setTimeout(function() {
    var h1 = document.getElementById("show");
    h1.innerHTML = "Yo";
    h1.style.color = "white";
    
    // Cambiar de nuevo el título y el color después de otros 30 segundos
    setTimeout(function() {
    h1.innerHTML = "Show";
    h1.style.color = "black";
    }, 3000);
}, 3000);