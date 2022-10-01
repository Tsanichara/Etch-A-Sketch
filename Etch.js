const container = document.querySelector(".container");

let sizeBtn = document.querySelector(".size");




function createDivs(n){
    

    let square = n**2;

    for(let i = 0; i < square; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('box');
        newDiv.style.outline = "1px solid gray";
        newDiv.addEventListener("mouseover", function(){
            newDiv.style.backgroundColor = "black";
        })

        container.appendChild(newDiv);
    }

    container.style.gridTemplateRows = `repeat(${n}, auto)`;
    container.style.gridTemplateColumns = `repeat(${n}, auto)`;
}

createDivs(16);


function sizeChange(n){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    createDivs(n);
}



sizeBtn.addEventListener("click", function(){
    let newSize = document.getElementById("range").value;
    sizeChange(newSize);
});


let slider = document.getElementById("range");

let output = document.getElementById("value");
output.innerHTML = slider.value;
let output2 = document.getElementById("value2");
output2.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    output2.innerHTML = this.value;
  }
