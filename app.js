// Obtener las referencias a los elementos del DOM
const btn = document.getElementById('convert-btn');
const amountInput = document.getElementById('amount');
const fromCurrencyInput = document.getElementById('from-currency');
const toCurrencyInput = document.getElementById('to-currency');
const result = document.getElementById('result');
const closeModalButton = document.getElementById('closeModal');
const modal = document.getElementById('modal'); // Asegúrate de tener esta referencia

// Factores de conversión
const conversionRates = {
  cop: { usd: 4127.04, ves: 105, pen: 0.0009097, clp: 0.2214 },
  ves: { usd: 36.62, cop: 95, pen: 0.1041, clp: 25.9788 },
  pen: { cop: 1112.3803, usd: 0.2641, ves: 9.6917, clp: 246.9145 },
  usd: { clp: 901.50, cop: 4127.04, ves: 36.62, pen: 3.79 },
  clp: { usd: 0.0011, cop: 4.52, ves: 0.038, pen: 0.004 }
};

function conversion() {
    const from = fromCurrencyInput.value;
    const to = toCurrencyInput.value;
    const amount = parseFloat(amountInput.value);

    // Si las divisas son iguales, mostrar modal y salir
    if (from === to) {
        modal.classList.remove('hidden');
        return;
    }

    // Obtener la tasa de conversión
    const rate = conversionRates[from]?.[to];
    if (rate) {
        result.value = (amount * rate).toFixed(2) + ' ' + to.toUpperCase();
    } else {
        result.value = 'Conversión no disponible';
    }
}

// Asignar la función al evento click del botón
btn.addEventListener('click', conversion);

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden'); // Ocultar el modal
});
