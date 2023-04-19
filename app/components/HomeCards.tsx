import Image, { StaticImageData } from "next/image";

type HomeCardProps = {
  src: HTMLImageElement | StaticImageData;
  title: string;
  alt: string;
  price: string;
};

const HomeCards = ({ src, title, alt, price }: HomeCardProps) => {
  return (
    <div className="inline-block px-3">
      <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <Image
          src={src}
          alt={alt}
          className="h-56 w-64 object-contain mx-auto"
        />
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-xl italic">{price}</p>
      </div>
    </div>
  );
};

export default HomeCards;
