<?php 

    $username = $_POST['txtUsername'];
    $password = $_POST['txtPassword'];
    $keep = $_POST['cbKeep'];

    SanitizeUsername($username);

    $password = addslashes($password);
    $username = addslashes($username);
    

    require_once("dbconn.php");
    $db = new db();
    $db->connect();

    $query = "SELECT password FROM admin where username = '$username' ";

    $ret = mysql_query($query);
    if($ret)
    {
        while($row = mysql_fetch_assoc($ret))
        {
            if($row['password'] == $password)
                echo "welcome";
            else
                echo "wrong password";
        }
    } 
    else
        die(mysql_error());    
    


    function SanitizeUsername($username)
    {
        $validchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.";

        if( strlen( $username ) > 30)
        {
            echo ("username too long");
            die();
        }
        
        for( $i = 0; $i < strlen($username); $i++)
        {
            if( !strpos( $validchars, $username[$i] ))
            {
                echo ("invalid characters");
                die();
            }
        }
        
    }
?>