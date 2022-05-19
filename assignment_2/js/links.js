
$(function() {
    let currentPage = window.location.pathname;
    if (currentPage.endsWith("links.php")) {
        $("#row1").prepend("    <div class=\"tab-content\" id=\"myTabContent\">\n" +
            "        <div class=\"tab-pane active\" id=\"links\">\n" +
            "            <ul>\n" +
            "                <li><a href=\"https://www.reddit.com\">Reddit</a></li>\n" +
            "                <li><a href=\"https://www.twitter.com\">Twitter</a></li>\n" +
            "                <li><a href=\"https://www.facebook.com\">Facebook</a></li>\n" +
            "                <li><a href=\"https://www.instagram.com\">Instagram</a></li>\n" +
            "            </ul>\n" +
            "        </div></div>")

    }
})