Assignment 3:
The POST /submit.json API makes variables for username, score, and grid. Score is cast as an int specifically on the server-side because user input can't be trusted. If none of those variables are undefined, then a set of key-value pairs are created for those and the date, then stored in the database. The response is 200 only if the data is successfully saved in the database.

The GET /scores.json API searches for the json username. The username is sanitized first before being added.

The GET / API gets documents from the database sorted by score. HTML is used to loop through the username, scores, and created_at date. If an error is thrown, the response sends back the error. I'm not sure if this is a good thing to show the client the error or not if it is thrown. It may be better to have some other vague error message.

Sadly, nothing is asynchronous. If I were to go back and improve on this, I would use ajax on the client-side and callbacks on the server-side to make async work. I tried it, got some bugs, so I decided to save time by not implementing it. 

Also, the code I changed in the 2048 files are all in game_manager.js. A variable called "enteredUsername" is used like a bool, set as false at every setup, then set as true when the game is terminated. If it's the first time the game has terminated in the current round, a prompt pops up asking for the username. 

Acknowledgements:
Max Bernstein and Justin Roth: Helped me with including/using body-parser dependency correctly.

Mar Freeman: Helped me conceptually understand how requests and responses work, how the client and server communicate.

Ashton Stephens: Explained callback functions to me, even though they're not implemented in this final submission

Chris Phifer: Helped me understand JSON strings and objects.

Ming Chow's examples (chickenofthesea.herokuapp.com): The example helped me with getting the right syntax. 

Hours spent:
10-13 hrs.
