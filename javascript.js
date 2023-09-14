const sketchpadContainer = document.getElementById("sketchpadContainer");
const newSketchpadButton = document.getElementById("newSketchpadBtn");
newSketchpadButton.addEventListener('click', createNewSketchpad);
createSketchpad(16);

function createSketchpad(numRows){
    for(let i=1;i<=numRows;i++){
        let currentRowDiv = document.createElement("div");
        currentRowDiv.id = "row" + i;
        currentRowDiv.classList.add("row");

        let currentColumnDiv;
        for(let j=1;j<=numRows;j++){
            let currentColumnDiv = document.createElement("div");
            currentColumnDiv.id = "row" + i + "column" + j;
            currentColumnDiv.classList.add("column");
            currentColumnDiv.addEventListener('mouseenter', handleHover);
            currentRowDiv.appendChild(currentColumnDiv);
        }

        sketchpadContainer.appendChild(currentRowDiv);

    }
}

function handleHover(e){
    const div = e.currentTarget;
    div.classList.add("hovered");
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createNewSketchpad(){
    let numRows = Number(prompt("How many squares per side?"));
    if(Number.isInteger(numRows) && numRows <= 100 && numRows > 0)
    {
        removeAllChildNodes(sketchpadContainer);
        createSketchpad(numRows);
    } else {
        alert("Squares per side must be an integer less than 100");
    }
}