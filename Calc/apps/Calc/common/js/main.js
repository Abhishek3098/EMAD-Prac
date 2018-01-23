function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
}
function loginSuccess(result)
{
	var rs=result.invocationResult.resultSet;
	
//	alert("login fail try again");
if(rs.length==1)
	{
	alert("login succes");
	window.location.assign("#home");
	$('#t1').val("welcome"+rs[0].name+",");
	$('#t2').val("welcome"+rs[0].age+",");
	$('#t3').val("welcome"+rs[0].city+",");
	}
}

function loginFail()
{
	alert("login fail try again");

}


function loginFunction()
{
var uid,pwd;
uid=$('#luserid').val();
pwd=$('#lpassword').val();

invocationData={
adapter:'MySqlAdapter',procedure:'login',parameters:[uid,pwd]		
};

option={onSuccess:loginSuccess,onFailure:loginFail};


WL.Client.invokeProcedure(invocationData,option);	

}
function rsSuccess(result)
{

	
	//alert("register fail try again");
	var flag=result.isSuccessFul;
	if(flag=true)
		 {
		alert("successfull");
		//alert("Record Affected:"+result.updateStatementResult.updateCount);
		 
		 }
	
	else
	 {alert("failed");

}}

function rsFail()
{
	alert("register fail try again");

}

function registerFunction()
{
	var uid,pwd,nm,ag,city;
	uid=$('#ruserid').val();
	pwd=$('#rpassword').val();
	nm=$('#rname').val();
	ag=$('#rage').val();
	city=$('#rcity').val();

	
	invocationData={
			adapter:'MySqlAdapter',procedure:'register',parameters:[uid,pwd,nm,ag,city]		
			};

			option={onSuccess:rsSuccess,
					onFailure:rsFail};


			WL.Client.invokeProcedure(invocationData,option);	
	
}
