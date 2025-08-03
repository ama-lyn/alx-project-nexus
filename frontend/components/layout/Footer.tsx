import { FooterLinksProps } from "@/interfaces";

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <div className=" flex w-[75%] flex-col gap-6 list-none justify-center items-center">
      <div className="flex w-full shrink-0 space-x-2 justify-around text-xs lg:text-sm">
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.first}
        </li>
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.second}
        </li>
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.third}
        </li>
        <li className="cursor-pointer">
          <a href="#"></a>
          {links.fourth}
        </li>
      </div>
      <p className="text-sm lg:text-md font-semibold"> © 2024 Zelia. All rights reserved.</p>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAFAFA] text-[#4F7096] md:px-8">
      <div className="flex flex-col justify-center items-center min-h-[8rem] lg:flex-row">
          <FooterLinks
            links={{
              first: "About",
              second: "Contact",
              third: "Terms of Service",
              fourth: "Privacy Policy",
            }}
          />
      </div>
    </footer>
  );
};

export default Footer;