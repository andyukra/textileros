<?php

/*function dbConnect() {
  $servername = "localhost";
  $username = "andy";
  $password = "";
  $db = "textileros";
  $conn = new mysqli($servername, $username, $password, $db);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  return $conn;
}*/

function dbConnect() {
  $servername = "localhost";
  $username = "xxx";
  $password = "xxx";
  $db = "xxx";
  $conn = new mysqli($servername, $username, $password, $db);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  return $conn;
}