let number = 0;
document.getElementById("number").innerHTML = number;
let number1 = document.getElementById('rating2-05');
let btn = document.getElementById("menu-button");
let modal = document.getElementById("menu-block");
let shedow = document.getElementById("menu-shedow");

btn.onclick = function () {
  modal.style.display = "block";
  shedow.style.display = "block";
  btn.style.display = "none";
}
shedow.onclick = function () {
  modal.style.display = "none";
  shedow.style.display = "none";
  btn.style.display = "block";
}

function myShowNumber(number) {
  if (number1) {
    number = "0.5";
    document.getElementById("number").innerHTML = number;
  }
}
function myShowNumber2(number) {
  if (number1) {
    number = "1.0";
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber3(number) {
  if (number1) {
    number = 1.5;
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber4(number) {
  if (number1) {
    number = "2.0";
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber5(number) {
  if (number1) {
    number = 2.5;
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber6(number) {
  if (number1) {
    number = "3.0";
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber7(number) {
  if (number1) {
    number = 3.5;
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber8(number) {
  if (number1) {
    number = "4.0";
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber9(number) {
  if (number1) {
    number = 4.5;
    document.getElementById("number").innerHTML = number;
  }
}

function myShowNumber10(number) {
  if (number1) {
    number = "5.0";
    document.getElementById("number").innerHTML = number;
  }
}










var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}











