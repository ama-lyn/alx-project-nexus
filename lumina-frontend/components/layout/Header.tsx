const Header: React.FC = () => {

  return (
    <header className="min-h-[55px] w-full mb-4">
      <div className="flex justify-center items-center gap-4 bg-[#710A94] min-h-[50px] mb-2 px-4 md:px-8 py-4">
       
        <p className="text-white text-xs md:text-sm lg:font-semibold">
         Black Friday in August Sales
        </p>
      </div>

      <nav className="flex items-center gap-4 border border-gray-200 rounded-full pr-2 pl-6 py-1">
      </nav>
    </header>
  );
};

export default Header;