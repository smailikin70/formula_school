<?php

$name = $_POST['name'];
$phonenumber = $_POST['phone__number'];

$to = "info@formula-ege.ru";

$subject = "Новая заявка на профориентацию!";

$message = "Имя: " . $name . "\n\n";
$message .= "Номер телефона: " . $phonenumber . "\n\n";

$success = mail($to, $subject, $message);

if ($success) {
    echo '<p>Заявка отправлена</p>';
} else {
    echo '<p>Ошибка при отправке формы.</p>';
}

?>
