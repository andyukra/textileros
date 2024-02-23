<?php
include 'db.php';

$conn = dbConnect();

//HELPERS
function checkFields($obj) {
    foreach($obj as $field) {
        if(!$field || !preg_match('/^(\w|\.|\@|\,|ñ| |ó|í|á|ú|é|Ó|Í|Á|Ú|É)+$/i', $field)) {
            die(json_encode(array('error' => 'BAD CHARACTERS')));
        };
    }
}

function filterImages($type) {
    $regexp = "/(jpg|jpeg|png)/i";
    $ext = pathinfo($_FILES[$type]['name'], PATHINFO_EXTENSION);
    if($_FILES[$type]['size'] >= 15000000) die(json_encode(array('error' => 'BAD SIZE')));
    if(!preg_match($regexp, $ext)) die(json_encode(array('error' => 'BAD TYPE')));
    return $ext;
}

function compressImg($img, $dest, $quality, $ext) {
    if($ext == 'jpg' || $ext == 'jpeg') {
        $image = imagecreatefromjpeg($img);
        imagejpeg($image, $dest, $quality);
        imagedestroy($image);
        return $dest;
    }
    if($ext == 'png') {
        $image = imagecreatefrompng($img);
        imagealphablending($image, false);
        imagesavealpha($image, true);
        imagepng($image, $dest, 5);
        imagedestroy($image);
        return $dest;
    }
}

//---------------   P   O   S   T   S   ----------------------------

function register($obj) {
    $decode = json_decode($obj, true);
    checkFields($decode);
    $username = $decode['username'];
    $password = $decode['password'];
    $email = $decode['email'];
    $query = "INSERT INTO `users` (`username`, `password`, `email`) VALUES ('$username', '$password', '$email')";
    $query2 = "SELECT `username` FROM `users` WHERE `username` = '$username'";
    global $conn;
    //CHECK IF USER EXISTS
    $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
    $res = mysqli_num_rows($result2);
    if($res != 0) die(json_encode(array("error" => 'USER EXISTS')));
    //CREATE USER
    $result = mysqli_query($conn, $query) or die(json_encode(array('error' => mysqli_error($conn))));
    if($result != 1) die(json_encode(array('error' => "BAD SAVE IN DB")));
    //CREATE BRAND
    $query3 = "INSERT INTO `brands` (`owner`) VALUES ('$username')";
    $result3 = mysqli_query($conn, $query3) or die(json_encode(array('error' => mysqli_error($conn))));
    
    //CREATE FOLDER
    mkdir('./proyects/'. $username, 0777, true);
    mkdir('./proyects/' . $username . '/products', 0777, true);
    //CREATE CONFIG JSON
    $json['myBg'] = 'bg-[#fafafa]';
    $json['myFont'] = 'font-family: quicksand, cursive;';
    $jsonEncoded = json_encode($json);
    file_put_contents('./proyects/' . $username . '/config.json', $jsonEncoded, FILE_USE_INCLUDE_PATH);
    
    $_SESSION['user'] = $username;
    die(json_encode(array("error" => 0)));
}

function login($obj) {
    $decode = json_decode($obj, true);
    checkFields($decode);
    $username = $decode['username'];
    $password = $decode['password'];
    $checked = $decode['checked'];
    $query = "SELECT `username`, `password` FROM `users` WHERE `username`= '$username'";
    global $conn;

    $result = mysqli_query($conn, $query) or die(json_encode(array('error' => mysqli_error($conn))));
    $resDeco = mysqli_fetch_assoc($result);
    if(!$resDeco) die(json_encode(array('error' => 'NO USER')));
    if($resDeco['password'] != $password) die(json_encode(array('error' => 'BAD PASSWORD')));

    if($checked == "true") {
        $token = time() * rand(1, 7);
        $query2 = "UPDATE `users` SET `token` = '$token' WHERE `username` = '$username'";
        $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
        setcookie('user', $username, time() + 60*60*24*7);
        setcookie('token', $token, time() + 60*60*24*7);
    }
    $_SESSION['user'] = $username;
    die(json_encode(array("success" => true, "user" => $username)));
}

