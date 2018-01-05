var loginStatement = WL.Server.createSQLStatement("select * from sinfo where userid = ? and password = ?");
function login( userId,  password){
		return WL.Server.invokeSQLStatement({
			preparedStatment : loginStatement,
			parameters : [userId,password]
		});
}


var registerStatment = WL.Server.createSQLStatement("insert into sinfo values(?,?,?,?,?)");
function register(uid,pwd,name,age,city){
	return WL.Server.invokeSQLStatement({
		preparedStatement: registerStatment,
		parameters:[uid,name,pwd,age,city]
	});
}


var delbyIdStatement = WL.Server.createSQLStatement("Delete from sinfo where userid = ?");
function delById(uid) {
	return WL.Server.invokeSQLStatement({
		preaparedStatement : delbyIdStatement,
		parameters : [uid]
	});
}