// Modal Box
const video = document.querySelector("#kenalan");
const ctamodal = document.querySelector("#item-detail-modal");
const ctabutton = document.querySelector(".cta");
ctabutton.onclick = (e) => {
  ctamodal.style.display = "flex";
  document.getElementById("kenalan").play();
  e.preventDefault();
};


// Klik Tombol CLose
document.querySelector(".modal .close-icon").onclick = (e) => {
  ctamodal.style.display = "none";
  video.pause();
  video.currentTime = 0;
  e.preventDefault();
};

// Klik di luar modal
window.onclick = (e) => {
  if (e.target === ctamodal) {
    ctamodal.style.display = "none";
    video.pause();
    video.currentTime = 0;
  }
};
// Toggle Class Active untuk hamburger men
const navbarNav = document.querySelector(".navbar-nav");

//Ketika Diklik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toogle Active Search-Form
// const searchform = document.querySelector(".search-form");
// const searchbox = document.querySelector("#search-box");

// document.querySelector("#search-button").onclick = (e) => {
//   searchform.classList.toggle("active");
//   searchbox.focus();
//   e.preventDefault();
// };

//Klik diluar Sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Klik diluar Sidebar untuk menghilangkan nav
// const searchbutton = document.querySelector("#search-button");
// document.addEventListener("click", function (e) {
//   if (!searchbutton.contains(e.target) && !searchform.contains(e.target)) {
//     searchform.classList.remove("active");
//   }
// });
