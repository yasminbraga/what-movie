import HeaderLink from "./headerLink";

const Header: React.FC = () => {
  return (
    <nav>
      <h1 className="text-center text-white py-6 text-2xl">Logo</h1>
      <div className="flex gap-12">
        <HeaderLink name="filmes não curados" route="/" />
        <HeaderLink name="filmes curtidos" route="/liked" />
        <HeaderLink name="filmes não curtidos" route="/notLiked" />
      </div>
    </nav>
  );
};

export default Header;
