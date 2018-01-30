function wlCommonInit(){
}

function checkType(a){
	var invocationData = {
			adapter : 'MyJavaAdapter',
			procedure : 'typechecker',
			parameters:[a]
		};
		
		var options = {
				onSuccess : feedResult,
				onFailure : feedError
		};
		
		WL.Client.invokeProcedure(invocationData, options);
}

function checkChar() {
	var a = $('#charac').val();
	console.log(a);
	var invocationData = {
			adapter : 'MyJavaAdapter',
			procedure : 'charchecker',
			parameters:[a]
		};
		
		var options = {
				onSuccess : feedResult2,
				onFailure : feedError
		};
		
		WL.Client.invokeProcedure(invocationData, options);
}


function feedResult(result) {
		var obj = result.invocationResult;
		$('#resultComp').val(obj.result);
}

function feedResult2(result) {
	var obj = result.invocationResult;
	$('#resultComp2').empty();
	$('#resultComp2').append(obj.result);
}
function feedError() {
	alert("Unable to contact News API!" + "Please check your internet");
}