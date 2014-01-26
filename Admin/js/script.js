$(document).ready(function(){
    
    sessionCheck(true);
    
    $("#loginForm #notifications").fadeOut();
    
    
    $("input").keypress(function(e){
        if(e.which == 13)
            validate();
    });
    
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
        
        if(data.length < 200)
            showError(data);
    });
}

function showError( message )
{
    $("#loginForm #notifications").html(message);
    $("#loginForm #notifications").fadeIn();
}