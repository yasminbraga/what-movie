"use client";
import { useData } from "@/contexts/dataContext";
import Header from "./header";

const MainContainer = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { menuIsOpen } = useData();
  return (
    <div
      className={`flex flex-col absolute duration-200 w-full ${
        menuIsOpen ? "left-[250px]" : "left-0"
      } `}
    >
      <Header />
      {children}
    </div>
  );
};

export default MainContainer;
