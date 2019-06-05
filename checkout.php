<?php

include_once './view/layout/base.php';
include_once './view/layout/header.php';

?>

<div class="container" >

    <table class="table">
        <thead>
        <tr>
            <th></th>
            <th>Vehicle</th>
            <th>Price Per Day</th>
            <th>Rental Days</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody id="carts">


        </tbody>

    </table>

</div>

<div class="container" id="checkoutForm">
</div>



    <script src="checkout.js"></script>
<?php include_once './view/layout/footer.php' ?>