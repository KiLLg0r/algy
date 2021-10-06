<?php

session_start();

if (isset($_POST['searchItem'])) {
    function validate($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $data = validate($_POST['searchItem']);

    echo $data;
} else {
    echo "Error";
}
