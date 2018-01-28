
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	
}


/*$(document).ready(function () {
    Materialize.toast("Hello World! This is a calculator using materialize", 2000 );
    var scr = $('.result'),
        res = 0,
        op = "",
        disp = true;
    $('main').on('click','button',function () {
        let input = $(this).text();
        let scrtxt = $('.result').text();

        switch (input){
            case "C":
                scr.text(0);
                disp = true;
                $("button:first").text("AC");
                Materialize.toast("Clear!", 2000 );
                break;
            case "AC":
                res = 0;
                op = "";
                disp = true;
                scr.text("0");
                Materialize.toast("Clear All!", 2000 );
                break;
            case "%":
                scr.text(parseFloat(scrtxt,10)/100 + "");
                disp = true;
                break;
            case "+/-":
                scr.text(-parseFloat(scrtxt,10) + "");
                break;

            case "+":
                updateResult(parseFloat(scrtxt),"+");
                break;
            case "-":
                updateResult(parseFloat(scrtxt), "-");
                break;
            case "*":
                updateResult(parseFloat(scrtxt), "*");
                break;
            case "\u00f7":
                updateResult(parseFloat(scrtxt), "/");
                break;
            case "=":
                updateResult(parseFloat(scrtxt), "=");
                Materialize.toast("the result is: "+ res, 2000 );
                break;

            default:
                if (scrtxt.length >= 15){
                    Materialize.toast("Sorry! I can't hold so many numbers.", 2000 );
                    break;
                }
                if (disp){
                    scr.text(input);
                    disp = false;
                }
                else {
                    scr.text(scrtxt + input);
                }
                $("button:first").text("C");

        }
    });

    function updateResult(num, opr) {
        disp = true;
        switch (op){
            case "+":
                res += num;
                break;
            case "-":
                res -= num;
                break;
            case "*":
                res *= num;
                break;
            case "/":
                res /= num;
                break;
            default:
                res = num === 0 ? res: num;
                break;
        }
        op = opr == "=" ? "" : opr;
        let scrtxt = res + "";
        scr.text((scrtxt.length>15)?scrtxt.substr(0,15):scrtxt);
    }

});
*/
function setsplash(){
	setTimeout(nextScreen(), 10000);
}
function nextScreen() {
	window.location.assign("calculator.html");
}
function displayData() {
	console.log(JSON.stringify(WL.JSONStore.get("data")));
}


$('#save').on('submit',function(e){
	e.preventDefualt();
	registerFunction();
});

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
	console.log('Clicked!!!');
	var email,pwd,nm,ag,city;
	email=$('#uid').val();
	pwd=$('#pwd').val();
	nm=$('#name').val();
	ag=$('#age').val();
	city=$('#autocomplete').val();
	console.log(email);
	console.log(pwd);
	console.log(nm);
	console.log(ag);
	console.log(city);
	console.log('Done');
	invocationData={
			adapter:'MySqlAdapter',procedure:'register',parameters:[email,pwd,nm,ag,city]		
			};

			option={onSuccess:rsSuccess,
					onFailure:rsFail};

			console.log('Done');
			WL.Client.invokeProcedure(invocationData,option);	
	
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the IBM MobileFirst Platform runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}