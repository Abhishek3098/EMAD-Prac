function typechecker(a) {
	var myObj = new com.gnu.ac.myClass();
	
	return {
		result:myObj.checkDataType(a)
	};
	
}
function charchecker(a) {
	return {
		result:com.gnu.ac.myClass.checkCharInfo(a)
	};
}