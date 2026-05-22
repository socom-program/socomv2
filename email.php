<?php
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$body = $_POST['body'] ?? '';

$datum = date("Y-m-d h:i:s");

if ($name == "" || $email == "" || $body == "") {
    echo "<H2>Sorry!</H2>";
    echo "Please fill in all form fields.";
    return;
}

echo "<H2>Thank you for your message!</H2>";
echo "<strong>Date:</strong> $datum <br><br>";
echo "<strong>Name:</strong> $name <br><br>";
echo "<strong>Email:</strong> $email <br><br>";
echo "<strong>Message:</strong><br> $body<br><br>";

$To_email = "peter.landschuetzer@vliz.be,
alizee.roobaert@vliz.be,
afay@ldeo.columbia.edu,
j.d.shutler@exeter.ac.uk";

$xtra = "From: SOCOM-webpage@vliz.be \n";
$xtra .= "Reply-To: $email \n";
$xtra .= "Content-Type: text/html; charset=utf-8\r\n";

mail($To_email, "Message from SOCOM page ($name)", 
"<br>
<strong>Date:</strong> $datum<br><br>
<strong>Name:</strong> $name <br><br>
<strong>Email:</strong> $email <br><br>
<strong>Message:</strong><br> $body<br>
", $xtra);

mail($email, "Thank you for your message to SOCOM",
"<br>
<strong>Date:</strong> $datum<br><br>
<strong>Name:</strong> $name <br><br>
<strong>Email:</strong> $email <br><br>
<strong>Message:</strong><br> $body<br>
", "From: SOCOM-webpage@vliz.be
Content-Type: text/html; charset=utf-8\r\n");
?>
