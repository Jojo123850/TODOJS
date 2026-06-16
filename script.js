
const addButton = document.querySelector('#addButton');
const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')



addButton.addEventListener('click',() => {
    const text = taskInput.value
    if( text){
        const li = document.createElement('li')
        li.textContent = text + "";

        const deleteButton = document.createElement('button')
        deleteButton.textContent ="Supprimer";

        deleteButton.addEventListener('click', () => {
            li.remove();
         });
        li.appendChild(deleteButton)

        taskList.appendChild(li);


        taskInput.value = "";
       
    }

});





