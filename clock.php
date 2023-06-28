<?php
    $time = date('s:i:H');
    $getsHour = date('H', strtotime($time));
    
    function timeOfDayCheck(){
        $getHour = date('G');
        if (  $getHour >= 21 || $getHour <=6  ){
            return "ночь";
        }
        else return "день";
    }

    $timesOfDay= timeOfDayCheck($time);
    $clockColor = '';
    $displayColor = '';
    function colorChange(&$clockColor,&$displayColor,$timesOfDay){
        if ($timesOfDay === "ночь")
        {
            $clockColor = '#65a30d';
            $displayColor = '#374151';
        }
        else {
            $clockColor = '#020617';
            $displayColor = '#f0f0f0';
        }
    }
    colorChange($clockColor,$displayColor,$timesOfDay);
    echo json_encode([
        'dayTime' => $timesOfDay,
        'time' => $time,
        'clockColor' => $clockColor,
        'displayColor' => $displayColor,
    ]);
    