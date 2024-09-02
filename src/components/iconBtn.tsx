import Image from "next/image";

const IconBtn: React.FC<{ name: string; icon: string }> = ({ name, icon }) => {
  return (
    <button
      className={`bg-white rounded-full py-4 px-8 flex items-center gap-2 uppercase font-semibold ${
        !name.includes("não") ? "text-red-500" : "text-gray-800"
      }`}
    >
      <Image src={`/${icon}`} alt={name} width={30} height={30} />
      {name}
    </button>
  );
};

export default IconBtn;
