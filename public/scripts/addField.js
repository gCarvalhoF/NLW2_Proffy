// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', clonefield)

// Executar uma ação
function clonefield() {

    // Duplicar os campos
    // Que campos!?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // Função cloneNode retorna uma cópia do nó referido entre parênteses (Node (ou Nó) em js é sempre usado para se referir a items HTML, Parent para os elementos Pais, Children para os elementos filhos.)

    // Pegar os campos
    // Que campos!?
    const fields = newFieldContainer.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página
    // Na página onde!?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    