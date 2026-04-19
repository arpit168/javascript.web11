let inputs = document.getElementById("inp");
let Text = document.getElementById(" text");

function Add() {
    if(inputs.value == ""){ 
        alert("please Enter Task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa fa-trash" aria-hidden="true"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        
    }


    
}
