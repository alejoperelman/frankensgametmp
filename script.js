document.addEventListener('DOMContentLoaded', () => {
    // Fecha de inicio del Mundial 2026 (por confirmar, aquí usamos una aproximación)
    // El Mundial 2026 se celebrará en Junio-Julio. Usaremos 11 de junio de 2026 a las 00:00:00 como fecha objetivo.
    const mundialDate = new Date('June 11, 2026 00:00:00').getTime();

    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');
    const eventMessage = document.getElementById('event-message');
    const countdownContainer = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = mundialDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownContainer.style.display = 'none';
            eventMessage.style.display = 'block';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysSpan.textContent = String(days).padStart(2, '0');
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }

    // Actualiza el contador cada 1 segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Llama a la función una vez de inmediato para evitar un retraso inicial
    updateCountdown();
});