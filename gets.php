<?php
    
    include 'cors.php';
    include 'handlers.php';
    session_start();
    
    if($_SERVER['REQUEST_METHOD'] == 'GET') {
        if(!empty($_GET['a'] == 'auth')) {
            auth();
        }
        if(!empty($_GET['a'] == 'close')) {
            close();
        }
        if(!empty($_GET['a'] == 'getpage') and !empty($_GET['b'])) {
            getPage($_GET['b']);
        }
        if(!empty($_GET['a'] == 'getMyProducts')) {
            getMyProducts();
        }
        if(!empty($_GET['a'] == 'deleteProduct') and !empty($_GET['id'])) {
            deleteProduct($_GET['id']);
        }
        if(!empty($_GET['a'] == 'getBrands')) {
            getBrands();
        }
        if(!empty($_GET['a'] == 'getProduct') and !empty($_GET['id'])) {
            getProduct($_GET['id']);
        }
    }