import { FaYoutube, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-10">
      <div className="p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">KeenKeeper</h2>
        <p>Keep your friendships alive and meaningful.</p>

        <div className="flex justify-center gap-6 text-xl">
          <FaYoutube />
          <FaFacebook />
          <FaXTwitter />
        </div>

        <p className="text-sm mt-4">
          © 2026 KeenKeeper | Privacy Policy | Terms | Cookies
        </p>
      </div>
    </footer>
  );
};

export default Footer;