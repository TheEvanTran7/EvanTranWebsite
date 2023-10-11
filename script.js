var page1 = document.getElementById('form-p1');
var page2 = document.getElementById('form-p2');
var page3 = document.getElementById('form-p3');

var btn = document.querySelector(".page-1-btn")
console.log(btn)

function toPage1(){
    console.log("hello");
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
}

function toPage2(){
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
}

function toPage3(){
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
}

var proj = document.getElementsByClassName("proj-wrapper");

function topFunction() {
    document.proj.scrollTop = 0;
    document.documentElement.scrollTop= 0;
}

var xBtn = document.getElementById("x");
var modal = document.getElementById("nto");

function openInfo(btnId){
    var modal = document.querySelectorAll(".modal")
    modal.forEach((btn) => {
        btn.style.display = "none";
    })
    modal[btnId].style.display = "block"
}

function closeModal(){
    var modal = document.querySelectorAll(".modal")
    modal.forEach((btn) => {
        btn.style.display = "none";
    })
}