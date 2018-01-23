/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var loginStatement=WL.Server.createSQLStatement("Select * from  sinfo where userid=? and password=?");
function login(uid,pwd){
	return WL.Server.invokeSQLStatement({
		preparedStatement : loginStatement,
		parameters : [uid,pwd]
	});	
}

var registerStatement=WL.Server.createSQLStatement
("insert into student values(?,?,?,?,?)");
function register(uid,pwd,name,age,city){
	return WL.Server.invokeSQLStatement({
		preparedStatement : registerStatement,
		parameters : [uid,name,pwd,age,city]
	});	
}

var delByidStatement=WL.Server.createSQLStatement
("delete from sinfo userid=?");
function delByid(uid,pwd,name,age,city){
	return WL.Server.invokeSQLStatement({
		preparedStatement : delByidStatement,
		parameters : [uid]
	});	
}





/*var procedure1Statement = WL.Server.createSQLStatement("select COLUMN1, COLUMN2 from TABLE1 where COLUMN3 = ?");
function procedure1(param) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [param]
	});
}*/

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
/*function procedure2(param) {
	return WL.Server.invokeSQLStoredProcedure({
		procedure : "storedProcedure2",
		parameters : [param]
	});
}*/







