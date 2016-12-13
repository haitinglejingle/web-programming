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
	message = document.getElementById("message");
	message.innerHTML = "<p class='lead'>Click on a plot to add a flower.</p>";
	$(".plot").click(function(e) {
		var fID = "#" + e.target.id;
		var plotID = ".plot " + fID;
		var dirtID = plotID + ".sprite-dirt";
		var sproutID = plotID + ".sprite-sprout";
		var budID = plotID + ".sprite-bud";
		var flowerID = plotID + ".sprite-flower";

		if ($(dirtID).length > 0) {
			// plant bud
			$(plotID).addClass("sprite-sprout").removeClass("sprite-dirt");
			//$(".plot").find(id).css("background", "url(pics/spritesheet.png) -115px -115px");
			//$('#message').empty();
			message.innerHTML = "<p class='lead'>You planted a daisy.</p>"
			var username = localStorage.getItem("username");
			var species = "daisy";
			// convert letter to number for plot
			var plotID = $(fID)[0].id;
			var position = plotID.charCodeAt(0) - 97;

			// make post request
			$.post("https://afternoon-refuge-73840.herokuapp.com/new-flower", 
				{username: username, species: species, position: position}
			);
		} else if ($(sproutID).length > 0) {
			$(plotID).addClass("sprite-bud").removeClass("sprite-sprout");
		} else if ($(budID).length > 0) {
			$(plotID).addClass("sprite-flower").removeClass("sprite-bud");
		} else if ($(flowerID).length > 0) {
			$(plotID).addClass("sprite-dirt").removeClass("sprite-flower");
		}
		
		e.preventDefault();
	});
	
});