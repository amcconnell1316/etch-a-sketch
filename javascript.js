let numRows = 16;
const sketchpadContainer = document.getElementById("sketchpadContainer");

for(let i=1;i<=numRows;i++){
    let currentRowDiv = document.createElement("div");
    currentRowDiv.id = "row" + i;
    currentRowDiv.classList.add("row");

    let currentColumnDiv;
    for(let j=1;j<=numRows;j++){
        let currentColumnDiv = document.createElement("div");
        currentColumnDiv.id = "row" + i + "column" + j;
        currentColumnDiv.classList.add("column");
        currentRowDiv.appendChild(currentColumnDiv);
    }

    sketchpadContainer.appendChild(currentRowDiv);

}