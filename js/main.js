function navIcon(x) {
  x.classList.toggle("change");
  var x = document.getElementById("navContainer");
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}
}
let aboutSlideIndex = 1;
showAboutSlides(aboutSlideIndex);

function plusAboutSlides(n) {
  showAboutSlides(aboutSlideIndex += n);
}

function currentAboutSlide(n) {
  showAboutSlides(aboutSlideIndex = n);
}

function showAboutSlides(n) {
  var i;
  var aboutSlides = document.getElementsByClassName("aboutSlides");
  var aboutDots = document.getElementsByClassName("aboutDot");
  if (n > aboutSlides.length) {
    aboutSlideIndex = 1
  }
  if (n < 1) {
    aboutSlideIndex = aboutSlides.length
  }
  for (i = 0; i < aboutSlides.length; i++) {
    aboutSlides[i].style.display = "none";
  }
  for (i = 0; i < aboutDots.length; i++) {
    aboutDots[i].className = aboutDots[i].className.replace(" active", "");
  }
  aboutSlides[aboutSlideIndex - 1].style.display = "flex";
  aboutDots[aboutSlideIndex - 1].className += " active";
}

let partnerSlideIndex = 1;
showPartnerSlides(partnerSlideIndex);

function plusPartnerSlides(n) {
  showPartnerSlides(partnerSlideIndex += n);
}

function currentPartnerSlide(n) {
  showPartnerSlides(partnerSlideIndex = n);
}

function showPartnerSlides(n) {
  var i;
  var partnerSlides = document.getElementsByClassName("partnerSlides");
  var partnerDots = document.getElementsByClassName("partnerDot");
  if (n > partnerSlides.length) {
    partnerSlideIndex = 1
  }
  if (n < 1) {
    partnerSlideIndex = partnerSlides.length
  }
  for (i = 0; i < partnerSlides.length; i++) {
    partnerSlides[i].style.display = "none";
  }
  for (i = 0; i < partnerDots.length; i++) {
    partnerDots[i].className = partnerDots[i].className.replace(" active", "");
  }
  partnerSlides[partnerSlideIndex - 1].style.display = "flex";
  partnerDots[partnerSlideIndex - 1].className += " active";
}
