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
	var message = document.getElementById("message");
	message.innerHTML = "<p class='lead'>Click on a plot to add a flower.</p>";
	$(".plot").click(function(e) {
		if ($(".plot").find(".sprite-dirt").length > 0) {
			// plant bud
			var id = "#" + e.target.id;
			$(".plot").find(id).css("background", "url(pics/spritesheet.png) -115px -115px");
			
			var username = localStorage.getItem("username");
			var species = "daisy";
			// convert letter to number for plot
			var plotID = $(id)[0].id;
			var position = plotID.charCodeAt(0) - 97;

			// make post request
			$.post("https://afternoon-refuge-73840.herokuapp.com/new-flower", 
				{username: username, species: species, position: position}
				);
		}
		e.preventDefault();
	});
	
});