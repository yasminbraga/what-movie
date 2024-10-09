import Image from "next/image";

type ButtonProps = {
  name: string;
  icon: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconBtn: React.FC<ButtonProps> = ({ name, icon, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-white rounded-full py-5 px-6 flex items-center gap-2 uppercase font-semibold ${
        !name.includes("não") ? "text-red-500" : "text-gray-800"
      }`}
    >
      <Image src={`/${icon}`} alt={name} width={30} height={30} />
      <span className="hidden lg:block">{name}</span>
    </button>
  );
};

export default IconBtn;
