document.addEventListener('DOMContentLoaded', () =>{
    // Populando os dias (1-31)
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // Populando os meses (1-12)
    const monthSelect = document.getElementById('month');
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    // Populando os anos de 2025 até 1950
    const yearSelect = document.getElementById('year');
    for (let i = 2025; i >= 1950; i--) { // Começa em 2025 e decrementa até 1950
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
})