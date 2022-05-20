function validateForm() {
    $("#form-alert").hide();
    let dataObject = {}
    let loop_passed = false;
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
        return [false];
    }
    if (!/[^a-z]/i.test($("#InputName").val()) === false || !/[^a-z]/i.test($("#InputCity").val()) === false) {
        $("#form-alert").text("Your name and city can only contain letters.").show();
        return [false];
    }
    if (/^\d+$/.test($("#InputAge").val()) === false || /^\d+$/.test($("#InputPhoneNumber").val()) === false) {
        $("#form-alert").text("Your age and phone number can only contain digits.").show();
        return [false];
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#InputEmail").val()) === false) {
        $("#form-alert").text("please enter a valid email address.").show();
        return [false];
    }
    return [true, dataObject];
};

function writeFormData(){
    $("#form-alert").hide();
    $("#form-content").hide();
    $("form").children("div").each( function() {
        $(this).children('input').val("");
    })
}

$(function() {
    $("#SubmitButton").on('click', function () {
        let validatedForm = validateForm();
        if (validatedForm[0] === true) {
            let n = 0;
            // $.each( validatedForm[1], function( key, value) {
            $("#form-table").children("tbody").children("tr").each ( function (){
                $(this).children("td").text(validatedForm[1][$(this).children("th").text()]);
                n += 1;
            })
            $("#form-content").show();

        }
    })
    $("#EraseButton").on('click', function () {
        writeFormData();
    })
});
