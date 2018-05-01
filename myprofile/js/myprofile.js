$(document).ready(function(){
	
    $("#myprofile11").click(function(){
		$("#myProfile22").show();
		$("#changePassword").hide();
		$("#Membership").hide();
		$("#Payments").hide();
		$("#Account").hide();
	});
	
    $("#change_password11").click(function(){
        $("#changePassword").show();
		$("#myProfile22").hide();
		$("#Membership").hide();
		$("#Payments").hide();
		$("#Account").hide();
	});
	
	$("#membership11").click(function(){
        $("#Membership").show();
		$("#changePassword").hide();
		$("#myProfile22").hide();
		$("#Payments").hide();
		$("#Account").hide();
	});
	
	$("#payments11").click(function(){
        $("#Membership").hide();
		$("#changePassword").hide();
		$("#myProfile22").hide();
		$("#Payments").show();
		$("#Account").hide();
	});
	
	$("#account11").click(function(){
        $("#Payments").hide();
		$("#myProfile22").hide();
		$("#changePassword").hide();
		$("#Membership").hide();
		$("#Account").show();
	});


	$('#updatePassword').click(function (e) {
		var firstpassword = document.reg.newPassword.value;
		var secondpassword = document.reg.repeatNewPassword.value;

		if (firstpassword == secondpassword) {
			return true;
		}
		else {
			alert("password must be same!");
			return false;
		}
	})
});
var reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

function PhoneValidation(phoneNumber) {
	var OK = reg.exec(phoneNumber.value);
	if (!OK)
		window.alert("phone number isn't  valid");

}



function matchpass() {
	var firstpassword = document.reg.newPassword.value;
	var secondpassword = document.reg.repeatNewPassword.value;
	alert("password");

	if (firstpassword != secondpassword) {
		alert("password must be same!");
		return false;
	}
	else {
		return true;
	}
}	

