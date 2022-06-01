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
    let name_regex = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";
}

// function
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
//     $('#mail').keyup(function () {
//         checkMail();
//     });
// // Check residence
//     $('#place').keyup(function () {
//         checkResidence();
//     });
// Check all fields on submit
    $('#submit').click(function () {
        console.log("clicked");
        if (checkName()){
            $('form').submit();
            console.log("submitted");
        }
    })
});