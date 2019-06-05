<?php


class CarController {

    public $seats;

    function __construct()
    {
        $this->seats = $_POST["seats"];
    }

    function save() {
       $_SESSION["seats"] = $this->seats;
    }
}


$car = new CarController();
$car->save();

echo $car->seats;
echo $_SESSION["seats"];