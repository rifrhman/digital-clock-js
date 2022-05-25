function showClock(){
	
	// getting date by function new Date();
	let date = new Date();

	// get every hours, minutes and seconds from date;
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let second = date.getSeconds();
	

	// declare variable for Session = AM
	let session = "AM";

	// create condition for get session from hours like AM or PM
	if(hours == 0){
		hours = 12;
	}

	if(hours > 12){
		hours = hours - 12;
		session = "PM"
	}

	// Create condition for every hours, minutes, and second
	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	second = (second < 10) ? "0" + second : second;

	// Getting time with new variable and put all to the variable
	let time = hours + ":" + minutes + ":" + second + " " + session;

	// DOM
	document.getElementById("DisplayClock").innerText = time;
	document.getElementById("DisplayClock").textContent = time;

	// set timeout for time
	setTimeout(showClock, 1000);

}

showClock();