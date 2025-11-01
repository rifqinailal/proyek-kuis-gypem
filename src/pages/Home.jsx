import { Link } from 'react-router-dom';
import { BackgroundRippleEffect } from "../components/ui/BackgroundRipple.jsx";
// Pastikan import .js/.jsx sesuai nama file Anda
import { Boxes } from "../components/ui/background-boxes.tsx"; 
import { Meteors } from "../components/ui/meteors.tsx";

function Home() {
  return (
    // 1. Tambahkan "relative" di sini
    <div className="relative">
      <BackgroundRippleEffect /> 
      {/* <Boxes /> */}
       <Meteors number={50} />

      {/* 2. Hapus "absolute inset-0" dan ganti dengan "relative" */}
      <div className="relative z-10 flex flex-col items-center text-center p-8 pointer-events-none">
        <h1 className="mb-4 text-4xl font-semibold text-white pointer-events-auto">
          Selamat Datang di Kuis GYPEM
        </h1>
        <p className="mb-8 text-lg text-white pointer-events-auto">
          Siap untuk berkompetisi?
        </p>
        <div className="flex flex-col gap-4 md:flex-row pointer-events-auto">
          <div className='flex flex-col px-20 py-5 bg-base-100 rounded-4xl'>
            <h1 className='font-bold'>Buat lah kuis</h1>
            <h1>Berlombahalah dengan temanmu</h1>
            <Link 
            to="/create" 
            className="btn btn-warning btn-lg mt-7 rounded-4xl"
          >
            Buat Game Baru
          </Link>
          </div>
          
          <div className='flex flex-col px-20 py-5 bg-base-100 rounded-4xl'>
            <h1 className='font-bold'>Join lah kuis</h1>
            <h1>Berlombalah dengan temanmu</h1>
            <Link 
            to="/join" 
            className="btn btn-warning btn-lg rounded-4xl mt-7"
          >
            Join game
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
export default Home;