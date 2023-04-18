import Header from "./components/Header";
import lgtv from "../public/lgtv.png";
import ps5 from "../public/PS5.png";
import mac from "../public/macbook.png";
import washer from "../public/washer.png";
import iphone from "../public/iphone.png";
import switchs from "../public/switch.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-white">
        <h2 className="text-4xl text-[#57C5B6] py-4">Hot Items</h2>
        <div className="bg-white snap-x flex flex-row overflow-x-scroll pb-10">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            <div className="inline-block px-3">
              <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image
                  src={lgtv}
                  alt="LG Tv"
                  className="h-64 w-64 object-contain mx-auto"
                />
                <h2 className="text-2xl font-bold">LG c2 Oled Tv</h2>
                <p className="text-xl italic">1099.99</p>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image
                  src={ps5}
                  alt="playstation 5"
                  className="h-56 w-64 object-contain mx-auto"
                />
                <h2 className="text-2xl font-bold">Sony Playstation 5</h2>
                <p className="text-xl italic">599.99</p>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image
                  src={mac}
                  alt="macbook pro"
                  className="h-56 w-64 object-contain mx-auto"
                />
                <h2 className="text-2xl font-bold">Macbook Pro M1</h2>
                <p className="text-xl italic">2499.99</p>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image
                  src={switchs}
                  alt="nintendo switch"
                  className="h-56 w-64 object-contain mx-auto"
                />
                <h2 className="text-2xl font-bold">Nintendo Switch Oled</h2>
                <p className="text-xl italic">399.99</p>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image
                  src={iphone}
                  alt="iphone 14 pro"
                  className="h-56 w-64 object-contain mx-auto"
                />
                <h2 className="text-2xl font-bold">Iphone 14 Pro Max</h2>
                <p className="text-xl italic">1199.99</p>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="flex flex-col items-center w-72 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <Image
                  src={washer}
                  alt="Lg washing machine"
                  className="h-56 w-64 object-contain mx-auto"
                />
                <h2 className="text-2xl font-bold">LG Washer and Dryer</h2>
                <p className="text-xl italic">799.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
