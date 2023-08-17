<?php
  // Получаем данные из формы
  $name = $_POST['firstname'];
  $phonenumber = $_POST['phone__number'];
  $email = $_POST['email'];
  $program = $_POST['program'];
  $lesson = $_POST['lesson'];
  $class = $_POST['class'];
  $address = $_POST['address'];


  // Адрес электронной почты, на который будет отправлено сообщение
  $to = "954164@mail.ru";

  // Тема письма
  $subject = "Новое сообщение с формы";

  // Текст письма
  $message = "Имя: " . $name . "\n\n";
  $message .= "Номер телефона: " . $phonenumber . "\n\n";
  $message .= "Email: " . $email . "\n\n";
  $message .= "Программа: " . $program . "\n\n";
  $message .= "Урок: " . $lesson . "\n\n";
  $message .= "Класс: " . $class . "\n\n";
  $message .= "Адрес: " . $address . "\n\n";

  // Отправляем письмо
  $success = mail($to, $subject, $message);

    // Выводим сообщение после отправки формы
    if ($success) {
      echo '<p>Заявка отправлена</p>';
    } else {
      echo '<p>Ошибка при отправке формы.</p>';
    }

  // Перенаправляем пользователя после отправки формы на другую страницу
  //header("Location: thank_you_page.html");
?>
