# Movie App

Movie App adalah aplikasi web frontend yang dibangun dengan React dan Vite untuk menampilkan data film dari TMDB (The Movie Database).

## Deskripsi

Aplikasi ini memungkinkan pengguna untuk:
- Melihat daftar film trending mingguan
- Mencari film berdasarkan judul
- Menampilkan daftar genre film
- Menyaring film berdasarkan genre

Data film diambil dari TMDB API menggunakan `axios`.

## Teknologi & Dependensi

Dependensi utama yang digunakan di proyek ini:
- `react` — library UI utama untuk membangun komponen
- `react-dom` — rendering React di browser
- `vite` — build tool modern dengan hot module replacement
- `axios` — HTTP client untuk mengambil data API
- `swiper` — slider/carousel untuk tampilan konten yang interaktif

Dev dependency penting:
- `@vitejs/plugin-react` — plugin React untuk Vite
- `eslint` dan `@eslint/js` — linting JavaScript
- `eslint-plugin-react-hooks` — aturan lint untuk hooks React
- `eslint-plugin-react-refresh` — integrasi React refresh

## Fitur

Fitur utama aplikasi:
- Menampilkan film trending minggu ini
- Pencarian film dengan query dinamis
- Menampilkan daftar genre film TMDB
- Menyaring film berdasarkan genre yang dipilih
- UI responsif dengan komponen kartu film dan grid

## Struktur Proyek

Beberapa file penting:
- `src/App.jsx` — logika utama dan state aplikasi
- `src/api.js` — panggilan TMDB API dengan `axios`
- `src/components/` — komponen UI seperti `MovieCard`, `MovieGrid`, `SearchBar`, `GenreFilter`, dan `Header`

## Konfigurasi Lingkungan

Aplikasi ini menggunakan environment variables untuk konfigurasi TMDB:
- `VITE_TMDB_API_KEY`
- `VITE_TMDB_BASE_URL`

Pastikan file `.env` sudah berisi variabel tersebut sebelum menjalankan aplikasi.

## Menjalankan Proyek

1. Instal dependensi:
   ```bash
   npm install
   ```
2. Jalankan development server:
   ```bash
   npm run dev
   ```
3. Buka browser pada URL yang ditampilkan di terminal.

## Lisensi

Proyek ini bisa dikembangkan dan disesuaikan sesuai kebutuhan.
