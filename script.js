
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const header = document.getElementById("mainHeader");

// Toggle Menu
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Toggle Icon (list ↔ x)
  menuToggle.querySelector("i").classList.toggle("bi-x");
  menuToggle.querySelector("i").classList.toggle("bi-list");
});

// SCROLL HEADER

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("bi-x");
    menuToggle.querySelector("i").classList.toggle("bi-list");
});


window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// ---------------------------
// SWIPER SLIDER
// ---------------------------
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      if (progressCircle) {
        progressCircle.style.setProperty("--progress", 1 - progress);
      }
      if (progressContent) {
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  }
});





// section 2
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// slider section4

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      document.querySelector(".autoplay-progress span").textContent = `${Math.ceil(time / 1000)}s`;
      document.querySelector(".autoplay-progress svg").style.setProperty("--progress", 1 - progress);
    }
  }
});



AOS.init();



//  alert
let popupShown = false;

window.addEventListener("scroll", function () {

  if (!popupShown && window.scrollY > 3000) {
    document.querySelector(".avada-popup-overlay").classList.add("show");
    popupShown = true;
  }
});

document.querySelector(".close-btn").onclick = () => {
  document.querySelector(".avada-popup-overlay").classList.remove("show");
};





// index 2 password
function updateStrength() {
  const pass = document.getElementById("password").value;
  const bar = document.getElementById("strengthBar");
  const txt = document.getElementById("strengthText");

  let len = pass.length;
  let percent = Math.min((len / 12) * 100, 100);

  bar.style.width = percent + "%";

  if (len === 0) {
    bar.style.backgroundColor = "#ccc";
    txt.textContent = "";
  } 
  else if (len < 4) {
    bar.style.backgroundColor = "#ff4d4d";
   
    txt.style.color = "#ff4d4d";
  } 
  else if (len < 8) {
    bar.style.backgroundColor = "#ffa500";
   
    txt.style.color = "#ffa500";
  } 
  else if (len < 12) {
    bar.style.backgroundColor = "#ffd700";
    
    txt.style.color = "#d4a017";
  } 
  else {
    bar.style.backgroundColor = "#28a745";
    
    txt.style.color = "#28a745";
  }
}
function showAlert(e) {
    e.preventDefault(); 
    alert("“Your information has been successfully submitted.”");
  }






  // button backup 

   function checkScroll() {
    var btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
    setTimeout(checkScroll, 150); 
  }
  checkScroll();

  document.getElementById("backToTop").onclick = function () {
    document.documentElement.scrollTop = 0;
  };