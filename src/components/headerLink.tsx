"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderLink: React.FC<{ name: string; route: string }> = ({
  name,
  route,
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={route}
      className={`text-white opacity-50 uppercase hover:opacity-100 ${
        pathname === route ? "opacity-100 border-b-4 border-white" : ""
      }`}
    >
      {name}
    </Link>
  );
};

export default HeaderLink;
