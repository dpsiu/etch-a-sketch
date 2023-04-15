document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    console.log("hi");
})

let newGrid = document.querySelector('#newGrid');
newGrid.addEventListener("click", function(){
    let size = getSize();
    createGrid(size);
});

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

function getSize(){
    let size = prompt("How many rows/columns would you like?");
    if (size == ''){
        alert("Please enter a number between 0 & 100.")
    }
    else if (size < 0){
        alert("Please enter a number greater than 0 and less than 100.");
    }
    else if (size > 100){
        alert("Please enter a number less than 100.");
    }
    else {
        return size;
    }
}