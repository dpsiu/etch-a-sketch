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

//Changes pen (hover color) to black
let blackBtn = document.querySelector('#black');
blackBtn.addEventListener("click", function (){
    blackPen();
});


let rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener("click", function (){
    rainbowPen();
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
            div.style.backgroundColor = "#4b4b4b";
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
        return size;
    }
}

function clearGrid(){
    const divs = document.querySelectorAll(".gridCell");
    divs.forEach(divs => {
        divs.style.backgroundColor = '#f7f7f7';
    });
}

function blackPen(){
    const divs = document.querySelectorAll(".gridCell");
    divs.forEach(divs => {
        divs.addEventListener("mouseover", function () {
            divs.style.backgroundColor = "#4b4b4b";
        });
    });
}


function rainbowPen(){
    const divs = document.querySelectorAll(".gridCell");
    divs.forEach(divs => {
        divs.addEventListener("mouseover", function () {
            getRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            divs.style.backgroundColor = getRandomColor;
        });
    });
}


/*
function getRandomColor(colorOptions){
    return colorOptions[Math.floor(Math.random() * colorOptions.length)];
}

let colorOptions = ['#58cc02', '#89e219', '#1cb0f6', '#ff4b4b', '#ffc800', '#ff9600', '#ce82ff', '#2b70c9'];

*/