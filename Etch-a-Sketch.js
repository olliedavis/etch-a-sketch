//autoGrid
var autoGrid = function() {

    var rowMaker = function() {
      for (i = 0; i < 16; i++) {
        $("#table").append("<tr class='row'></tr>");
      }
    };

    rowMaker();

    var cellMaker = function() {
      for (i = 0; i < 16; i++) {
        $(".row").append("<td class='cell'></td>")
      }
    };

    cellMaker();
    console.log("autoGrid");
  }
//
autoGrid();