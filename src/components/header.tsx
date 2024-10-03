import Image from "next/image";
import HeaderLink from "./headerLink";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#ff5656] to-[#ff1c1c]">
      <div className="flex items-center justify-between px-6">
        <button></button>
        <Image
          src={"/menu-lateral.png"}
          alt="icone de menu lateral"
          width={24}
          height={24}
          className=""
        />
        <h1 className="text-white py-6 text-2xl">Logo</h1>
        <span></span>
      </div>
      <div className="hidden lg:flex gap-12 items-center justify-center">
        <HeaderLink name="filmes não curados" route="/" />
        <HeaderLink name="filmes curtidos" route="/liked" />
        <HeaderLink name="filmes não curtidos" route="/notLiked" />
      </div>
    </nav>
  );
};

export default Header;
