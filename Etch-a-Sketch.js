let cellCount = prompt("Please enter a number. This will be squared so don't go mad :o");
function cellPrompt() {
  if(isNaN(cellCount)){
    cellPrompt();
  } else {
    return cellCount;
}}

//autoGrid - Creates the Rows and Columns
function autoGrid() {
  cellPrompt();
  rowMaker();
  cellMaker();
  colorMaker();
 }

//Runs the above functions on page load
autoGrid();


function rowMaker() {
  for (i = 0; i < cellCount; i++) {
    $("#table").append("<tr class='row'></tr>");
  }
};

function cellMaker() {
  for (i = 0; i < cellCount; i++) {
    $(".row").append("<td class='cell'></td>")
  }
};

//listening - 
function colorMaker(){
  let cell = document.getElementsByClassName("cell");
  for (let i = 0; i < cell.length; i++){
    cell[i].addEventListener('mouseover', getColor);
  }
  function getColor(event) {
    let selectedCell = event.target;
    return selectedCell.style.backgroundColor = "black"
}
}




