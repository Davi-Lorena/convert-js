// Moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Adicionando o evento input que captura todos os dígitos "digitados" para manipular seus dados
amount.addEventListener("input", () => {
// eu atribuo o regex do input e substituo as letras, que não me interessam nesse caso, por nada ("") 
const hasCaractersRegex = /\D+/g
amount.value = amount.value.replace(hasCaractersRegex, "")
})

// Permitindo a seleção da moeda, captando os dados sem enviá-los capturando o submit do form e moldando-o
form.onsubmit = (event) => {
    event.preventDefault()

    // Criado para a conversão do valor do real para tais moedas, especificando cada uma 
switch (currency.value) {
case "USD":
    convertCurrency(amount.value, USD, "US$")
break
case "EUR": 
convertCurrency(amount.value, EUR, "€")
break
case "GBP": 
convertCurrency(amount.value, GBP, "£")
break
}


}

//função para converter a moeda 
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}
