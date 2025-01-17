//selecting ol
var ol = document.getElementById("list-container")
//selecting input
var input = document.getElementById("input")

function add(){
        // Create an new element
        var list = document.createElement("li");
        //Retrive the input text values and delete buttons
        list.innerHTML = input.value+ "<button onclick='deleteitem(event)'>Delete content</button>";
        //append the lkist items
        ol.append(list);
}

// Delete button using event
function deleteitem(event){
    event.target.parentElement.remove()
}





