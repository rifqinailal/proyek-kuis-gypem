import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#4c0d68]">
      <Navbar />
      <main className="bg-base-200">
        <Outlet />
      </main>
      
      <div class="fixed bottom-0 left-0 w-full">
 <Footer />
</div>
    </div>
  );
}

export default MainLayout;