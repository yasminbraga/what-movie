import Image from "next/image";

const Empty: React.FC = () => {
  return (
    <section className="p-6 w-full">
      <h2 className="text-3xl font-black uppercase text-gray-700">
        Filmes curtidos
      </h2>
      <div className="flex flex-col items-center ">
        <Image
          src={"/video-camera-vazio.png"}
          alt="video camera"
          width={180}
          height={180}
        />
        <h2 className="text-3xl font-black uppercase text-gray-700 mt-12">
          Nenhum filme
        </h2>
      </div>
    </section>
  );
};

export default Empty;
