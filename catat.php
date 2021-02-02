<?php
$text="";  
if($_GET['text'] != null ){
    $text= $_GET['text'];
    $fp = fopen('hasil.txt', 'a');//opens file in append mode  
fwrite($fp, date("Y-m-d h:i:s",strtotime("now"))." ");  
fwrite($fp, $text."\n");
fwrite($fp, '');  
fclose($fp);  
  
echo "File appended successfully";  
}

?>  