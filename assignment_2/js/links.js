function createUnorderedList() {
    $("#row1").prepend("    <div class=\"tab-content\" id=\"myTabContent\">\n" +
        "        <div class=\"tab-pane active\" id=\"links\">\n" +
        "            <ul id='linkList'>\n" +
        "                <li><a href=\"https://www.reddit.com\">Reddit</a></li>\n" +
        "                <li><a href=\"https://www.twitter.com\">Twitter</a></li>\n" +
        "                <li><a href=\"https://www.facebook.com\">Facebook</a></li>\n" +
        "                <li><a href=\"https://www.instagram.com\">Instagram</a></li>\n" +
        "            </ul>\n" +
        "        </div></div>")



}

function createFadeButton() {
    $("#container").append("<div class=\"row wp-row\" id=\"row2\">");
    $("#row2").append("<button id=\"FadeButton\" type=\"button\" class=\"btn btn-primary\">Fade</button>\n");
    $("div").last().append("</div>");
}

function createForm() {
    $("#container").append("<div class=\"row wp-row\" id=\"row3\">");
    $("#row3").append("<form>\n" +
        "  <div class=\"form-group\">\n" +
        "    <label for=\"InputName\">Name website</label>\n" +
        "    <input type=\"text\" class=\"form-control\" id=\"InputName\">\n" +
        "  </div>\n" +
        "  <div class=\"form-group\">\n" +
        "    <label for=\"InputUrl\">Url</label>\n" +
        "    <input type=\"text\" class=\"form-control\" id=\"InputUrl\">\n" +
        "  </div>\n" +
        "    <button id=\"AddLinkButton\" type=\"button\" class=\"btn btn-primary\">Add link</button>\n" +
        "</form>")
}

$(function() {
    let currentPage = window.location.pathname;
    if (currentPage.endsWith("links.php")) {
        createUnorderedList();
        createFadeButton();
        createForm();
        let buttonPressed = false
        $("#FadeButton").on('click', function () {
            if (buttonPressed === false) {
                $("#links").fadeOut();
                buttonPressed = true
            } else {
                $("#links").fadeIn();
                buttonPressed = false
            }

        })
        $("#AddLinkButton").on('click', function () {
            let inputName = $("#InputName").val();
            $("#linkList").append("<li><a href='" + inputName + "'\></a></li>");
        })
    }

})