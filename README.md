# 🌟 Website Portofolio Personal - Web Developer (Laravel, Livewire, HTML, Node.js)

Website portofolio modern, responsif, dan elegan yang dirancang khusus untuk membedah proyek **E-Report (Sistem Layanan Pengaduan Masyarakat)** sebagai *Flagship Case Study*, dengan fokus keahlian **Laravel, Livewire, HTML, dan Node.js**.

---

## 🚀 Cara Menjalankan Website Ini

Karena website ini dibangun dengan arsitektur modern berbasis HTML5, Tailwind CSS, dan JavaScript murni yang ringan:
1. Anda bisa langsung melakukan klik ganda (double-click) pada berkas `index.html` untuk membukanya di browser apa pun (Google Chrome, Microsoft Edge, Firefox, dll.).
2. Atau jika Anda menggunakan VS Code, Anda bisa menggunakan ekstensi **Live Server** (klik kanan `index.html` -> *Open with Live Server*).

---

## 🛠️ Cara Mengubah Data Personal Anda

Buka berkas `index.html` di text editor (VS Code / Notepad) dan sesuaikan bagian-bagian berikut:

| Bagian | Lokasi di `index.html` | Penjelasan |
| :--- | :--- | :--- |
| **Nama & Inisial** | Baris `header` & `hero` | Ganti `Hanif Faiza Wijaya` dan inisial `HF` sesuai keinginan Anda. |
| **Email** | Fungsi `copyToClipboard()` & tombol kontak | Ganti `haniffaizawijaya@email.com` dengan alamat email aktif Anda. |
| **Nomor WhatsApp** | Tag `<a href="https://wa.me/...">` | Ganti nomor `6281234567890` dengan nomor WhatsApp Anda (awali dengan kode negara 62). |
| **Akun LinkedIn** | Tag `<a href="https://linkedin.com/in/...">` | Masukkan URL profil LinkedIn Anda. |
| **Akun GitHub** | Tag `<a href="https://github.com/...">` | Masukkan URL repositori kodingan E-Report di GitHub Anda. |
| **Berkas CV** | Tag `<a href="#" ...>Download CV (PDF)</a>` | Letakkan file `cv.pdf` di folder yang sama, lalu ubah `href="#"` menjadi `href="cv.pdf"`. |

---

## 🌐 Cara Deploy Gratis ke Internet (Biar Punya Link Sendiri)

Agar link portofolio ini bisa Anda cantumkan di CV atau profil LinkedIn:

### Opsi 1: GitHub Pages (Paling Direkomendasikan)
1. Buat repositori baru di GitHub (misal: `portfolio` atau `username.github.io`).
2. Unggah seluruh isi folder ini (`index.html`, folder `css/`, folder `js/`).
3. Masuk ke tab **Settings** repositori GitHub -> **Pages**.
4. Pada bagian *Branch*, pilih `main` / `root`, lalu klik **Save**.
5. Tunggu 1 menit, portofolio Anda akan aktif di: `https://username.github.io/portfolio/`.

### Opsi 2: Vercel / Netlify
- Cukup buka [vercel.com](https://vercel.com) atau [netlify.com](https://netlify.com), hubungkan dengan repository GitHub Anda, dan klik **Deploy**.

---

## 🎯 Tips Wawancara Kerja: Cara Menjelaskan Proyek E-Report ke Rekruter

Saat wawancara kerja, pewawancara teknis (*lead engineer* / HRD) biasanya menanyakan hal-hal berikut. Berikut contekan (*cheat sheet*) cara menjawabnya berdasarkan fitur yang ada di portofolio ini:

### 1. Bagaimana Anda mengelola hak akses di Laravel?
> *"Saya mengimplementasikan Role-Based Access Control (RBAC) dengan 3 level aktor: Masyarakat, Petugas, dan Admin. Untuk membatasinya di backend, saya menggunakan Laravel Middleware custom dan Route Grouping, sehingga masyarakat tidak dapat mengakses dashboard verifikasi petugas maupun panel konfigurasi admin."*

### 2. Bagaimana alur penanganan upload bukti gambar pengaduan?
> *"Untuk menjaga performa dan keamanan server, saya menggunakan Laravel Form Request Validation untuk membatasi file hanya berformat JPEG/PNG dengan ukuran maksimal 2 MB (`mimes:jpeg,png|max:2048`). Berkas dienkripsi dengan penamaan hash acak unik dan disimpan di `storage/app/public`, bukan di direktori publik terbuka."*

### 3. Bagaimana relasi basis data (database) yang Anda rancang di MySQL?
> *"Tabel utama adalah `pengaduans` yang berelasi One-to-Many dengan tabel `tanggapans` (karena satu laporan bisa memiliki riwayat tanggapan bertahap dari petugas). Tabel `pengaduans` juga berelasi Many-to-One (`belongsTo`) dengan tabel `users` (sebagai pelapor) dan tabel master `kategoris` untuk pengelompokan jenis aduan."*

### 4. Mengapa memilih fokus pada proyek ini?
> *"Karena sistem pengaduan mencakup alur bisnis nyata yang lengkap: mulai dari autentikasi, manajemen status laporan yang bertahap (State Machine), validasi keamanan data sensitif, hingga pembuatan laporan akhir berformat PDF."*
