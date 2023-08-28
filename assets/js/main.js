let btn = document.querySelector('.btn'),
    error = document.getElementById('error');

input.addEventListener('keydown', function(){
    input.onfocus = function () {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            error.innerHTML = "";
        }
    };

    input.onblur = function () {
        if (!input.value.includes('@')) {
            input.classList.add('invalid');
            error.innerHTML = 'Please enter a correct email.'
        }
    };
});

btn.addEventListener('click', function (event) {
    event.preventDefault();

    if (!input.value.includes('@')) {
        input.classList.add('invalid');
        error.innerHTML = 'Please enter a correct email.'
    } else {
        form.submit();
    };
});