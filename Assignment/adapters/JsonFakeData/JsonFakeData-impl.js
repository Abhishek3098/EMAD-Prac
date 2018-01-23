function getPost() {
	path = "/posts";

	var input = {
	    method : 'get',
	    returnedContentType : 'json',
	    path : path
	};


	return WL.Server.invokeHttp(input);
}