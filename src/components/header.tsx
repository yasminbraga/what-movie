import HeaderLink from "./headerLink";

const Header: React.FC = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-[#ff5656] to-[#ff1c1c]">
      <h1 className="text-center text-white py-6 text-2xl">Logo</h1>
      <div className="flex gap-12 items-center justify-center">
        <HeaderLink name="filmes não curados" route="/" />
        <HeaderLink name="filmes curtidos" route="/liked" />
        <HeaderLink name="filmes não curtidos" route="/notLiked" />
      </div>
    </nav>
  );
};

export default Header;
