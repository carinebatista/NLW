// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField(){ 
     // Duplicar os campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean- true or false

    // Limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar 
    fields.forEach(function(field){
        // pegar o field do momento e limpa ele
        field.value=""
    })
    
  

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
  