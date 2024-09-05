// Moedas
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.querySelector("h1")

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
    try {
        // exibindo a cotação da moeda select
description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
//calculando o valor da moeda 
let total = amount * price

// garantindo que só terão números 
if(isNaN(total)) {
    return alert("Por favor, digite o valor corretamente.")
}

// formatando o valor 
total = formatCurrencyBRL(total).replace("R$", "")

// exibindo 
result.textContent = `${total} Reais`
        //adicionando uma classe que exibe o footer 
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error)
        // remove o footer, caso dê erro 
        footer.classList.remove("show-result")
        alert("Não foi possível converter no momento. Tente novamente mais tarde!")
    }
}

//formata a moeda em real brasileiro 
function formatCurrencyBRL(value) {
    // Converte para numero para utilizar a propriedade para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}