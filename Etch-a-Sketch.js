let cellCount = 5;

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


