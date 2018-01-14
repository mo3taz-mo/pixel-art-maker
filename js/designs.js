// Select color input
// Select size input
var color, heightVal ,widthVal, table;

// When size is submitted by the user, call makeGrid()


function makeGrid() {
    heightVal = $("#input_height").val();
	widthVal = $("#input_width").val();
    table = $("#pixel_canvas");

	table.children().remove();
	
	for (var row = 0; row < heightVal; row++) {
		table.append("<tr></tr>");
		for (var col = 0; col < widthVal; col++) {
			table.children().last().append("<td></td>");
		}
	}
	
	table.on("click", "td", function() {
		color = $("#colorPicker").val();
		$(this).attr("bgcolor", color);
	});

}

$("input[type='submit']").click(function(e) {
	e.preventDefault();
	makeGrid();
});

$("input[type='reset']").click(function() {
	$("table").children().remove();
    $("#colorPicker").val("#ff0000");
});
