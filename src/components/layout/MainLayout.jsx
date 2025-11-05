// src/components/layout/MainLayout.jsx

import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';

function MainLayout() {
  return (
   // 1. Ubah 'min-h-screen' menjadi 'h-screen' (tinggi viewport penuh)
   //    Tambahkan 'overflow-hidden' agar layout utama tidak bisa di-scroll
   <div className="flex h-screen flex-col overflow-hidden">
      
      {/* 2. Bungkus Navbar dengan div 'flex-shrink-0' agar tidak 'gepeng' */}
      <div className="flex-shrink-0">
        <Navbar />
      </div>

      {/* 3. Tambahkan 'overflow-y-auto' di sini! */}
      {/* Ini adalah area yang akan bisa di-scroll */}
      <main className="flex-grow relative overflow-y-auto bg-[#51146c]">
        <Outlet />
      </main>
      
      {/* 4. Bungkus Footer dengan 'flex-shrink-0' */}
      <div className="flex-shrink-0">
        <Footer />
      </div>

    </div>
  );
}

export default MainLayout;