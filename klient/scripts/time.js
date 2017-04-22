var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("stan_in_time").innerHTML = d.toLocaleTimeString();
}

function setTime() {
	
}