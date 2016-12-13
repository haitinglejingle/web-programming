$(function() {
	localStorage.setItem("visited","false");
	var visited = localStorage.getItem("visited");
	var username = localStorage.getItem("username");
	
	if (visited == "false") {
		// localStorage.setItem("visited","true");
		var welcome = document.getElementById("welcome");
		welcome.innerHTML = "<p class='lead'>Hello, you're new here!" + "<br>"
	 	+ "Can you tell me your name? " + "You don't have to, but" + "<br>" 
	 	+ "it helps me rememeber what your garden looks like.</p>";
	 		
	 	var name = document.getElementById("name");
	 	name.innerHTML = "<form>" + 
	 	"<input id='nameform' type='text' name='username'><br><input type='submit' value='enter'>"
		+ "</form><br>";
	} else if (visited === "true") {
	}
});

$("#name").submit(function(e) {
	var username = $("#nameform").serialize();
	$.ajax({
		type: "POST",
		crossDomain: true,
		url: "https://afternoon-refuge-73840.herokuapp.com/new-user",
		data: username,
		success: function() {
			console.log("mich was here");
			welcome.innerHTML = "Great, let's start planting, " + username + "!";
			name.innerHTML = "";
		}
	});
	e.preventDefault(); 
});