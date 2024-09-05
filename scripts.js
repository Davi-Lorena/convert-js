const amount = document.getElementById("amount")

// Adicionando o evento input que captura todos os dígitos "digitados" para manipular seus dados
amount.addEventListener("input", () => {
// eu atribuo o regex do input e substituo as letras, que não me interessam nesse caso, por nada ("") 
const hasCaractersRegex = /\D+/g
amount.value = amount.value.replace(hasCaractersRegex, "")
})

