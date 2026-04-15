import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0f4f2]">
      <Navbar />

      <div className="flex-1 px-4 md:px-10 lg:px-16">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;