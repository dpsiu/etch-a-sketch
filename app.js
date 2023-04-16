//Creates default 16x16 grid
document.addEventListener("DOMContentLoaded", function(){
    createGrid(16);
    console.log("hi");
})

//Creates new grid following "New Grid" selection
let newGrid = document.querySelector('#newGrid');
newGrid.addEventListener("click", function(){
    let size = getSize();
    createGrid(size);
    clearGrid();
});

//Clears the grid following "clear" selection
let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener("click", function (){
    clearGrid();
});


//Applies grid methods to create grid
function createGrid(size){
    let grid = document.getElementById("grid");
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.classList.add("gridCell");
        div.style.backgroundColor = "#f7f7f7";
        div.addEventListener("mouseover", function () {
            div.style.backgroundColor = "black";
        });
        grid.insertAdjacentElement("beforeend", div);
    }
}

//Once New Grid is selected, prompts user for Row x COlumn value between 0 & 100
function getSize(){
    let size = prompt("How many rows/columns would you like?");
    let div = document.createElement('div');
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
        div.style.backgroundColor = "white";
        console.log("hasfhjik");
        return size;
    }
}

function clearGrid(){
    const divs = document.querySelectorAll(".gridCell");
    divs.forEach(divs => {
        divs.style.backgroundColor = '#f7f7f7';
    });
}


//Clears board, resets grid/divCell styles
//New Grid OR Clear is clicked
//change div background style to white

//Start with clear first. Has an individual function, unlike new grid which must create a new grid and clear the old one. WHen it creates, can it creates with a color?
//createGrid(42); creates 42 x 42 divs, each starting out white with a black colored mouse over effect. createGrid alrdy creates grid and adds color with hover property
//This is the key to create Grid?
//Clear button
//Turns all divs background color to Polar.
//When Clear is pressed
//Target all dics within grid, or grid itself
//change all style to background color Polar