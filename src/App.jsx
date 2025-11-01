// src/App.jsx

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateRoom from './pages/CreateRoom.jsx'
import JoinRoom from './pages/JoinRoom.jsx'
import Lobby from './pages/Lobby.jsx'
import QuizGame from './pages/QuizGame.jsx'
import Results from './pages/Results.jsx'
import MainLayout from './components/layout/MainLayout.jsx' // <-- 1. Impor Layout

function App() {

  return (
    <Routes>
      {/* 2. Buat "Route Induk" yang merender MainLayout.
           Semua rute di dalamnya akan dirender di dalam <Outlet />
           yang ada di MainLayout.
      */}
      <Route element={<MainLayout />}>

        {/* 3. Jadikan semua rute lama sebagai "anak" (children) */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRoom />} />
        <Route path="/join" element={<JoinRoom />} />
        
        <Route path="/lobby/:roomId" element={<Lobby />} />
        <Route path="/game/:roomId" element={<QuizGame />} />
        <Route path="/results/:roomId" element={<Results />} />

      </Route>
      {/* Jika Anda punya halaman login (tanpa navbar), 
          taruh rutenya di luar <Route element={<MainLayout />}> */}
    </Routes>
  )
}

export default App