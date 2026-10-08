<div align="center">

# 🚀 Abdul Malik Tech Academy
### Modern Front-End Engineering Landing Page Showcase

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  <b>Landing page komersial modern, responsif, dan berstandar industri</b><br>
  Dirancang & dikembangkan oleh <b>Abdul Malik</b> untuk showcase keahlian Front-End Developer profesional.
</p>

[🌐 Live Preview](#-cara-menjalankan-proyek-secara-lokal) • [✨ Fitur Unggulan](#-fitur--interaktivitas-utama) • [📚 Silabus](#-arsitektur-dan-kurikulum) • [📁 Struktur Kode](#-struktur-direktori-proyek)

---

</div>

## 📖 Tentang Proyek

**Abdul Malik Tech Academy** adalah sebuah landing page komersial berstandar industri (*commercial-grade landing page*) untuk platform akselerasi karier web development dan teknologi di Indonesia.

Proyek ini dibangun dari nol (*clean rebuild*) dengan mengadopsi struktur informasi dan konversi tinggi dari template referensi, namun menggunakan desain visual modern, copy-writing orisinal yang persuasif, serta arsitektur kode bersih (*clean code architecture*).

Website ini dirancang khusus sebagai **showcase portofolio kerja** untuk membuktikan penguasaan komprehensif dalam:

1. **Semantik HTML5 & Aksesibilitas (a11y)**: Struktur dokumen yang rapi, tag semantik (`header`, `nav`, `main`, `section`, `article`, `footer`), serta SEO-friendly.
2. **Desain Responsif & Modern CSS3**: Menggunakan CSS Custom Properties (Variables), Flexbox, CSS Grid, efek kaca modern (*glassmorphism*), dan transisi halus.
3. **Framework Bootstrap 5.3.3**: Pemanfaatan sistem grid 12 kolom, utility classes, komponen responsif, serta kustomisasi tema tanpa merusak performa.
4. **Logika Vanilla JavaScript (ES6+)**: Interaktivitas dinamis tanpa ketergantungan library pihak ketiga yang berat (*zero bloated dependencies*).

---

## ✨ Fitur & Interaktivitas Utama

* 📢 **Top Announcement Bar with Countdown Timer**: Hitung mundur promo dinamis (jam, menit, detik) untuk meningkatkan urgensi konversi penjualan.
* 🧭 **Sticky Glassmorphism Navbar**: Navigasi responsif dengan efek blur transparan saat di-scroll, lengkap dengan *ScrollSpy active highlight*.
* 💻 **Hero Section with Code Playground Mockup**: Tampilan editor VS Code yang estetik dengan simulasi kode modern ES6+ dan badge pencapaian floating.
* 💡 **Pain Points & Empathy Section**: Menyajikan kendala nyata pemula (*tutorial hell*, materi berantakan, error tanpa tempat bertanya) beserta solusi sistematis.
* 📊 **Animated Stats Counter**: Angka metrik alumni dan kelulusan bergerak naik otomatis (*counter animation*) saat di-scroll ke area pandang menggunakan modern **IntersectionObserver API**.
* 📚 **Interactive Curriculum Roadmap with Filter Tabs**: Filter silabus modul berdasarkan kategori (*Web Foundations, Bootstrap, JavaScript, React, Career*) yang berjalan mulus dengan animasi transisi.
* 💼 **Real-World Project Showcase**: Pameran 3 proyek komersial yang akan dibangun siswa (E-Commerce Storefront, SaaS Dashboard, Movie App API).
* 🌟 **Interactive Testimonials Carousel with Autoplay & Dots**: Slider ulasan alumni (5 profil alumni) dengan *auto-sliding* mulus setiap 4 detik, *pause on hover*, navigasi dot interaktif, tombol panah prev/next, serta dukungan *touch swipe* di layar mobile.
* 💰 **Interactive Pricing Switcher**: Toggle switch antara harga "Sekali Bayar (Diskon)" dan "Cicilan 3x" dengan animasi transisi angka real-time.
* ❓ **Interactive FAQ Accordion**: Tanya jawab umum dengan dukungan aksesibilitas keyboard dan transisi mulus bawaan Bootstrap.
* 📝 **Lead Consultation Form with Client-side Validation**:
  - Validasi regex nomor WhatsApp & format email secara real-time.
  - Efek tombol *loading spinner* interaktif.
  - Pop-up notifikasi **Bootstrap Toast** tanpa perlu me-reload halaman (*Single Page Experience*).
* 🔝 **Floating Back-to-Top & Direct WhatsApp Button**: Navigasi cepat kembali ke atas dan kanal konsultasi langsung ke customer service.

---

## 📁 Struktur Direktori Proyek

```text
Abdul Website/
├── index.html               # File utama halaman web (Semantic HTML5)
├── README.md                # Dokumentasi proyek & panduan portofolio
├── .gitignore               # Konfigurasi pengabaian file Git (work template, dll.)
├── assets/
│   ├── css/
│   │   └── style.css        # Custom CSS, Design Tokens, & Responsive Rules
│   ├── js/
│   │   └── main.js          # Modular Vanilla JavaScript (ES6+)
│   └── img/                 # Aset gambar, ikon, dan logo
└── work template/           # Folder referensi materi asli (diabaikan oleh git)
```

---

## 🛠️ Cara Menjalankan Proyek Secara Lokal

Tidak memerlukan instalasi Node.js atau package manager yang rumit. Kamu bisa menjalankannya dengan beberapa cara berikut:

### Opsi 1: Langsung Buka di Browser
Cukup **klik dua kali (double click)** pada file `index.html`, atau drag & drop file tersebut ke browser pilihan kamu (Chrome, Edge, Firefox).

### Opsi 2: Menggunakan VS Code Live Server (Direkomendasikan)
1. Buka folder `Abdul Website` di Visual Studio Code.
2. Install ekstensi **Live Server** (oleh Ritwick Dey).
3. Klik kanan pada `index.html` lalu pilih **Open with Live Server**.
4. Website akan terbuka di `http://127.0.0.1:5500`.

### Opsi 3: Menggunakan Python Local Server
Jika kamu memiliki Python terpasang di komputer:
```bash
python -m http.server 3000
```
Buka browser dan akses `http://localhost:3000`.

---

## 🎯 Standar Penulisan Kode

* **Clean Code**: Mengikuti panduan pemisahan perhatian (*Separation of Concerns*) antara struktur (HTML), tampilan (CSS), dan perilaku (JS).
* **Mobile-First Responsive**: Tampilan dioptimalkan untuk layar ponsel (320px+), tablet, laptop, hingga layar monitor lebar (desktop 4K).
* **High Performance**: Menggunakan CDN global berkecepatan tinggi untuk Bootstrap & Google Fonts, sehingga skor Google Lighthouse tetap optimal.

---

<div align="center">

&copy; 2026 **Abdul Malik Tech Academy**. Dibuat dengan bangga oleh **Abdul Malik** untuk portofolio Front-End Developer profesional.

</div>
