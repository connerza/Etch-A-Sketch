
createTable = function(numCells){
    //default case
    if (typeof numCells != "string") {
        numCells = 16;
    };

    //create table element
    $table = $("<table>", {border: 0});
    $("#outer").append($table);

    //calculate cell width/height
    dimensions = new String(960/numCells) + "px";

    //create rows in table
    for (var i = 0; i < numCells; i++) {
        $row = $("<tr></tr>");
        $table.append($row)
        //create cells in row
        for (var j = 0; j < numCells; j++) {
            $cell = $("<td>");

            //Create div to go in cell
            $div = $("<div>", {onmouseover: "this.style.background = 'red';"});
            $div.css("width", dimensions);
            $div.css("height", dimensions);

            $cell.append($div);
            $row.append($cell);
        };
    };
}

clearGrid = function(){
    //Get number of cells per side to make the new grid
    do {
        numCells = prompt("Please enter new number of cells per side.");
        repeat = false;
        if (numCells < 0) {
            alert("Please enter a number greater than 0!");
            repeat = true;
        };
    } while(repeat);

    //Remove current table
    $("table").remove();

    //Create new table
    createTable(numCells);
}

if(window.attachEvent) {
    window.attachEvent('onload', createTable);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            createTable();
        };
        window.onload = newonload;
    } else {
        window.onload = createTable;
    }
}