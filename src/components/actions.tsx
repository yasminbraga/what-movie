import IconBtn from "./iconBtn";

const Actions: React.FC = () => {
  return (
    <div className="flex justify-center gap-8">
      <IconBtn name="não curti!" icon="n-curti.png" />
      <button className="bg-white rounded-full py-4 px-8 uppercase font-semibold text-gray-800">
        pular
      </button>
      <IconBtn name="curti!" icon="curti.png" />
    </div>
  );
};

export default Actions;
