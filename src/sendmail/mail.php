<?php


  
    if((isset($_POST['email']) && $_POST['email']!="")){
        $to = 'dmitriyiskra@mail.ru';
        $subject = 'Заявка с сайта на подписку';
        $email = $_POST['email'];

        $message='
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Email: '.$email.'</p>
                </body>
            </html>';

        $headers  = "Content-type: text/html; charset=utf-8 \n";
        $headers .= "From: dmitriy.iskra86@gmail.com\n";
        $success = mail($to, $subject, $message, $headers);
    	if($success){
        	echo 'Сообщение отправлено!<br> В ближайшее время мы с Вами свяжемся';
        } else {
            echo 'Возникла ошибка.';
        }
    }
    // $blockPageAccess = 0;
    // $blockFormAccess = 1;
        
    // if ($blockFormAccess) {
    //     echo '
    //         <script src="https://www.google.com/recaptcha/api.js?render=6Lf-FqgZAAAAAPTVGvC0WkJrr3Crf2Y7rZNqoWfU"></script>
    //         <script>
    //             document.#aero.addEventListener(\'submit\', function (evt) {
    //                 evt.preventDefault();
    //                 grecaptcha.ready(function () {
    //                     grecaptcha.execute(\'6Lf-FqgZAAAAAPTVGvC0WkJrr3Crf2Y7rZNqoWfU\', {action: \'homepage\'}).then(function (token) {
    //                         var el = document.createElement("input");
    //                         el.type = "hidden";
    //                         el.name = "token";
    //                         el.value = token;
    //                         document.forms[0].appendChild(el);
    //                         document.forms[0].submit();
    //                     });
    //                 });
    //             })
    //         </script>';
    // }
