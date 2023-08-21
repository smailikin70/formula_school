<?php

  $name = $_POST['firstname'];
  $phonenumber = $_POST['phone__number'];
  $email = $_POST['email'];
  $program = $_POST['program'];
  $lesson = $_POST['lesson'];
  $class = $_POST['class'];
  $address = $_POST['address'];


  $to = "info@formula-ege.ru";

  $subject = "Новая заявка на обучение!";

  $message = "Имя: " . $name . "\n\n";
  $message .= "Номер телефона: " . $phonenumber . "\n\n";
  $message .= "Email: " . $email . "\n\n";
  $message .= "Программа: " . $program . "\n\n";
  $message .= "Урок: " . $lesson . "\n\n";
  $message .= "Класс: " . $class . "\n\n";
  $message .= "Адрес: " . $address . "\n\n";

  $success = mail($to, $subject, $message);

    if ($success) {
      echo '<p>Заявка отправлена</p>';
    } else {
      echo '<p>Ошибка при отправке формы.</p>';
    }

?>
