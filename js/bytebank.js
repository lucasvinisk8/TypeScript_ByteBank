let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFomulario = document.querySelector(".block-nova-transacao form");
elementoFomulario.addEventListener("submit", function () {
    event.preventDefault();
    if (!elementoFomulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

});