function wlCommonInit(){
	
		var data = {
				firstName : "Gaurav",
				lastName : "Bothra",
		};
//		WL.JSONStore.prototype.
	// Common initialization code goes here
		
	
}



function setsplash(){
	setTimeout(nextScreen(), 10000);
}
function nextScreen() {
	window.location.assign("calculator.html");
}
function displayData() {
	console.log(JSON.stringify(WL.JSONStore.get("data")));
}