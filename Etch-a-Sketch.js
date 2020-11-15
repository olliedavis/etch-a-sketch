let cellCount = 23;

//autoGrid - Creates the Rows and Columns
function autoGrid() {
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




