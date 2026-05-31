# 🎬 Movie App

> Aplikasi web frontend interaktif untuk menjelajahi dan menemukan film terbaru dari The Movie Database (TMDB) menggunakan React dan Vite.

![React](https://img.shields.io/badge/React-18+-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-purple?style=flat-square&logo=vite)
![Status](https://img.shields.io/badge/Status-Active-green?style=flat-square)

---

## 📋 Daftar Isi

- [Tentang Aplikasi](#tentang-aplikasi)
- [Fitur Utama](#fitur-utama)
- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Konfigurasi Lingkungan](#konfigurasi-lingkungan)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi & Dependensi](#teknologi--dependensi)
- [API Integration](#api-integration)
- [Troubleshooting](#troubleshooting)
- [Lisensi](#lisensi)

---

## 🎯 Tentang Aplikasi

**Movie App** adalah aplikasi web frontend yang dibangun dengan **React** dan **Vite** untuk menampilkan data film dari TMDB (The Movie Database). Aplikasi ini menyediakan pengalaman pengguna yang smooth dalam mencari, menjelajahi, dan menyaring film berdasarkan kategori yang diinginkan.

Dengan integrasi TMDB API melalui Axios, aplikasi ini dapat menampilkan data film terkini dan memberikan berbagai fitur filtering yang memudahkan pengguna menemukan film favorit mereka.

---

## ✨ Fitur Utama

- ✅ **Tampilan Film Trending** — Menampilkan daftar film trending mingguan dari TMDB
- 🔍 **Pencarian Film** — Cari film berdasarkan judul dengan query dinamis
- 📂 **Filter Genre** — Melihat daftar genre dan menyaring film berdasarkan kategori yang dipilih
- 📱 **Responsive Design** — Interface yang responsif untuk berbagai ukuran layar
- 🎨 **UI Modern** — Komponen kartu film dengan grid layout yang menarik
- ⚡ **Fast Loading** — Build tool Vite dengan hot module replacement untuk development lebih cepat

---

## 📋 Prasyarat

Sebelum memulai, pastikan sistem Anda memiliki:

- **Node.js** versi 16.0.0 atau lebih baru ([Download Node.js](https://nodejs.org/))
- **npm** versi 7.0.0 atau lebih baru (biasanya bawaan Node.js)
- **Browser modern** dengan dukungan ES6+ (Chrome, Firefox, Safari, atau Edge)
- **TMDB API Key** (gratis) dari [TheMovieDatabase.org](https://www.themoviedb.org/settings/api)

Verifikasi instalasi:

```bash
node --version
npm --version
```

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/movie-app.git
cd movie-app
```

### 2. Install Dependencies

```bash
npm install
```

Perintah ini akan menginstal semua dependency yang tercantum di `package.json`.

---

## ⚙️ Konfigurasi Lingkungan

### 1. Dapatkan TMDB API Key

1. Kunjungi [TMDB API Settings](https://www.themoviedb.org/settings/api)
2. Buat akun atau login (gratis)
3. Buat API key baru di bagian API
4. Copy API key Anda

### 2. Buat File `.env`

Di root directory proyek, buat file `.env`:

```bash
touch .env
```

### 3. Tambahkan Environment Variables

Isi file `.env` dengan variabel berikut:

```env
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

**Contoh:**

```env
VITE_TMDB_API_KEY=abc123def456ghi789jkl000mno
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_IMAGE_BASE_URL=https://image.tmdb.org/t/p/w500
```

### ⚠️ Keamanan

- **JANGAN** commit file `.env` ke repository
- Pastikan `.env` sudah ditambahkan ke `.gitignore`:

```gitignore
# .gitignore
.env
.env.local
.env.*.local
node_modules/
dist/
```

---

## 🏃 Menjalankan Aplikasi

### Development Mode

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` dan secara otomatis refresh saat Anda membuat perubahan kode (Hot Module Replacement).

### Production Build

```bash
npm run build
```

Hasil build akan tersimpan di folder `dist/` dan siap untuk di-deploy.

### Preview Build

Untuk preview hasil production build secara lokal:

```bash
npm run preview
```

### Linting

Jalankan ESLint untuk memeriksa code quality:

```bash
npm run lint
```

---

## 📁 Struktur Proyek

```
movie-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Header & navigation
│   │   ├── MovieCard.jsx       # Komponen kartu film
│   │   ├── MovieGrid.jsx       # Grid layout untuk movies
│   │   ├── SearchBar.jsx       # Input pencarian
│   │   └── GenreFilter.jsx     # Filter berdasarkan genre
│   ├── api.js                  # TMDB API integration dengan axios
│   ├── App.jsx                 # Main component & state management
│   ├── App.css                 # Global styles
│   ├── index.css               # Base styles
│   └── main.jsx                # Entry point
├── .env.example                # Template environment variables
├── .gitignore
├── package.json
├── vite.config.js             # Konfigurasi Vite
├── eslint.config.js           # Konfigurasi ESLint
└── README.md
```

### Penjelasan File Penting

| File | Deskripsi |
|------|-----------|
| `src/App.jsx` | Komponen utama dengan state management untuk movies, genres, dan filters |
| `src/api.js` | Fungsi-fungsi untuk memanggil TMDB API menggunakan axios |
| `src/components/` | Reusable React components untuk membangun UI aplikasi |
| `vite.config.js` | Konfigurasi build tool Vite |
| `.env` | Environment variables untuk TMDB API configuration |

---

## 🛠️ Teknologi & Dependensi

### Dependencies Utama

| Package | Versi | Fungsi |
|---------|-------|--------|
| `react` | 18+ | Library UI utama untuk membangun komponen |
| `react-dom` | 18+ | Rendering React ke DOM browser |
| `axios` | 1.0+ | HTTP client untuk mengambil data dari TMDB API |
| `swiper` | 10+ | Library slider/carousel untuk tampilan konten interaktif |

### Dev Dependencies

| Package | Fungsi |
|---------|--------|
| `@vitejs/plugin-react` | Plugin React untuk Vite dengan HMR |
| `@vitejs/plugin-react-swc` | SWC compiler untuk optimasi build |
| `eslint` | JavaScript linter untuk code quality |
| `@eslint/js` | ESLint core ruleset |
| `eslint-plugin-react-hooks` | Aturan lint untuk React Hooks |
| `eslint-plugin-react-refresh` | Validasi React Fast Refresh |

### Menambah Dependency Baru

```bash
# Menambah package production
npm install package-name

# Menambah dev dependency
npm install --save-dev package-name

# Update semua dependencies
npm update
```

---

## 🔌 API Integration

Aplikasi menggunakan TMDB API dengan integrasi Axios. Berikut endpoint utama yang digunakan:

### 1. Film Trending Minggu Ini

```javascript
GET /trending/movie/week
```

Menampilkan daftar film yang sedang trending minggu ini.

### 2. Pencarian Film

```javascript
GET /search/movie?query=movie_title
```

Mencari film berdasarkan judul yang dimasukkan pengguna.

### 3. Daftar Genre Film

```javascript
GET /genre/movie/list
```

Mengambil daftar semua genre film yang tersedia di TMDB.

### 4. Discover Film dengan Filter

```javascript
GET /discover/movie?with_genres=28
```

Mengambil film berdasarkan filter genre atau kriteria lainnya.

**API Documentation:** [TMDB API Docs](https://developer.themoviedb.org/3)

---

## 🐛 Troubleshooting

### ❌ Error: "API key not found" atau "Invalid API key"

**Solusi:**
- Verifikasi API key di TMDB dashboard
- Pastikan file `.env` sudah dibuat dengan benar
- Cek tidak ada spasi di API key
- Restart development server

```bash
npm run dev
```

### ❌ Error: "Port 5173 already in use"

**Solusi:**
```bash
# Gunakan port berbeda
npm run dev -- --port 3000
```

### ❌ Error: "Cannot find module" atau "npm install failed"

**Solusi:**
```bash
# Hapus node_modules dan install ulang
rm -rf node_modules package-lock.json
npm install
```

### ❌ Film tidak tampil / Blank Screen

**Kemungkinan penyebab:**
- API key tidak valid atau belum konfigurasi
- Network blocked (cek koneksi internet)
- Browser cache perlu di-clear

**Solusi:**
```bash
# Clear browser cache dan hard refresh
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# Atau buka browser console (F12) untuk melihat error
```

---

## 📚 Referensi & Dokumentasi

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TMDB API Documentation](https://developer.themoviedb.org/3)
- [Axios Documentation](https://axios-http.com)
- [Swiper Documentation](https://swiperjs.com)

---

## 🚀 Deployment

### Deploy ke Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy ke Netlify

1. Build aplikasi: `npm run build`
2. Drag & drop folder `dist/` ke [Netlify](https://netlify.com)

### Deploy ke GitHub Pages

```bash
npm run build
# Taruh isi folder dist/ ke branch gh-pages
```

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Anda bebas menggunakan, memodifikasi, dan mendistribusikan kode ini untuk tujuan pribadi maupun komersial.

---

## 👨‍💻 Author

**Your Name**  
[GitHub](https://github.com/yourhandle) | [Email](mailto:your.email@example.com)

---

## 🙏 Credits

- [TMDB](https://www.themoviedb.org) - Sumber data film
- [React](https://react.dev) - Library UI
- [Vite](https://vitejs.dev) - Build tool

---

<div align="center">

**⭐ Jika project ini membantu, jangan lupa kasih bintang!**

Made with ❤️

</div>
