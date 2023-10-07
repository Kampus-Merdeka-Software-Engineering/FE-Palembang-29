// Ambil elemen navbar
const navbar = document.querySelector('.nav');

// Tambahkan event listener saat jendela di-scroll
window.addEventListener('scroll', () => {
  // Periksa posisi scroll, misalnya jika lebih dari 100px, tambahkan class "fixed" ke navbar, jika tidak, hapus class "fixed"
  if (window.scrollY > 100) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

// changing search icon image on window resize
window.addEventListener("resize", changeSearchIcon);
function changeSearchIcon() {
  let winSize = window.matchMedia("(min-width: 1200px)");
  if (winSize.matches) {
    document.querySelector(".search-icon img").src = "images/search-icon.png";
  } else {
    document.querySelector(".search-icon img").src =
      "images/search-icon-dark.png";
  }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

document.querySelectorAll(".doctors-grid .doctor").forEach((doctor) => {
  doctor.onclick = () => {
    previewContainer.style.display = "flex";
    let name = doctor.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});
