<?php
    include 'cors.php';
    include 'handlers.php';
    session_start();
    
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        //AUTH
        if(!empty($_POST['register'])) {
            register($_POST['register']);
            die();
        }
        if(!empty($_POST['login'])) {
            login($_POST['login']);
            die();
        }
        //INFO AND CONFIG OF SITE
        if(!empty($_POST['brandInfo'])) {
            brandInfo($_POST['brandInfo']);
            die();
        }
        if(!empty($_POST['myconfig'])) {
            myConfig($_POST['myconfig']);
            die();
        }
        //FILES
        if(!empty($_FILES['logo'])) {
            changeLogo('logo');
            die();
        }
        if(!empty($_FILES['portada'])) {
            changeLogo('portada');
            die();
        }
        if(!empty($_POST['editProduct'])) {
            editProduct($_POST['editProduct']);
            die();
        }

    }