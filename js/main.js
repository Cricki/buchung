$(document).ready(function(){
    $('select').formSelect();
  });

const buchSatzList = document.querySelector("#buchungsSatz");


// Load all EventListener

loadEventListeners();

// Load all event listeners
function loadEventListeners(){
        // DOM load event
        document.addEventListener("DOMContentLoaded", getTasks);
        // Add task event
        form.addEventListener("submit", getValues);
        // Remove task event
        taskList.addEventListener("click", removeTask);
        // Clear task event
        clearBtn.addEventListener("click", clearTasks);
}


// Add getValues
function getValues(e){

    // create li element
    const li = document.createElement("li");
    // li.className = "collection-item";
    //Create textnode and append to li
    li.appendChild(document.createTextNode("Soll an haben"));
    // create new link element
    const link = document.createElement("a");
    // append li to ul
    buchSatzList.appendChild(li);


    e.preventDefault();

}