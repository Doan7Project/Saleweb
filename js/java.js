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
app.controller('businessCtrl', function($scope) {

});
//khi click chon thanh menu thi se bien mat 

const arraydrop = ['drop1', 'drop2', 'drop3', 'drop4']
for (var i = 0; i < arraydrop.length; i++) {
    const hidedrop = document.getElementById(arraydrop[i])
    console.log(hidedrop)
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

// business page


function bsexperience() {
    const Epexpoint = document.getElementById('box_experience')
    const expcost = document.getElementById('box_cost')
    const exprevenue = document.getElementById('box_revenue')
    Epexpoint.style.top = '5%'
    expcost.style.top = '50%'
    exprevenue.style.top = '50%'
    Epexpoint.style.opacity = '1'
    Epexpoint.style.visibility = "visible"
    Epexpoint.style.transition = "0.3s ease"
    expcost.style.opacity = '0'
    expcost.style.visibility = "hidden"
    expcost.style.transition = "0.3s ease"
    exprevenue.style.opacity = '0'
    exprevenue.style.visibility = "hidden"
    exprevenue.style.transition = "0.3s ease"

    const input1 = document.getElementById('input_1');
    const input2 = document.getElementById('input_2');
    const input3 = document.getElementById('input_3');

    input1.style.color = 'rgb(17, 117, 175)'
    input1.style.background = 'white';
    input1.style.fontWeight = 'bold'
    input1.style.borderBottom = '2px solid rgb(12, 114, 173)'

    input2.style.color = 'rgb(104, 104, 104)'
    input2.style.background = 'rgb(243, 243, 243)';
    input2.style.fontWeight = 'normal'
    input2.style.borderBottom = 'none'


    input3.style.color = 'rgb(104, 104, 104)'
    input3.style.background = 'rgb(243, 243, 243)';
    input3.style.fontWeight = 'normal'
    input3.style.borderBottom = 'none'


}

function bsecost() {
    const Epexpoint = document.getElementById('box_experience')
    const expcost = document.getElementById('box_cost')
    const exprevenue = document.getElementById('box_revenue')
    Epexpoint.style.top = '50%'
    expcost.style.top = '5%'
    exprevenue.style.top = '50%'
    Epexpoint.style.opacity = '0'
    Epexpoint.style.visibility = "hidden"
    Epexpoint.style.transition = "0.3s ease"
    expcost.style.opacity = '1'
    expcost.style.visibility = "visible"
    expcost.style.transition = "0.3s ease"
    exprevenue.style.opacity = '0'
    exprevenue.style.visibility = "hidden"
    exprevenue.style.transition = "0.3s ease"

    const input1 = document.getElementById('input_1');
    const input2 = document.getElementById('input_2');
    const input3 = document.getElementById('input_3');

    input2.style.color = 'rgb(17, 117, 175)'
    input2.style.background = 'white';
    input2.style.fontWeight = 'bold'
    input2.style.borderBottom = '2px solid rgb(12, 114, 173)'

    input1.style.color = 'rgb(104, 104, 104)'
    input1.style.background = 'rgb(243, 243, 243)';
    input1.style.fontWeight = 'normal'
    input1.style.borderBottom = 'none'

    input3.style.color = 'rgb(104, 104, 104)'
    input3.style.background = 'rgb(243, 243, 243)';
    input3.style.fontWeight = 'normal'
    input3.style.borderBottom = 'none'
}

function bserevenue() {
    const Epexpoint = document.getElementById('box_experience')
    const expcost = document.getElementById('box_cost')
    const exprevenue = document.getElementById('box_revenue')
    Epexpoint.style.top = '50%'
    expcost.style.top = '50%'
    exprevenue.style.top = '5%'
    Epexpoint.style.opacity = '0'
    Epexpoint.style.visibility = "hidden"
    Epexpoint.style.transition = "0.3s ease"
    expcost.style.opacity = '0'
    expcost.style.visibility = "hidden"
    expcost.style.transition = "0.3s ease"
    exprevenue.style.opacity = '1'
    exprevenue.style.visibility = "visible"
    exprevenue.style.transition = "0.3s ease"

    const input1 = document.getElementById('input_1');
    const input2 = document.getElementById('input_2');
    const input3 = document.getElementById('input_3');

    input3.style.color = 'rgb(17, 117, 175)'
    input3.style.background = 'white';
    input3.style.fontWeight = 'bold'
    input3.style.borderBottom = '2px solid rgb(12, 114, 173)'

    input2.style.color = 'rgb(104, 104, 104)'
    input2.style.background = 'rgb(243, 243, 243)';
    input2.style.fontWeight = 'normal'
    input2.style.borderBottom = 'none'

    input1.style.color = 'rgb(104, 104, 104)'
    input1.style.background = 'rgb(243, 243, 243)';
    input1.style.fontWeight = 'normal'
    input1.style.borderBottom = 'none'
}