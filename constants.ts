import { type Level } from './types';

export const LEVELS: Level[] = [
  {
    id: 1,
    title: "Level 1: Dasar-Dasar Bilangan",
    description: "Untuk Kelas 4",
    materials: [
      {
        title: "Pecahan Sederhana",
        explanation: "Pecahan adalah bagian dari keseluruhan. Ditulis sebagai a/b, di mana 'a' adalah pembilang (bagian yang diambil) dan 'b' adalah penyebut (jumlah total bagian).",
        example: "Contoh: Sebuah pizza dipotong menjadi 4 bagian sama besar. Jika kamu mengambil 1 potong, kamu memiliki 1/4 bagian dari pizza.",
      },
      {
        title: "Faktor & Kelipatan",
        explanation: "Faktor adalah bilangan yang dapat membagi habis suatu bilangan lain. Kelipatan adalah hasil perkalian suatu bilangan dengan bilangan asli.",
        example: "Contoh: Faktor dari 12 adalah 1, 2, 3, 4, 6, 12. Kelipatan dari 3 adalah 3, 6, 9, 12, ...",
      },
      {
        title: "Bilangan Ganjil & Genap",
        explanation: "Bilangan genap adalah bilangan yang habis dibagi 2 (contoh: 2, 4, 6). Bilangan ganjil adalah bilangan yang tidak habis dibagi 2 (contoh: 1, 3, 5).",
        example: "Contoh: Angka 8 adalah bilangan genap karena 8 ÷ 2 = 4. Angka 7 adalah bilangan ganjil.",
      },
    ],
    questions: [
      { text: "Bentuk pecahan paling sederhana dari 6/8 adalah...", type: 'multiple-choice', options: ["1/2", "2/4", "3/4", "6/8"], correctAnswer: "3/4" },
      { text: "Kelipatan Persekutuan Terkecil (KPK) dari 5 dan 10 adalah...", type: 'short-answer', correctAnswer: "10" },
      { text: "Angka 15 adalah bilangan ganjil.", type: 'true-false', correctAnswer: "Benar" },
      { text: "Faktor dari bilangan 20 adalah 1, 2, 4, 5, 10, 20.", type: 'true-false', correctAnswer: "Benar" },
      { text: "Hasil dari 1/5 + 3/5 adalah...", type: 'multiple-choice', options: ["4/10", "3/5", "4/5", "3/10"], correctAnswer: "4/5" },
      { text: "Bilangan genap setelah 22 adalah...", type: 'short-answer', correctAnswer: "24" },
      { text: "Semua faktor dari 9 adalah...", type: 'multiple-choice', options: ["1, 3, 9", "1, 9", "3, 9", "1, 3"], correctAnswer: "1, 3, 9" },
      { text: "Pecahan 2/3 sama nilainya dengan 4/6.", type: 'true-false', correctAnswer: "Benar" },
      { text: "Kelipatan 4 yang kurang dari 20 adalah...", type: 'multiple-choice', options: ["4, 8, 12, 16", "4, 8, 12, 16, 20", "4, 8, 10, 12", "4, 6, 8, 10"], correctAnswer: "4, 8, 12, 16" },
      { text: "Jumlah dari bilangan ganjil pertama dan bilangan genap pertama adalah...", type: 'short-answer', correctAnswer: "3" },
    ]
  },
  {
    id: 2,
    title: "Level 2: Kenali Bentuk & Ukuran",
    description: "Untuk Kelas 4",
     materials: [
      {
        title: "Bangun Datar",
        explanation: "Bangun datar adalah bentuk dua dimensi yang memiliki luas dan keliling. Contohnya seperti persegi, persegi panjang, dan segitiga.",
        example: "Contoh: Kertas HVS adalah contoh bangun datar persegi panjang. Ubin lantai adalah contoh bangun datar persegi.",
      },
      {
        title: "Keliling Bangun Datar",
        explanation: "Keliling adalah jumlah panjang semua sisi pada sebuah bangun datar. Kamu hanya perlu menjumlahkan panjang setiap sisinya.",
        example: "Contoh: Persegi dengan sisi 5 cm memiliki keliling 5 + 5 + 5 + 5 = 20 cm.",
      },
      {
        title: "Pengukuran Panjang",
        explanation: "Satuan panjang yang umum digunakan adalah kilometer (km), meter (m), dan sentimeter (cm). Ingat: 1 km = 1000 m, dan 1 m = 100 cm.",
        example: "Contoh: Jarak dari rumah ke sekolah adalah 2 km. Tinggi pintu adalah 2 m atau 200 cm.",
      },
    ],
    questions: [
      { text: "Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku disebut...", type: 'short-answer', correctAnswer: "Persegi" },
      { text: "Sebuah persegi panjang memiliki panjang 8 cm dan lebar 5 cm. Kelilingnya adalah 26 cm.", type: 'true-false', correctAnswer: "Benar" },
      { text: "2 meter sama dengan ... sentimeter.", type: 'short-answer', correctAnswer: "200" },
      { text: "Segitiga sama sisi memiliki 3 sisi yang panjangnya berbeda.", type: 'true-false', correctAnswer: "Salah" },
      { text: "Keliling sebuah persegi dengan sisi 7 cm adalah...", type: 'multiple-choice', options: ["14 cm", "21 cm", "28 cm", "49 cm"], correctAnswer: "28 cm" },
      { text: "500 cm sama dengan ... meter.", type: 'short-answer', correctAnswer: "5" },
      { text: "Bangun datar yang memiliki 3 sisi disebut...", type: 'multiple-choice', options: ["Persegi", "Lingkaran", "Segitiga", "Trapesium"], correctAnswer: "Segitiga" },
      { text: "Jika keliling persegi adalah 40 cm, maka panjang sisinya adalah 10 cm.", type: 'true-false', correctAnswer: "Benar" },
      { text: "Alat untuk mengukur panjang adalah...", type: 'multiple-choice', options: ["Timbangan", "Penggaris", "Jam", "Termometer"], correctAnswer: "Penggaris" },
      { text: "Sebuah segitiga memiliki sisi 3 cm, 4 cm, dan 5 cm. Kelilingnya adalah...", type: 'short-answer', correctAnswer: "12" },
    ]
  },
  {
    id: 3,
    title: "Level 3: Aplikasi Matematika",
    description: "Untuk Kelas 4",
    materials: [
      {
        title: "Soal Cerita Pecahan",
        explanation: "Soal cerita membantumu menggunakan matematika dalam kehidupan sehari-hari. Baca soal dengan teliti, pahami apa yang ditanyakan, dan gunakan operasi pecahan yang tepat.",
        example: "Contoh: Ibu punya 1/2 kue. Dia memberikan 1/4 bagian kepada Adi. Sisa kue ibu adalah 1/2 - 1/4 = 1/4.",
      },
      {
        title: "Luas Bangun Datar",
        explanation: "Luas adalah besarnya area di dalam sebuah bangun datar. Rumus luas persegi adalah sisi × sisi. Rumus luas persegi panjang adalah panjang × lebar.",
        example: "Contoh: Persegi panjang dengan panjang 6 cm dan lebar 4 cm memiliki luas 6 × 4 = 24 cm².",
      },
      {
        title: "Membaca Tabel/Grafik",
        explanation: "Tabel dan grafik menyajikan data agar mudah dibaca. Grafik batang menggunakan batang untuk menunjukkan jumlah, sedangkan tabel menggunakan baris dan kolom.",
        example: "Contoh: Grafik batang penjualan buah menunjukkan 10 apel dan 15 jeruk terjual. Artinya, jeruk lebih banyak terjual daripada apel.",
      },
    ],
    questions: [
      { text: "Ibu membeli 8 apel. 1/4 bagian diberikan kepada kakak. Berapa apel yang diterima kakak?", type: 'short-answer', correctAnswer: "2" },
      { text: "Luas persegi panjang dengan panjang 10 cm dan lebar 5 cm adalah...", type: 'multiple-choice', options: ["15 cm²", "30 cm²", "50 cm²", "100 cm²"], correctAnswer: "50 cm²" },
      { text: "Sebuah tabel menunjukkan data hobi siswa: 5 suka bola, 7 suka membaca. Siswa yang suka membaca lebih banyak.", type: 'true-false', correctAnswer: "Benar" },
      { text: "Ayah memiliki 3/4 liter bensin, lalu mengisi lagi 1/4 liter. Total bensin ayah sekarang 1 liter.", type: 'true-false', correctAnswer: "Benar" },
      { text: "Luas sebuah persegi dengan sisi 6 cm adalah...", type: 'short-answer', correctAnswer: "36" },
      { text: "Adi punya 10 kelereng. 1/2 bagian berwarna merah. Berapa kelereng merah Adi?", type: 'multiple-choice', options: ["2", "5", "8", "10"], correctAnswer: "5" },
      { text: "Luas persegi lebih besar dari kelilingnya.", type: 'true-false', correctAnswer: "Salah" }, // Tergantung sisinya, jadi false
      { text: "Pada sebuah grafik, batang yang paling tinggi menunjukkan data yang paling...", type: 'multiple-choice', options: ["Sedikit", "Banyak", "Kecil", "Rendah"], correctAnswer: "Banyak" },
      { text: "Sebuah lantai berukuran 3m x 4m. Luas lantai tersebut adalah... m²", type: 'short-answer', correctAnswer: "12" },
      { text: "Ani memakan 1/8 bagian pizza, dan Budi memakan 3/8 bagian. Total pizza yang mereka makan adalah...", type: 'multiple-choice', options: ["4/16", "1/2", "3/64", "1/4"], correctAnswer: "1/2" },
    ]
  }
];

export const MASCOT_MESSAGES = {
  SUCCESS: [
    "Hebat! Kamu berhasil menyelesaikan Level ini!",
    "Luar Biasa! Bintang matematika baru telah lahir!",
    "Keren! Terus taklukkan galaksi matematika!",
  ],
  FAILURE: [
    "Coba lagi, kamu pasti bisa!",
    "Jangan menyerah, pahlawan matematika!",
    "Sedikit lagi! Ayo kita coba bersama Bejo!",
  ],
};