
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
}

function onSend(){
	var to = $('#to').val();
	var sub = $('#subject').val();
	var msg = $('#msg').val();
	var invocationData = {
			adapter : 'MailAdapter',
			procedure : 'sendM',
			parameters:[to,msg,sub]
		};
		
		var options = {
				onSuccess : feedResult,
				onFailure : feedError
		};
		
		WL.Client.invokeProcedure(invocationData, options);
}


function feedResult(result) {
	var obj = result.invocationResult;
	alert(obj.result);
	
}

function feedError() {
	alert("Unable to contact  API!" + "Please check your internet");
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}