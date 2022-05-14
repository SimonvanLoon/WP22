function validateForm(){
    $("#form-alert").hide();
    let dataObject = {}
    if (!/[^a-z]/i.test($("#InputName").val()) === false || !/[^a-z]/i.test($("#InputCity").val()) === false){
        $("#form-alert").text("Your name and city can only contain letters.").show();
        console.log(!/[^a-zA-Z]/.test($("#InputName").val()))
        return
    }
    // if (/^\d+$/.test($("#InputAge").text()) === true || !/[^a-zA-Z]/.test($("#InputPhoneNumber").text()) === true){
    //     console.log("testddd");
    // }
    $("form").children("div").each(function() {
        if ($(this).children('input').val() === ""){
            console.log("error")
            $("#form-alert").text("n").show();
            return
        }

        dataObject[$(this).children('label').text()] = $(this).children('input').val();
        console.log($(this).children('label').text())
        console.log($(this).children('input').val())
    })
    console.log(dataObject)

};
function writeFormData(){

}

$(function() {
    $("#SubmitButton").on('click', function () {
        validateForm()
    })
});
