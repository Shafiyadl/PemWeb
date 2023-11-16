<?php
include "Controller/ProductController.php";

use Controller\ProductController;
//Deklarasikan objek class
$productController = new ProductController;

//tampilkan hasil kembalian dari method getAllProduct menggunakan echo
header('Content-Type: application/json; charset=utf-8');
echo $productController->getAllProduct();