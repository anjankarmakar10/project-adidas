import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  bg: StaticImageData;
}

const CategotyCard = ({ title, bg }: Props) => {
  return (
    <article className="h-[386px] group relative overflow-hidden rounded-md cursor-pointer">
      <Image
        src={bg}
        alt={title}
        className="object-cover group-hover:scale-110 transition w-full h-full"
      />
      <div className="absolute inset-0 flex w-full h-full justify-center items-center z-10 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition">
        <span className="font-bold text-2xl text-white">{title}</span>
      </div>
    </article>
  );
};
export default CategotyCard;
