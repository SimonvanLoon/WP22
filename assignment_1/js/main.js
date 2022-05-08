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

function createArticle() {
    let currentPage = window.location.pathname;
    if (currentPage.endsWith("index.html")) {
        let newArticleEl = document.createElement('article');
        let newHeadingEl = document.createElement('h1');
        let newParEl = document.createElement('p');
        let newHeadingText = document.createTextNode('This is my second article');
        let newParText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque');
        newHeadingEl.appendChild(newHeadingText);
        newParEl.appendChild(newParText);
        let positionArticle = document.getElementsByTagName('div')[2];
        positionArticle.appendChild(newArticleEl);
        let positionHeading = document.getElementsByTagName('article')[1];
        positionHeading.appendChild(newHeadingEl);
        positionHeading.appendChild(newParEl);

    }

}

function addLink() {
    let divElement = document.getElementById('links');
    let listltem = divElement.firstElementChild;
    let thirdListItem = listltem.children[2];
    thirdListItem.firstElementChild.innerHTML = '<a href=\"https://google.com\" target="_blank">Link 3</a>';
}

function changeTextColor() {
    let elements = document.getElementsByClassName("nav-item");
    for (let i = elements.length - 1; i >= 0; --i) {
        elements[i].firstElementChild.style.color = "red";
    }

}

array = [ {week: 1, assignment: 1}, {week: 2, assignment: 1}, {week: 3, assignment: 2}, {week: 4, assignment: 2}, {week: 5, assignment: 3}, {week: 6, assignment: 3}, {week: 7 , assignment: "Final Project"},]
let currentPage = window.location.pathname;
if (currentPage.endsWith("index.html")) {
    array.forEach(element => document.write(JSON.stringify(element)));
}

function addSidebar () {
    let currentPage = window.location.pathname;
    if (currentPage.endsWith("second.html")) {
        let columnElement = document.getElementsByClassName("col-md-12")[0];
        columnElement.className = "col-md-8";
        let newDivEl =  document.createElement('div');
        newDivEl.className = "col-md-4";
        let positionDiv= document.getElementsByClassName("row")[0];
        positionDiv.appendChild(newDivEl);
        let newColumnHeadingEl = document.createElement('h1');
        let newColumnText = document.createTextNode("Sidebar");
        newColumnHeadingEl.appendChild(newColumnText);
        newDivEl.appendChild(newColumnHeadingEl);
    }

}

