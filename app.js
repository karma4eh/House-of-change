// Obtener las referencias a los elementos del DOM
const btn = document.getElementById('convert-btn');
const amountInput = document.getElementById('amount');
const fromCurrencyInput = document.getElementById('from-currency');
const toCurrencyInput = document.getElementById('to-currency');
const result = document.getElementById('result');
const closeModalButton = document.getElementById('closeModal');

function conversion() {
    // Si las divisas son iguales
    if (fromCurrencyInput.value === toCurrencyInput.value) {
        modal.classList.remove('hidden');  // Mostrar el modal
        return;
    }
    
    // Peso a Dólar
    if (fromCurrencyInput.value === 'cop' && toCurrencyInput.value === 'usd') {
        result.value = (amountInput.value / 4127.04).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }
    
    // Peso a Bolívar
    if (fromCurrencyInput.value === 'cop' && toCurrencyInput.value === 'ves') {
        result.value = Math.round(amountInput.value / 105) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Peso a sol
    if (fromCurrencyInput.value === 'cop' && toCurrencyInput.value === 'pen') {
        result.value = (amountInput.value * 0.0009097).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Peso colombiano a peso chileno
    if (fromCurrencyInput.value === 'cop' && toCurrencyInput.value === 'clp') {
        result.value = (amountInput.value * 0.2214).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Bolívar a Dólar
    if (fromCurrencyInput.value === 'ves' && toCurrencyInput.value === 'usd') {
        result.value = (amountInput.value / 36.62).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Bolívar a Pesos Colombianos
    if (fromCurrencyInput.value === 'ves' && toCurrencyInput.value === 'cop') {
        result.value = (amountInput.value * 95).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Bolívar a Soles
    if (fromCurrencyInput.value === 'ves' && toCurrencyInput.value === 'pen') {
        result.value = (amountInput.value * 0.1041).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Bolívar a Pesos Chilenos
    if (fromCurrencyInput.value === 'ves' && toCurrencyInput.value === 'clp') {
        result.value = (amountInput.value * 25.9788).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Soles a Pesos Colombianos
    if (fromCurrencyInput.value === 'pen' && toCurrencyInput.value === 'cop') {
        result.value = (amountInput.value * 1112.3803).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Soles a Dólares
    if (fromCurrencyInput.value === 'pen' && toCurrencyInput.value === 'usd') {
        result.value = (amountInput.value * 0.2641).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Soles a Bolívares
    if (fromCurrencyInput.value === 'pen' && toCurrencyInput.value === 'ves') {
        result.value = (amountInput.value * 9.6917).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Soles a Pesos Chilenos
    if (fromCurrencyInput.value === 'pen' && toCurrencyInput.value === 'clp') {
        result.value = (amountInput.value * 246.9145).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Dólar a Pesos Chilenos
    if (fromCurrencyInput.value === 'usd' && toCurrencyInput.value === 'clp') {
        result.value = (amountInput.value * 901.50).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Pesos Chilenos a Dólares
    if (fromCurrencyInput.value === 'clp' && toCurrencyInput.value === 'usd') {
        result.value = (amountInput.value * 0.0011).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Pesos Chilenos a Pesos Colombianos
    if (fromCurrencyInput.value === 'clp' && toCurrencyInput.value === 'cop') {
        result.value = (amountInput.value * 4.52).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Pesos Chilenos a Bolívares
    if (fromCurrencyInput.value === 'clp' && toCurrencyInput.value === 'ves') {
        result.value = (amountInput.value * 0.038).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Pesos Chilenos a Soles
    if (fromCurrencyInput.value === 'clp' && toCurrencyInput.value === 'pen') {
        result.value = (amountInput.value * 0.004).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }
    // Dólar a Peso chileno
    if (fromCurrencyInput.value === 'usd' && toCurrencyInput.value === 'clp') {
        result.value = (amountInput.value * 901.50).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Dólar a Peso colombiano
    if (fromCurrencyInput.value === 'usd' && toCurrencyInput.value === 'cop') {
        result.value = (amountInput.value * 4127.04).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Dólar a Bolívar
    if (fromCurrencyInput.value === 'usd' && toCurrencyInput.value === 'ves') {
        result.value = (amountInput.value * 36.62).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }

    // Dólar a Sol
    if (fromCurrencyInput.value === 'usd' && toCurrencyInput.value === 'pen') {
        result.value = (amountInput.value * 3.79).toFixed(2) + ' ' + toCurrencyInput.value.toUpperCase();
    }
    
}

// Asignar la función al evento click del botón
btn.addEventListener('click', conversion);

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');  // Ocultar el modal
});
