const container = document.querySelector(".container");

function createDivs(){

    for(let i = 0; i < 256; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add('box');
        newDiv.style.outline = "1px solid black";
        newDiv.addEventListener("mouseover", function(){
            newDiv.style.backgroundColor = "black";
        })

        container.appendChild(newDiv);
    }

}

createDivs();





