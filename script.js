document.getElementById('calculo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter valores dos campos
    const valorPrincipal = parseFloat(document.getElementById('valor-principal').value);
    const taxaJuros = parseFloat(document.getElementById('taxa-juros').value) / 100;
    const meses = parseInt(document.getElementById('meses').value);

    // Calcular o valor final
    const valorFinal = valorPrincipal * Math.pow(1 + taxaJuros, meses);

    // Mostrar o resultado
    document.getElementById('valor-final').textContent = `Valor Final: R$ ${valorFinal.toFixed(2)}`;
});
