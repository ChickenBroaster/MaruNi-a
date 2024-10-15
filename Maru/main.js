// Función para cambiar entre pantallas
function goToScreen(screenId) {
    const activeScreen = document.querySelector('.screen.active');
    activeScreen.classList.remove('active');
    const nextScreen = document.getElementById(screenId);
    nextScreen.classList.add('active');
}

// Cargar la primera pantalla (pantalla de inicio) al inicio
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inicio').classList.add('active');
});
