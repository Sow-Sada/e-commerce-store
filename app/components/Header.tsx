import Image from "next/image";
import beats from "../../public/beats.png";
import Link from "next/link";
const Header = () => {
  return (
    <div className="bg-[#B1F8EE] grid grid-rows-3 lg:grid-cols-2 lg:h-[30rem] place-items-center lg:flex lg:flex-row lg:justify-center lg:gap-16">
      <div className="flex flex-col items-center space-y-4 lg:mt-8 row-span-1 lg:gap-10 order-last lg:order-first">
        <h2 className="text-white text-4xl lg:text-6xl">Sale up to 50% off</h2>
        <Link
          href="/products"
          className="text-white bg-[#57C5B6] py-2 px-6 rounded-sm lg:px-10 lg:text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300"
        >
          Learn More
        </Link>
      </div>
      <div className="row-span-2 lg:col-span-1 lg:pt-16">
        <Image
          src={beats}
          alt="beats headphones"
          height={200}
          width={200}
          className="lg:w-96 lg:h-96 lg:object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
