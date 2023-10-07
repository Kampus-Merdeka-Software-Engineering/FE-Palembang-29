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
