const inputTodo = document.getElementById('inputTodo');

const form = document.querySelector('form');

const ul = document.getElementById('ulTodo');



form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if(inputTodo.value !== ""){
        const li = document.createElement('li');
        li.innerHTML = `${inputTodo.value}`

        ul.appendChild(li);
    }else{
        window.alert("Informe uma tarefa")
    }
    

    inputTodo.value = '';
})

