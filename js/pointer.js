
$( "#previewdiv" ).mousemove(function( event ) {
	var gridposition = $("#previewdiv").position();
	var workposition = $("#workspace").position();
	var x = parseInt(event.pageX-gridposition.left-workposition.left,10);
	var y = parseInt(event.pageY-gridposition.top-workposition.top,10);
	$( "#coordinates" ).text( "Coordinates: " + x + ", " + y );

});
