<?php

    include 'cors.php';
    include 'db.php';
    session_start();
    $conn = dbConnect();
    $imgs = [];
    
    if(empty($_SESSION['user'])) die(json_encode(array('error' => 'NO AUTH')));
    $user = $_SESSION['user'];
    //HELPERS
    function filterImages($type) {
        $regexp = "/(jpg|jpeg|png)/i";
        $ext = pathinfo($_FILES[$type]['name'], PATHINFO_EXTENSION);
        if($_FILES[$type]['size'] >= 15000000) die(json_encode(array('error' => 'BAD SIZE')));
        if(!preg_match($regexp, $ext)) die(json_encode(array('error' => 'BAD TYPE')));
        return $ext;
    }
    
    function compressImg($img, $dest, $quality, $ext) {
        if($ext == 'jpg' || $ext == 'jpeg') $image = imagecreatefromjpeg($img);
        if($ext == 'png') $image = imagecreatefrompng($img);
        imagejpeg($image, $dest, $quality);
        return true;
    }

    //MAIN CODE
    if(isset($_FILES['img0']) and isset($_POST['name']) and isset($_POST['price']) and isset($_POST['desc']) and isset($_POST['sizes']) and isset($_POST['stock'])) {
        //CHECK IF NAME EXISTS
        $name = htmlspecialchars($_POST['name']);
        $stock = htmlspecialchars($_POST['stock']);
        $stockNum = intval($stock);
        $query2 = "SELECT `name` FROM `products` WHERE `owner` = '$user' AND `name` = '$name'";
        $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
        if(mysqli_num_rows($result2) != 0) die(json_encode(array('error' => 'PRODUCT EXISTS')));
        if(count($_FILES) > 5) die(json_encode(array('error' => 'MAX FILES')));
        //START COMPRESS AND SAVE IMAGES
        foreach($_FILES as $i => $file) {
            $ext = filterImages($i);
            $temp = './temp/' . $i . '.' .$ext;
            move_uploaded_file($_FILES[$i]['tmp_name'], $temp);
            sleep(1);
            $dest = './proyects/' . $user . '/products/' . time() * mt_rand(1, 9) . '.jpg';
            $destWithoutDot = preg_replace('/^\./', '', $dest);
            $saved = compressImg($temp, $dest, 70, $ext);
            if(!$saved) die(json_encode(array('error' => 'NO SAVED IMG')));
            array_push($imgs, $destWithoutDot);
            $dest = null;
        }
        $desc = htmlspecialchars($_POST['desc']) ?? '';
        $price = htmlspecialchars($_POST['price']);
        $sizes = htmlspecialchars($_POST['sizes']);
        $imgsStr = implode(',', $imgs);

        //SAVE IN DATABASE
        $query = "INSERT INTO `products` (`name`, `description`, `price`, `sizes`, `images`, `owner`, `stock`) VALUES ('$name', '$desc', $price, '$sizes', '$imgsStr', '$user', $stock)";
        $result = mysqli_query($conn, $query) or die(json_encode(array('error' => mysqli_error($conn))));
        die(json_encode(array('error' => 0, 'success' => 1)));
    }