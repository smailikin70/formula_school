function getResponse(form, message) {
    document.addEventListener('DOMContentLoaded', function() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let xhr = new XMLHttpRequest();
            xhr.open('POST', '/asset/actions/form.php');

            xhr.onload = function() {
                if (xhr.status === 200) {
                    message.innerHTML = xhr.responseText;
                }
            };

            let formData = new FormData(form);
            xhr.send(formData);
        });
    });
}

let userForm = document.getElementById('user__form');
let userMessage = document.getElementById('user__form__response');

getResponse(userForm, userMessage);


