$(document).ready(function(){
    $("#loginForm #notifications").fadeOut();
});



function validate()
{
    var txtUsername = document.getElementById("txtUsername").value;
    var txtPassword = document.getElementById("txtPassword").value;
    var cbKeep = document.getElementById("cbKeep").value;
    
    
    if( txtUsername.length == 0 || txtPassword.length == 0 )
    {
        showError("Please input Username and Password");
        return;
    }
    
    var url = "validation.php";
    $.post( url, {txtUsername: txtUsername, txtPassword: txtPassword, cbKeep:cbKeep}, function(data){
        
        if(data.length < 100)
            showError(data);
        else
            $("body").html(data);     
    });
}

function showError( message )
{
    $("#loginForm #notifications").html(message);
    $("#loginForm #notifications").fadeIn();
}