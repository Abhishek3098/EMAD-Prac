
/* JavaScript content from js/main.js in folder common */
var myhead="";
function wlCommonInit(){
}
function myfunction(x){
	var invocationData={
			adapter:'NewsAdapter',
		    procedure:'getNews', 
		    parameters:[x]
	};
	var options = {
			onSuccess:feedScs,
			onFailure:feedFld
	};
	myhead=x;
	WL.Client.invokeProcedure(invocationData,options);
}
function feedScs(result){
var news = result.invocationResult.rss.channel.item;
	alert("Total:"+news.length+"news");
	$('#newshead').empty();
	$('#newshead').append(myhead+"News");
	
	for(i=0;i<news.length;i++)
		{
		var single = news[i];
		var ndata="";
		ndata +="<div class='ndiv' style='height:150px'>"
		ndata +="<div class='hd'>"+single.title+"</div>";
		ndata +="<div class='dt'>"+single.pubDate+"</div>";
		if(i%2==0)
			ndata +="<div class='hd'>"+single.description.replace('align=\"left\"'," align=right height=90px")+"</div>";
		else
			ndata +="<div class='hd'>"+single.description.replace('align=\"left\"'," align=left height=90px")+"</div>";
		ndata +="<div class='link'><a href='"+single.link+"'>...Read More</a></div>";
		ndata+="</div>"
		
		$('#mydisplay').append(ndata);
		}
	
	window.location.assign("#dispage");
}
function feedFld(){
	alert("Unable to contact News API!" + "Please check your internet");
}
/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}