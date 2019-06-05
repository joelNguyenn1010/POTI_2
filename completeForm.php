<?php

include_once './view/layout/base.php';
include_once './view/layout/header.php';



?>



<div class="container">
<form id="booking-form" action="completeForm.php" method="post">
    <div class="form-group">
    <label>Name*</label>
   <input required name="info[name]" placeholder="Name"  class="form-control"/>
    </div>

    <div class="form-group">
    <label>Email*</label>
    <input type="email" name="info[email]" placeholder="Email" class="form-control"/>
    </div>
<div class="form-group">
    <label>Address*</label>
    <input required name="info[address]" placeholder="Address" class="form-control"/>
</div>
<div class="form-group">
    <label>City*</label>
    <input required name="info[city]" placeholder="City" class="form-control"/>
</div>
<div class="form-group">
    <label>State*</label>
    <input required  name="info[state]" placeholder="State" class="form-control"/>
</div>
<div class="form-group">
    <label>Post Code*</label>
    <input type="number" required name="info[post-code]" placeholder="Post code" class="form-control"/>
</div>
<div class="form-group">
    <label>Payment Type</label>
    <select class="form-control" name="info[payment]">
        <option>Visa</option>
        <option>PayPal</option>

    </select>

    <div id="hidden-post"></div>
    <div class="form-group mt-5 float-right">
        <a href="http://www-student.it.uts.edu.au/~ngoanguy/assignment2/" class="btn btn-dark">Back to Home</a>
    <button class="btn btn-lg btn-dark" id="booking-btn">Booking</button>
    </div>
</div>

</form>
</div>

<?php






//foreach ($_POST as $value) {
//    echo $value['info'];
//}
$data = $_POST;
$info = \array_splice($data, 0, 1);


// UTS mail system is not working
$to = '12716767@student.uts.edu.au';
$subject = "Your Receipt";
$txt = $data;
$headers = 'From: 12716767@student.uts.edu.au' . "\r\n" .
    'Reply-To: 12716767@student.uts.edu.au' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to,$subject,$txt,$headers);

include_once './view/layout/footer.php' ?>

<script src="completeForm.js"></script>
