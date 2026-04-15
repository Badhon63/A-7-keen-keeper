import { FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-10">

      <div className="px-5 pt-12 pb-6 text-center space-y-6">

        <h2 className="text-5xl font-bold">KeenKeeper</h2>

        <p className="opacity-70 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="flex justify-center gap-6 text-xl">
          <FaYoutube />
          <FaFacebook />
          <FaXTwitter />
        </div>

        <div className="border-t border-white/20 pt-4 mt-6 flex flex-col md:flex-row justify-between items-center text-sm gap-3 opacity-70">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4 opacity-80">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;