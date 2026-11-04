/* ==========================================================================
   UTS Pemrograman Web Dasar - Soal 03 (JavaScript)
   Opsi yang dipilih: hamburger button pada navbar <nav>
   Tidak memakai framework/library JavaScript apa pun.
   ========================================================================== */

(function () {
  "use strict";

  var tombolMenu = document.getElementById("tombol-menu");
  var daftarMenu = document.getElementById("daftar-menu");
  var header = document.querySelector(".site-header");
  var tautan = Array.prototype.slice.call(document.querySelectorAll(".navbar__tautan"));

  // Layar >= 900px memakai menu horizontal, di bawahnya memakai hamburger.
  var mediaMenuVertikal = window.matchMedia("(max-width: 899px)");

  /* ---------- 1. Buka / tutup menu hamburger ---------- */
  function menuTerbuka() {
    return tombolMenu.getAttribute("aria-expanded") === "true";
  }

  function setMenu(terbuka) {
    tombolMenu.setAttribute("aria-expanded", String(terbuka));
    daftarMenu.classList.toggle("navbar__menu--terbuka", terbuka);
    tombolMenu.setAttribute(
      "aria-label",
      terbuka ? "Tutup menu navigasi" : "Buka menu navigasi"
    );
  }

  function tutupMenu() {
    if (menuTerbuka()) {
      setMenu(false);
    }
  }

  tombolMenu.addEventListener("click", function () {
    setMenu(!menuTerbuka());
  });

  /* ---------- 2. Tutup menu setelah tautan dipilih ---------- */
  tautan.forEach(function (tautanNav) {
    tautanNav.addEventListener("click", tutupMenu);
  });

  /* ---------- 3. Tutup menu dengan tombol Esc atau klik di luar menu ---------- */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      tutupMenu();
      tombolMenu.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!menuTerbuka()) return;
    if (!daftarMenu.contains(event.target) && !tombolMenu.contains(event.target)) {
      tutupMenu();
    }
  });

  /* ---------- 4. Kembalikan tampilan saat ukuran layar berubah ---------- */
  function sesuaikanUkuranLayar() {
    if (!mediaMenuVertikal.matches) {
      daftarMenu.classList.remove("navbar__menu--terbuka");
      tombolMenu.setAttribute("aria-expanded", "false");
    }
  }

  if (typeof mediaMenuVertikal.addEventListener === "function") {
    mediaMenuVertikal.addEventListener("change", sesuaikanUkuranLayar);
  } else {
    // Dukungan untuk browser lama yang hanya punya addListener.
    mediaMenuVertikal.addListener(sesuaikanUkuranLayar);
  }

  /* ---------- 5. Bayangan header saat halaman digulir ---------- */
  function perbaruiHeader() {
    header.classList.toggle("site-header--digulir", window.scrollY > 20);
  }

  window.addEventListener("scroll", perbaruiHeader, { passive: true });
  perbaruiHeader();
})();
