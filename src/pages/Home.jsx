import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center p-8 bg-[#4c0d68] text-center">
      <h1 className="mb-4 text-4xl font-semibold">Selamat Datang di Kuis GYPEM</h1>
      <p className="mb-8 text-lg">Siap untuk berkompetisi?</p>
      <div className="flex flex-col gap-2 md:flex-row">
       <Link to="/create" className="p-3 bg-purple-600 rounded-xl text-black font-semibold">
          Buat Game Baru
        </Link>
        
        <Link to="/join" className="p-3 bg-purple-600 rounded-xl text-black font-semibold">
          Join Game
        </Link>
      </div>
    </div>
  );
}
export default Home;