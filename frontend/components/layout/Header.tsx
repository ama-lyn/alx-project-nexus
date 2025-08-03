import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="w-full mb-4">
      {/* Top banner */}
      <div className="flex justify-center items-center bg-[#710A94] min-h-[50px] mb-2 px-4 md:px-8 py-2">
        <p className="text-white text-xs md:text-sm lg:font-semibold">
          Black Friday in August Sales
        </p>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/assets/images/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          {/* Links + Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="#">
              <span className="text-sm text-gray-800 hover:text-[#6b35e8]">Browse Books</span>
            </Link>
            <Link href="#">
              <span className="text-sm text-gray-800 hover:text-[#6b35e8]">Community</span>
            </Link>
            <Link href="#">
              <span className="text-sm text-gray-800 hover:text-[#6b35e8]">About</span>
            </Link>

            <Button label="Sign Up" variant="primary" />
            <Button label="Log In" variant="secondary" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
