<?php
    header('Content-type:application/json;charset=utf-8');
    print_r(json_encode(array(
         "Audi A3 Sportback e-tron" => "$34 500",
         "Chervelot Equinox" => "$60 700",
         "toyota Toyota RAV4" => "$40, 000",
         "Honda" => "$400, 000"
     )));
?>