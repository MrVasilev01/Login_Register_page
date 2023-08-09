$(document).ready(function () {
    const $register = $('#register');
    const $login = $('#login');
    const $login_box = $('.login-box');
    const $register_box = $('.register-box');

    $login.on('click', toLogin);
    $register.on('click', toRegister);


    function toLogin() {  
        $login_box.addClass('fade-in');
        $register_box.addClass('fade-out');
        $register_box.removeClass('fade-in')

        setTimeout(() => $register_box.removeClass('fade-out'), 2000);
    }

    function toRegister() {
        $register_box.addClass('fade-in');
        $login_box.addClass('fade-out');
        $login_box.removeClass('fade-in');

        setTimeout(() => $login_box.removeClass('fade-out', 'fade-in'), 2000);
    } 
});
