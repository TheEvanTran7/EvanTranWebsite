var page1 = document.getElementById('form-p1');
var page2 = document.getElementById('form-p2');
var page3 = document.getElementById('form-p3');

var btn = document.getElementsByClassName("page-1-btn");

console.log(btn);

btn.addEventListener("click",()=>{console.log("hello")});

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