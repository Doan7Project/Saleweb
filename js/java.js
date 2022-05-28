// hide and show menubar responsive
const navSlide = () => {

    const bugger = document.querySelector('.bugger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    bugger.addEventListener('click', () => {
        //toggle nav show and hide menubar
        nav.classList.toggle('nav-active');
        //animation content
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''

            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        })

        //bugger amination hide and show exit
        bugger.classList.toggle('toggle');


    });


}

navSlide();
var arraymenu = ['menu1', 'menu2', 'menu4', 'menu5']
for (var i = 0; i < arraymenu.length; i++) {
    var menuchilde = document.getElementById(arraymenu[i])
    menuchilde.addEventListener('click', function() {

        const bugger = document.querySelector('.bugger');
        const nav = document.querySelector('.nav_links');
        const navLinks = document.querySelectorAll('.nav_links li');
        nav.classList.toggle('nav-active');
        bugger.classList.remove('toggle');
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''

            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        })

    })
}

// tạo single pages

var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    console.log(app)
    $routeProvider
        .when("/", {
            templateUrl: "business.html"
        })
        .when("/hotel", {
            templateUrl: "hotellink.html"
        })

});
//khi click chon thanh menu thi se bien mat 

const arraydrop = ['drop1', 'drop2', 'drop3', 'drop4']
for (var i = 0; i < arraydrop.length; i++) {
    const hidedrop = document.getElementById(arraydrop[i])
    hidedrop.addEventListener('click', function() {
        const bugger = document.querySelector('.bugger');
        const nav = document.querySelector('.nav_links');
        const navLinks = document.querySelectorAll('.nav_links li');
        nav.classList.toggle('nav-active');
        bugger.classList.remove('toggle');
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''

            } else {

                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        })

    })

}