function brandInfo($obj) {
    if(empty($_SESSION['user'])) die(json_encode(array('error' => 'NO AUTH')));
    $user = $_SESSION['user'];
    global $conn;
    $decode = json_decode($obj, true);
    $nameNo = $decode['name'] ?? 'a';
    $descriptionNo = $decode['description'] ?? 'a';
    $whatsappNo = $decode['whatsapp'] ?? 'a';
    $facebookNo = $decode['facebook'] ?? 'a';
    $instagramNo = $decode['instagram'] ?? 'a';
    $youtubeNo = $decode['youtube'] ?? 'a';
    
    //PURIFY FIELDS
    $name = htmlspecialchars($nameNo);
    $description = htmlspecialchars($descriptionNo);
    $whatsapp = htmlspecialchars($whatsappNo);
    $facebook = htmlspecialchars($facebookNo);
    $instagram = htmlspecialchars($instagramNo);
    $youtube = htmlspecialchars($youtubeNo);
    
    $query1 = "UPDATE `brands` SET `name` = '$name' WHERE `owner` = '$user'";
    $query2 = "UPDATE `brands` SET `description` = '$description' WHERE `owner` = '$user'";
    $query3 = "UPDATE `brands` SET `whatsapp` = '$whatsapp' WHERE `owner` = '$user'";
    $query4 = "UPDATE `brands` SET `facebook` = '$facebook' WHERE `owner` = '$user'";
    $query5 = "UPDATE `brands` SET `instagram` = '$instagram' WHERE `owner` = '$user'";
    $query6 = "UPDATE `brands` SET `youtube` = '$youtube' WHERE `owner` = '$user'";
    if($name != 'a') {
        mysqli_query($conn, $query1) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($description != 'a') {
        mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($whatsapp != 'a') {
        mysqli_query($conn, $query3) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($facebook != 'a') {
        mysqli_query($conn, $query4) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($instagram != 'a') {
        mysqli_query($conn, $query5) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($youtube != 'a') {
        mysqli_query($conn, $query6) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    die(json_encode(array('success' => 1, 'error' => 0)));
}

function changeLogo($type) {
    if(empty($_SESSION['user'])) die(json_encode(array('error' => 'NO AUTH')));
    $ext = filterImages($type);
    $dest = './temp/' . $type . '.' .$ext;
    $user = $_SESSION['user'];
    global $conn;
    move_uploaded_file($_FILES[$type]['tmp_name'], $dest);
    $finalDest = './proyects/'.$user.'/'.$type.'.'.$ext;
    $finalDestWithoutDot = '/proyects/'.$user.'/'.$type.'.'.$ext;
    $fileSaved = compressImg($dest, $finalDest, 70, $ext);
    if(!$fileSaved) die(json_encode(array('error' => 'NO SAVE LOGO')));
    $query = "UPDATE `brands` SET `$type` = '$finalDestWithoutDot' WHERE `owner` = '$user'";
    mysqli_query($conn, $query) or die(json_encode(array('error' => mysqli_error($conn))));
    die(json_encode(array('error' => 0)));
}

function myConfig($obj) {
    if(!$_SESSION['user']) die(json_encode(array('error' => 'NO AUTH')));
    $filename = './proyects/' . $_SESSION['user'] . '/config.json';
    $decode = json_decode($obj, true);
    $myBg = $decode['myBg'] ?? '';
    $myFont = $decode['myFont'] ?? '';
    $json['myBg'] = htmlspecialchars($myBg);
    $json['myFont'] = htmlspecialchars($myFont);
    $jsonEncoded = json_encode($json);
    $state = file_put_contents($filename, $jsonEncoded, FILE_USE_INCLUDE_PATH);
    if($state !== 0) die(json_encode(array('error' => 0, 'success' => 1)));
    die(json_encode(array('error' => 1)));
}

function editProduct($obj) {
    if(empty($_SESSION['user'])) die(json_encode(array('error' => 'NO AUTH')));
    $user = $_SESSION['user'];
    $decoded = json_decode($obj, true);
    $desc = $decoded['desc'] ?? '';
    $price = $decoded['price'] ?? null;
    $stock = $decoded['stock'] ?? null;
    $stockNum = intval($stock);
    $descSafe = htmlspecialchars($desc);
    $idSafe = htmlspecialchars($decoded['id']);
    $sizes = $decoded['sizes'];
    $query1 = "UPDATE `products` SET `description` = '$descSafe' WHERE `id` = $idSafe AND `owner` = '$user'";
    $query2 = "UPDATE `products` SET `price` = $price WHERE `id` = $idSafe AND `owner` = '$user'";
    $query3 = "UPDATE `products` SET `sizes` = '$sizes' WHERE `id` = $idSafe AND `owner` = '$user'";
    $query4 = "UPDATE `products` SET `stock` = '$stockNum' WHERE `id` = $idSafe AND `owner` = '$user'";
    global $conn;

    if($desc) {
        $result1 = mysqli_query($conn, $query1) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($price) {
        $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    if($stock) {
        $result3 = mysqli_query($conn, $query4) or die(json_encode(array('error' => mysqli_error($conn))));
    }
    $result3 = mysqli_query($conn, $query3) or die(json_encode(array('error' => mysqli_error($conn))));    
    echo json_encode(array('error' => 0, 'success' => 1));
}

//------------------   G   E   T   S   -------------------------------
function auth() {
    global $conn;
    if(!empty($_SESSION['user'])) {
        $user = $_SESSION['user'];
        //GET BRAND
        $query2 = "SELECT * FROM `brands` WHERE `owner` = '$user'";
        $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
        $resDeco2 = mysqli_fetch_assoc($result2);
        die(json_encode(array("success" => true, "user" => $resDeco2)));
    }
    if(!empty($_COOKIE['user']) and !empty($_COOKIE['token'])) {
        $user = $_COOKIE['user'];
        $token = $_COOKIE['token'];
        $query = "SELECT `token` FROM `users` WHERE `username` = '$user'";
        $result = mysqli_query($conn, $query) or die(json_encode(array('error' => "BAD COOKIE")));
        $resDeco = mysqli_fetch_assoc($result);
        if($resDeco['token'] != $token) die(json_encode(array('error' => "BAD TOKEN")));
        $_SESSION['user'] = $user;
        //GET BRAND
        $query2 = "SELECT * FROM `brands` WHERE `owner` = '$user'";
        $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
        $resDeco2 = mysqli_fetch_assoc($result2);
        die(json_encode(array("success" => true, "user" => $resDeco2)));
    }
    die(json_encode(array('success' => false)));
}

function close() {
    if(!empty($_SESSION['user'])) {
        $_SESSION['user'] = '';
    }
    if(!empty($_COOKIE['user']) and !empty($_COOKIE['token'])) {
        setcookie('user', '', -1);
        setcookie('token', '', -1);
    }
    die('CLOSED');
}

function getPage($brand) {
    checkFields(array($brand));
    global $conn;
    //GET BRAND DATA
    $query1 = "SELECT * FROM `brands` WHERE `name` = '$brand'";
    $result = mysqli_query($conn, $query1) or die(json_encode(array('error' => mysqli_error($conn))));
    if(mysqli_num_rows($result) == 0) die(json_encode(array("error" => "404")));
    $myBrand = mysqli_fetch_assoc($result);
    $owner = $myBrand['owner'];
    $filename = "./proyects/" . $owner . '/config.json';
    $myConfig = json_decode(file_get_contents($filename, FILE_USE_INCLUDE_PATH));
    //GET PRODUCTS
    $arr = [];
    $query2 = "SELECT * FROM `products` WHERE `owner` = '$owner'";
    $result2 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
    while($row = mysqli_fetch_assoc($result2)) {
        array_push($arr, $row);
    }

    echo json_encode(array("brand" => $myBrand, "config" => $myConfig, "error" => 0, 'products' => $arr));
}

function getMyProducts() {
    if(empty($_SESSION['user'])) die(json_encode(array('error' => 'NO AUTH')));
    $user = $_SESSION['user'];
    global $conn;
    $arr = [];
    $query = "SELECT * FROM `products` WHERE `owner` = '$user'";
    $result = mysqli_query($conn, $query) or die(json_encode(array('error' => mysqli_error($conn))));
    if(mysqli_num_rows($result) === 0) die(json_encode(array('error' => 'NO PRODUCTS')));
    while($row = mysqli_fetch_assoc($result)) {
        array_push($arr, $row);
    }
    echo json_encode($arr);
}

function deleteProduct($id) {
    if(empty($_SESSION['user'])) die(json_encode(array('error' => 'NO AUTH')));
    $user = $_SESSION['user'];
    $idSafed = htmlspecialchars($id);
    $idInt = intval($idSafed);
    global $conn;
    
    //GET IMGS
    $query2 = "SELECT `images` FROM `products` WHERE `id` = $idInt AND `owner` = '$user'";
    $result1 = mysqli_query($conn, $query2) or die(json_encode(array('error' => mysqli_error($conn))));
    if(mysqli_num_rows($result1) == 0) die(json_encode(array('error' => 'NOT FOUND PRODUCT')));
    $arr = explode(',', mysqli_fetch_row($result1)[0]);
    foreach($arr as $img) {
        unlink('.'.$img);
    }
    $query = "DELETE FROM `products` WHERE `id` = $idInt AND `owner` = '$user'";
    $result = mysqli_query($conn, $query) or die(json_encode(array('error' => mysqli_error($conn))));
    
    echo json_encode(array('error' => 0, 'success' => 1));
}

function getBrands() {
    global $conn;
    $arr = [];
    $query1 = "SELECT * FROM `brands`";
    $result1 = mysqli_query($conn, $query1) or die(json_encode(array('error' => mysqli_error($conn))));
    while($row = mysqli_fetch_assoc($result1)) {
        array_push($arr, $row);
    }
    echo json_encode(array('error' => 0, 'success' => 1, 'brands' => $arr));
}

function getProduct($id) {
    global $conn;
    $idSafed = htmlspecialchars($id);
    $idInt = intval($idSafed);
    $query1 = "SELECT * FROM `products` WHERE `id` = $idInt";
    $result1 = mysqli_query($conn, $query1) or die(json_encode(array('error' => mysqli_error($conn))));
    if(mysqli_num_rows($result1) == 0) die(json_encode(array('error' => 'NOT FOUND PRODUCT')));
    $product = mysqli_fetch_assoc($result1);
    echo json_encode(array('error' => 0, 'success' => 1, 'product' => $product));
}


