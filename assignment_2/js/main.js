function validateForm() {
    $("#form-alert").hide();
    let dataObject = {}
    let loop_passed = false;
    console.log("before for");
    $("form").children("div").each( function() {
        dataObject[$(this).children('label').text()] = $(this).children('input').val();
        if ($(this).children('input').val() === "") {
            $("#form-alert").show();
            console.log("for loop");
            loop_passed = true;
            }
        })
    if (loop_passed === true) {
        console.log("empty");
        return [false]
    }
    if (!/[^a-z]/i.test($("#InputName").val()) === false || !/[^a-z]/i.test($("#InputCity").val()) === false) {
        console.log("input field has non-letters")
        $("#form-alert").text("Your name and city can only contain letters.").show();
        // console.log(!/[^a-z]/i.test($("#InputName").val()))
        // console.log(!/[^a-z]/i.test($("#InputCity").val()))
        return [false]
    }
    if (/^\d+$/.test($("#InputAge").val()) === false || /^\d+$/.test($("#InputPhoneNumber").val()) === false) {
        console.log("input has non-numbers")
        $("#form-alert").text("Your age and phone number can only contain digits.").show();
        // console.log($("#InputAge").val())
        // console.log($("#InputPhoneNumber").val())
        // console.log(/^\d+$/.test($("#InputAge").val()))
        // console.log(/^\d+$/.test($("#InputPhoneNumber").val()))
        return [false]
    }
    return [true, dataObject];
};

function writeFormData(){

}

$(function() {
    $("#SubmitButton").on('click', function () {
        if (validateForm()[0] === true) {
            console.log(validateForm()[1])
            $("#form-content").show();
        }
    })
});
