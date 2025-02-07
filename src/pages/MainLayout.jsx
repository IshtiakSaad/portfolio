import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-black via-gray-900 to-gray-800 min-h-screen font-mono">
          <Navbar></Navbar>
    
          <div className="flex-grow pt-20 pb-20 container mx-auto px-6">
            <Outlet></Outlet>
          </div>
    
          <Footer></Footer>
        </div>
      );
};

export default MainLayout;