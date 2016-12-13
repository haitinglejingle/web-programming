// controls all actions when a plot on the garden is clicked

// when a blank plot is clicked, add flower
/*
var plot1 = document.getElementByClassName("plot").getElementById("a");
var plot2 = document.getElementByClassName("plot").getElementById("b");
var plot3 = document.getElementByClassName("plot").getElementById("c");
var plot4 = document.getElementByClassName("plot").getElementById("d");
var plot5 = document.getElementByClassName("plot").getElementById("e");
var plot6 = document.getElementByClassName("plot").getElementById("f");
var plot7 = document.getElementByClassName("plot").getElementById("g");
var plot8 = document.getElementByClassName("plot").getElementById("h");
*/

$(function() {
	$(".plot").click(function(e) {
		//if ($(".plot").find(".sprite-dirt").css("background", "url(pics/spritesheet.png) -115px -5px").length > 0) {
		if ($(".plot").find("#a").css("background", "url(pics/spritesheet.png) -5px -5px").length > 0) {

			console.log("ok");
		}
		e.preventDefault();
		
	});
});