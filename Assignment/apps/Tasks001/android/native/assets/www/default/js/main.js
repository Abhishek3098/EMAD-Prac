
/* JavaScript content from js/main.js in folder common */
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
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}