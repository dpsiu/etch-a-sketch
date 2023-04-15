document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    console.log("hi");
})

function createGrid(size){
    let grid = document.getElementById("grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = "aliceblue";
        grid.insertAdjacentElement("beforeend", div);
    }
}

