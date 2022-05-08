// File name: main.js


window.addEventListener('DOMContentLoaded', function () {
    console.log('Document Object Model has been loaded.');
    changeTitle()
    createArticle()
    addLink()
    changeTextColor()
    addSidebar()

});

function changeTitle() {
    let titleIndex = 'Index';
    let titleSecond = 'Second';
    let currentPage = window.location.pathname;
    if (currentPage.endsWith("index.html")) {
        document.title = titleIndex;
    }
    if (currentPage.endsWith("second.html")) {
        document.title = titleSecond;
    }

}
