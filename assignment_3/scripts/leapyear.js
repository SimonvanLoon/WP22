function checkName() {
    let name_input = $('#fullname');
    let cur_val = name_input.val();
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
    if (cur_val.match(name_regex) && cur_val !== ''){
        name_input.removeClass('is-invalid');
        name_input.addClass('is-valid');
        return true;
    } else{
        name_input.removeClass('is-valid');
        name_input.addClass('is-invalid');
        return false;
    }

}

function checkAge() {
    let age_input = $('#age');
    let cur_val = age_input.val();
    let age_regex = "^([1-9]|[1-9]\\d)$";
    if (cur_val.match(age_regex) && cur_val !== ''){
        age_input.removeClass('is-invalid');
        age_input.addClass('is-valid');
        return true;
    } else{
        age_input.removeClass('is-valid');
        age_input.addClass('is-invalid');
        return false;
    }
}

function checkMail() {
    let email_input = $('#email');
    let cur_val = email_input.val();
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (cur_val.match(email_regex) && cur_val !== ''){
        email_input.removeClass('is-invalid');
        email_input.addClass('is-valid');
        return true;
    } else{
        email_input.removeClass('is-valid');
        email_input.addClass('is-invalid');
        return false;
    }
}

function checkResidence() {
    console.log("hello");
    let place_input = $('#place');
    let cur_val = place_input.val();
    let place_regex = /^[a-zA-Z\u0080-\u024F]+(?:([\ \-\']|(\.\ ))[a-zA-Z\u0080-\u024F]+)*$/
    if (cur_val.match(place_regex) && cur_val !== ''){
        place_input.removeClass('is-invalid');
        place_input.addClass('is-valid');
        return true;
    } else{
        place_input.removeClass('is-valid');
        place_input.addClass('is-invalid');
        return false;
    }

}

$(function() {
// Check name
    $('#fullname').keyup(function () {
        let name_checked = checkName();
    });
// Check age
    $('#age').keyup(function () {
        checkAge();
    });
// // Check mail address
    $('#email').keyup(function () {
        checkMail();
    });
// // Check residence
    $('#place').keyup(function () {
        checkResidence();
    });
// Check all fields on submit
    $('#submit').click(function () {
        console.log("clicked");
        if (checkName() && checkAge() && checkMail() && checkResidence()){
            $('form').submit();
            console.log("submitted");
        }
    })
});