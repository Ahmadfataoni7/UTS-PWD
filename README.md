# UTS Pemrograman Web Dasar — Halaman Profil Pribadi

Nama : Ahmad Fatoni Ali Nurdin
Kelas : F12.D301 / F12.D302RPL
Dosen : Galuh Wilujeng Saraswati, M.Cs & Zudha Pratama, M.Kom
Semester : Ganjil 2026/2027 (Take Home)

Isi proyek ini dikerjakan berdasarkan data pada CV (BPBD Kota Kediri) dan dipakai untuk menjawab
tiga soal UTS dalam satu proyek yang berkembang.

## 1. Struktur Proyek

```text
uts-web-profil/
├── index.html          -> jawaban SOAL 01 (HTML5 semantik, tanpa style/script inline)
├── css/style.css       -> jawaban SOAL 02 (styling CSS native)
├── js/main.js          -> jawaban SOAL 03 (JavaScript vanilla, hamburger navbar)
├── assets/foto-profil.png
└── .vscode/            -> settings.json, tasks.json, extensions.json (integrasi VS Code)
```

## 2. Pemetaan ke Soal

### SOAL 01 — HTML5 (bobot 20%)
`index.html` memakai elemen semantik: `header`, `nav`, `main`, `section`, `article`, `address`,
`figure/dl`, `time`, `meter`, `caption`, `scope`, dan `alt` pada gambar.

| Kebutuhan | Bagian pada halaman |
| --- | --- |
| Header: foto/avatar, nama, tagline | `.profil` (foto, nama, tagline "Siap - Tanggap - Tangguh") |
| Tentang Saya (2-4 kalimat) | `#tentang` (3 paragraf) |
| Pendidikan (list/table) | `#pendidikan` (`table.tabel`) |
| Keahlian/Skills | `#keahlian` (`ul.keahlian` + `meter`) |
| Kontak (email & medsos sebagai `<a>`) | `#kontak` (`mailto:`, `tel:`, Instagram, LinkedIn) |
| Pengalaman Organisasi | `#organisasi` (PMI, Vertikal Rescue Indonesia) |
| Portofolio/Pengalaman Kerja | `#pengalaman` (lini masa 3 posisi di BPBD) |
| NFR: valid & semantik, bahasa konsisten | `lang="id"`, seluruh teks Bahasa Indonesia |

### SOAL 02 — CSS (bobot 40%)
`css/style.css` native (tanpa framework), dibagi per bagian:
warna (variabel `--warna-utama` oranye BPBD + `--warna-gelap` biru dongker), font (serif untuk
judul, sans-serif untuk isi), padding/margin, layout (flexbox pada navbar, grid pada kartu profil,
data diri, organisasi, keahlian, dan kontak), tabel ber-strip, lini masa, tombol, `@media`
responsif (768px, 900px, 480px), `prefers-reduced-motion`, dan gaya cetak.

### SOAL 03 — JavaScript (bobot 40%)
`js/main.js` vanilla, tanpa library. Opsi yang dipilih: **hamburger button pada navbar**.
Fungsinya:

1. Tombol ☰ membuka/menutup menu dan mengubah `aria-expanded` (ikon berubah jadi tanda silang).
2. Menu otomatis tertutup setelah tautan diklik.
3. Menu tertutup saat tombol `Esc` ditekan atau saat area luar menu diklik.
4. Menu kembali horizontal saat layar dilebarkan melewati 900px (`matchMedia`).
5. Header mendapat bayangan ketika halaman digulir.

## 3. Cara Membuka Proyek di VS Code

Buka terminal (Git Bash) lalu jalankan:

```bash
code "C:/Users/LENOVO/Documents/Qoder/2026-11-04/6d081657/uts-web-profil"
```

Tiga cara menjalankan halaman:

1. **Task bawaan (paling mudah).** `Ctrl+Shift+P` -> *Tasks: Run Task* -> **Buka Profil di Browser**
   (tersedia juga **Buka Profil di Chrome**). Konfigurasinya ada di `.vscode/tasks.json`.
2. **Live Server.** Klik *Install* saat VS Code menawarkan ekstensi yang direkomendasikan
   (`ritwickdey.LiveServer` di `.vscode/extensions.json`), klik kanan `index.html` ->
   *Open with Live Server* -> `http://127.0.0.1:5501`. Halaman otomatis terisi ulang setiap kali
   HTML/CSS/JS disimpan.
3. **Buka file langsung.** Klik dua kali `index.html` di File Explorer; proyek ini tidak memakai
   modul ES sehingga tetap jalan pada protokol `file://`.

Debug JavaScript: `Ctrl+Shift+D` -> *JavaScript Debug Terminal* -> letakkan breakpoint di
`js/main.js` (fungsi `setMenu`), lalu klik tombol ☰ di browser.

## 4. Yang Perlu Dilengkapi Sebelum Dikumpulkan

- [ ] Nama SMK dan jurusan pada `#pendidikan` (tanda `TODO` di `index.html`).
- [ ] URL asli akun Instagram dan LinkedIn pada `#kontak` (saat ini masih tautan umum).
- [ ] Tahun masuk kuliah pada baris D3 Sistem Informasi bila berbeda.
- [ ] Screenshot tampilan desktop + mobile untuk lampiran laporan.

## 5. Pengujian

Diuji dengan Google Chrome (headless) pada lebar 1280px dan 390px: halaman ter-render penuh,
gambar profil terbaca, tidak ada error atau warning pada console, dan tombol hamburger
membuka/menutup menu sesuai harapan.
