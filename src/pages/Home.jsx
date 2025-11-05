import { Link } from 'react-router-dom';
import { BackgroundRippleEffect } from "../components/ui/BackgroundRipple.jsx";
import { Meteors } from "../components/ui/meteors.tsx";
import { HoverEffect } from "../components/ui/card-hover-effect.tsx";

function Home() {
  return (
    <div className="relative">
      <BackgroundRippleEffect /> 
      <Meteors number={50} />

      <div className="relative z-10 flex flex-col items-center text-center p-8">
        <h1 className="mb-4 text-4xl font-semibold text-white">
          Selamat Datang di <span className="text-yellow-400">GYPEM Quiz</span>
        </h1>
        <p className="mb-8 text-lg text-white max-w-2xl">
          Platform kuis kompetitif real-time yang menguji kecepatan berpikir dan ketepatan strategi!  
          Buat ruang permainanmu sendiri, undang teman, dan buktikan siapa yang paling cepat dan cerdas.
        </p>

        {/* Dua pilihan utama */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Kartu Host */}
          <div className="flex flex-col px-12 py-6 bg-base-100 rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="font-bold text-2xl mb-2 text-warning">Buat Game Baru</h1>
            <p className="text-gray-600">
              Jadilah <span className="font-semibold text-warning">Host</span> dan atur jalannya permainan!  
              Tentukan aturan, jumlah soal, dan waktu permainan sebelum memulai tantangan seru bersama teman-temanmu.
            </p>
            <Link 
              to="/create" 
              className="btn btn-warning btn-lg mt-7 rounded-4xl text-black font-bold"
            >
              Buat Sekarang
            </Link>
          </div>

          {/* Kartu Peserta */}
          <div className="flex flex-col px-12 py-6 bg-base-100 rounded-4xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="font-bold text-2xl mb-2 text-warning">Gabung ke Game</h1>
            <p className="text-gray-600">
              Dapatkan <span className="font-semibold text-warning">ID Room</span> dari temanmu dan bergabunglah ke arena kuis!  
              Tunjukkan siapa yang paling cepat menjawab dan raih posisi teratas di papan skor real-time.
            </p>
            <Link 
              to="/join" 
              className="btn btn-warning btn-lg rounded-4xl mt-7 text-black font-bold"
            >
              Gabung Sekarang
            </Link>
          </div>
        </div>

        {/* Section tambahan - highlight fitur */}
        <div className="max-w-5xl mx-auto px-8 mt-16 relative z-20">
          <h2 className="text-3xl font-bold text-white mb-8">Fitur Utama GYQIS</h2>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}

export const projects = [
  {
    title: "Room & Lobi Real-Time",
    description:
      "Host membuat room unik dan peserta dapat bergabung secara langsung. Daftar pemain diperbarui otomatis di layar semua peserta.",
    link: "#",
  },
  {
    title: "Atur Aturan Sendiri",
    description:
      "Host bebas menentukan nama game, jumlah soal, durasi, dan sistem skor (+100 / -5).",
    link: "#",
  },
  {
    title: "Validasi Login Dinamis",
    description:
      "Sistem mendukung mode login dan guest dengan pengaturan otomatis berdasarkan status Host.",
    link: "#",
  },
  {
    title: "Leaderboard Real-Time",
    description:
      "Setiap jawaban langsung mempengaruhi posisi peringkat. Pemain bisa melihat perubahan skor seketika.",
    link: "#",
  },
  {
    title: "Fitur Ready Check",
    description:
      "Pastikan semua pemain siap sebelum kuis dimulai. Tombol 'Mulai Game' baru aktif jika semua sudah siap.",
    link: "#",
  },
  {
    title: "Hasil & Statistik Akhir",
    description:
      "Setelah kuis selesai, pemain melihat skor akhir, jumlah benar-salah, dan posisi peringkat final.",
    link: "#",
  },
];

export default Home;
