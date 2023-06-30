<?php 
  if(trim($_POST['color']) === '65a30d' || trim($_POST['color']) === '#65a30d'){
    echo json_encode(['color' => '#65a30d']);
  }else{
    echo json_encode(['color' => '']);
  }
