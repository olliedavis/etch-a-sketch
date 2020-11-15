let cellCount = 6;

let cell = document.getElementsByClassName("cell");

//autoGrid - Creates the Rows and Columns
function autoGrid() {
  rowMaker();
  cellMaker();
  squareMaker()
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

//squareMaker - Keeps the grid as a square by dividing the width of the of the cable by the requested cell count. 
function squareMaker () {
  let cellSize = ((`500 / ${cellCount}`) + "px");
  document.getElementsByClassName("cell").style.width = cellSize;
  document.getElementsByClassName("cell").style.height = cellSize;
}