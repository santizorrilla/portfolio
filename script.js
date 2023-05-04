const circle = document.getElementById('circle');
const inside = document.querySelector('.inside');
const container = document.querySelector('.container');

if (circle !== null) {
circle.addEventListener('click', function() {
    circle.style.width = '100vw';
    circle.style.height = '100vh';
    circle.style.borderRadius = '0';
    circle.style.transition = 'all 0.5s ease-out';

  // Ocultamos el cursor del body
    circle.style.cursor = 'auto';

    inside.classList.add('hide');

    container.style.display = 'block';

    
});
}