function animacionLoop() {
    var imagenes = document.querySelectorAll('.animacion');

    function aleatorio() {
      return Math.floor(Math.random() * 5000);
    }

    var contador = 0;
    var totalImagenes = imagenes.length;

    imagenes.forEach(function(imagen) {
    var retraso = aleatorio();
    setTimeout(function() {
        imagen.classList.add('aparecer');
        setTimeout(function() {
        imagen.classList.remove('aparecer');
        imagen.classList.add('desaparecer');
        contador++;
        if (contador === totalImagenes) {
            setTimeout(function() {
            animacionLoop();
            }, aleatorio());
        }
        }, aleatorio());
    }, retraso);
    });
}




document.addEventListener("DOMContentLoaded", function() {
    const imagenes = document.querySelectorAll('.animacion');
    function openUrl(e) {
        e.preventDefault();
        console.log("Hiciste clic en la imagen");
        var url = e.target.dataset.url;
        window.location.href = url;
    }

});




function updateFollowersNumber() {
    // Genera un número aleatorio entre 100 y 1000
    const newNumber = Math.floor(Math.random() * 901) + 100;
    // Actualiza el contenido del elemento con el id 'followers-number'
    document.getElementById('followers-number').textContent = newNumber;
}

// Llama a la función 'updateFollowersNumber' cada 2 segundos (2000 milisegundos)
setInterval(updateFollowersNumber, 1000);



window.addEventListener('load', function() {
    animacionLoop();
    cambiarFondo();
});

window.addEventListener('load', function() {
    animacionLoop();
    cambiarFondo();
});

window.addEventListener('load', function() {
    
    // Seleccionamos los elementos con las clases "blanco" y "negro"
    const blanco = document.querySelector('.blanco');
    const negro = document.querySelector('.negro');
    var fondoNegro = false; // Definimos la variable globalmente

    // Función para alternar los displays
    function alternarDisplays() {
        if (blanco.style.display === 'block') {
            blanco.style.display = 'none';
            negro.style.display = 'block';
        } else {
            blanco.style.display = 'block';
            negro.style.display = 'none';
        }
    }

    // Ejecutamos la función cada 20 segundos
    const displayInterval = setInterval(alternarDisplays, 10000);

    // Función para cambiar el fondo y el texto
    function cambiarFondo() {
        var body = document.querySelector('body');
        var h1 = document.querySelector('h1');

        if (fondoNegro) {
            body.classList.remove('fondoNegro');
            h1.classList.remove('blanco');
            h1.textContent = "Show";
            fondoNegro = false;
        } else {
            body.classList.add('fondoNegro');
            h1.classList.add('blanco');
            h1.textContent = "Yo";
            fondoNegro = true;
        }
    }

    // Ejecutamos la función cada 20 segundos
    const fondoInterval = setInterval(cambiarFondo, 20000);

    // Sincronizamos los intervalos para que se ejecuten al mismo tiempo
    setTimeout(function() {
        clearInterval(displayInterval);
        clearInterval(fondoInterval);
        const newDisplayInterval = setInterval(alternarDisplays, 20000);
        const newFondoInterval = setInterval(cambiarFondo, 20000);
        displayInterval = newDisplayInterval;
        fondoInterval = newFondoInterval;
    }, 10000); // esperamos 10 segundos antes de sincronizar los intervalos
});

