function wlCommonInit(){
	getGoogleFeeds("in");
}

function getGoogleFeeds(x) {
	var invocationData = {
		adapter : 'GoogleNewsAdapter',
		procedure : 'getNewFeeds',
		parameters:[x]
	};
	
	var options = {
			onSuccess : feedResult,
			onFailure : feedError
	};
	
	WL.Client.invokeProcedure(invocationData, options);
}

function feedResult(result) {
	alert(result.invocationResult.articles[0].author);
}


function feedError() {
	alert("Unable to contact News API!" + "Please check your internet");
}
