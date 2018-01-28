
/* JavaScript content from js/main.js in folder common */
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

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}