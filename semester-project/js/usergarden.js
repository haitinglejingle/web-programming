$(function() {
	var visited = localStorage.getItem("visited");
	var username = localStorage.getItem("username");
	var welcome = document.getElementById("welcome");
	var name = document.getElementById("name");
	if (visited == "false") {
		localStorage.setItem("visited","true");
		console.log("ee");
		welcome.innerHTML = "<p class='lead'>Hello, you're new here!" + "<br>"
	 	+ "Can you tell me your name? " + "You don't have to, but" + "<br>" 
	 	+ "it helps me rememeber what your garden looks like.</p>";
	 		
	 	name.innerHTML = "<form>" + 
	 	"<input id='nameform' type='text' name='username'><br><input type='submit' value='enter'>"
		+ "</form><br>";
	} else if (visited === "true") {
		if (username === null) {
			welcome.innerHTML = "<p class='lead'>Welcome back, guest! " 
			+ "Enter your name if you want to sign up." + "</p>";
			name.innerHTML = "<form>" + 
	 	"<input id='nameform' type='text' name='username'><br><input type='submit' value='enter'>"
		+ "</form><br>";
		} else {
			welcome.innerHTML = "<p class='lead'>Welcome back, " + username + "</p>";
			getGarden(username);
		}
	}
});

function getGarden(username) {
	$.post("https://afternoon-refuge-73840.herokuapp.com/login", function( data ) {
		// returned the following: {age: [], watered: []};	}
	});
}

$("#name").submit(function(e) {
	var username = $("#nameform").val();
	// uncomment this out when you're sure the program works!!
	// localStorage.setItem("username", username);

	$.ajax({
		type: "POST",
		crossDomain: true,
		url: "https://afternoon-refuge-73840.herokuapp.com/new-user",
		data: $("#nameform").serialize(),
		success: function() {
			var name = document.getElementById("name");
			name.innerHTML = "";
			welcome.innerHTML = "<p class='lead'>Great, let's start planting, " + username + "!</p>";
			
		}
	});
	e.preventDefault(); 
});