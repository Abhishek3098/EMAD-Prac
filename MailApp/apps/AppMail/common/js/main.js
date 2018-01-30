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