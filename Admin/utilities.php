<?php 

switch($_POST['method'])
{
    case "SessionCheck": SessionCheck(); break;
}

    
function SessionCheck()
{
    session_start();
    
    
    if( !isset($_SESSION['username'] ) )
    {
        if($_POST['isLogin'])
            header('Location:login.html');
        else
            header('Location:index.html');
    }
    else
    {   
       die();
    }
}
?>