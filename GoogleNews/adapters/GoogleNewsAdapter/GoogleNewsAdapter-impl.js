function getNewFeeds(tag) {
	path = getPath(tag);
	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};


	return WL.Server.invokeHttp(input);
}
function getPath(tag) {
	var path;
	if (tag === undefined || tag === '') {
		path = 'country=in'
	} else if(tag === 'us' ) {
		path = 'country=us';
	} else if(tag === 'in') {
		path = 'country=in'
	} else if(tag === 'china') {
		path = 'country=cn'
	} else{
		path = 'country=fr'
	}
	return '/v2/top-headlines?'+path+'&apiKey=d40f3f04c7194beeb9e92da9985f55c3';
}
