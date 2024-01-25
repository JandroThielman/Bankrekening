var dropdown = document.getElementById('select-gebruiker');
var Saldo = document.getElementById('Huidige-Saldo');
var StortenButton = document.getElementById('Storten');
var OpnemenButton = document.getElementById('Opnemen');
var Bedrag = document.getElementById('Bedrag');
var TransactionHistory = document.getElementById('Transaction-History');
let SaldoGebruiker1 = [5000];
let SaldoGebruiker2 = [10000];
var Option;

window.onload = function() {
    dropdown.selectedIndex = 0;

    dropdown.addEventListener('click', function() {
        Option = dropdown.options[dropdown.selectedIndex].text;

        if (Option === "Gebruiker 1") {
            Saldo.innerHTML = "Huidig Saldo: " + SaldoGebruiker1 + " Euro";

            StortenButton.addEventListener('click', function() {
                var storten = parseFloat(Bedrag.value);

                if (Option === "Gebruiker 1") {
                    let updatedSaldo = SaldoGebruiker1[0] + storten;
                    SaldoGebruiker1.splice(0, 1, updatedSaldo);

                    if (SaldoGebruiker1 >= 0.1) {
                        OpnemenButton.disabled = false;
                    }

                    Saldo.innerHTML = "Huidig Saldo: " + SaldoGebruiker1[0] + " Euro";
                    
                    addToTransactionHistory("Gebruiker 1", "Storten ", storten);
                }
            });

            OpnemenButton.addEventListener('click', function() {
                var opnemen = parseFloat(Bedrag.value);

                if (Option === "Gebruiker 1") {
                    let updatedSaldo = SaldoGebruiker1[0] - opnemen;
                    SaldoGebruiker1.splice(0, 1, updatedSaldo);

                    if (SaldoGebruiker1 >= 0.1) {
                        Saldo.innerHTML = "Huidig Saldo: " + SaldoGebruiker1[0] + " Euro";
                    } else if (SaldoGebruiker1[0] <= 0) {
                        OpnemenButton.disabled = true;
                        Saldo.innerHTML = "Niet Genoeg Geld";
                    }

                    addToTransactionHistory("Gebruiker 1", "Opnemen", opnemen);
                }
            });

        } else if (Option === "Gebruiker 2") {
            Saldo.innerHTML = "Huidig Saldo: " + SaldoGebruiker2 + " Euro";

            StortenButton.addEventListener('click', function() {
                var storten = parseFloat(Bedrag.value);

                if (Option === "Gebruiker 2") {
                    let updatedSaldo = SaldoGebruiker2[0] + storten;
                    SaldoGebruiker2.splice(0, 1, updatedSaldo);

                    Saldo.innerHTML = "Huidig Saldo: " + SaldoGebruiker2[0] + " Euro";

                    if (SaldoGebruiker2 >= 0.1) {
                        OpnemenButton.disabled = false;
                    }

                    addToTransactionHistory("Gebruiker 2", "Storten", storten);
                }
            });

            OpnemenButton.addEventListener('click', function() {
                var opnemen = parseFloat(Bedrag.value);

                if (Option === "Gebruiker 2") {
                    let updatedSaldo = SaldoGebruiker2[0] - opnemen;
                    SaldoGebruiker2.splice(0, 1, updatedSaldo);

                    if (SaldoGebruiker2 >= 0.1) {
                        Saldo.innerHTML = "Huidig Saldo: " + SaldoGebruiker2[0] + " Euro";
                    } else if (SaldoGebruiker2[0] <= 0) {
                        OpnemenButton.disabled = true;
                        Saldo.innerHTML = "Niet Genoeg Geld";
                    }

                    addToTransactionHistory("Gebruiker 2", "Opnemen", opnemen);
                }
            });
        }
    });
}

function addToTransactionHistory(user, action, amount) {
    var transaction = document.createElement('li');
    transaction.textContent = user + ": " + action + " " + amount + " Euro";
    TransactionHistory.appendChild(transaction);
}