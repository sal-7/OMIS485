"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var error=false;
    $("email_error").innerHTML="*";
    $("email_error2").innerHTML="*";
    $("name_error").innerHTML="*";

    // validate the entries
    if (emailAddress1 == "") 
    {
    	error=true;
    	$("email_error").innerHTML = "First email address entry required";
    } 
    if (emailAddress2 == "")
    {
    	error=true;
    	$("email_error2").innerHTML = "Second email address entry required";
    } 
    if (emailAddress2 != emailAddress1) 
    {
    	error=true;
    	$("email_error2").innerHTML = "Email address entries must match";
    } 
    if (firstName == "") 
    {
    	error=true;
    	$("name_error").innerHTML = "First name entry required";
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (!error) 
    {
        $("email_form").submit(); 
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
