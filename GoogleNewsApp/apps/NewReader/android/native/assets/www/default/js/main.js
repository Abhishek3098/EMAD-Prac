
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
}




//function getGoogleFeeds(x) {
//	var invocationData = {
//		adapter : 'GoogleNewsAdapter',
//		procedure : 'getNewFeeds',
//		parameters:[x]
//	};
//	
//	var options = {
//			onSuccess : feedResult,
//			onFailure : feedError
//	};
//	
//	WL.Client.invokeProcedure(invocationData, options);
//}
//
//function feedResult(result) {
//	var html = "<div class='row'> \
//		        <div class='col s12'> \
//		          <div class='card' style='width: 100%; height: 30%'> \
//		            <div class='card-image'> \
//		              <img src='http://materializecss.com/images/sample-1.jpg' width= '100%' height='10%'> \
//		              <span class='card-title'>New 1</span> \
//		            </div> \
//		            <div class='card-content'> \
//		              <p>I am a very simple card. I am good at containing small bits of information. \
//		              I am convenient because I require little markup to use effectively.</p> \
//		            </div> \
//		            <div class='card-action'> \
//		              <a href='#'>Read More</a> \
//		            </div> \
//		          </div> \
//		        </div> \
//		      </div>"
//		var obj = result.invocationResult;
//		if (obj.status == "ok") {
//			for(var i =0; i <= obj.totalResults - 1; i++) {
//				alert(obj.articles[i].title);
//			}
//			
//		}
//		$('#target').append(html);
//}
//
//
//function feedError() {
//	alert("Unable to contact News API!" + "Please check your internet");
//}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}