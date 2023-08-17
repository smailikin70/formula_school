document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('user__form');
    var message = document.getElementById('user__form__response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/asset/actions/form.php');

        xhr.onload = function() {
            if (xhr.status === 200) {
                message.innerHTML = xhr.responseText;
            }
        };

        var formData = new FormData(form);
        xhr.send(formData);
    });
});

