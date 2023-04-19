import Header from "./components/Header";
import lgtv from "../public/lgtv.png";
import ps5 from "../public/PS5.png";
import mac from "../public/macbook.png";
import washer from "../public/washer.png";
import iphone from "../public/iphone.png";
import switchs from "../public/switch.png";
import HomeCards from "./components/HomeCards";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-white">
        <h2 className="text-4xl text-[#57C5B6] py-4">Hot Items</h2>
        <div className="bg-white snap-x flex flex-row overflow-x-scroll pb-10">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            <HomeCards
              src={lgtv}
              title="LG c2 Oled Tv"
              alt="LG TV"
              price="1099.99"
            />
            <HomeCards
              src={ps5}
              title="Sony Playstation 5"
              alt="Playstation 5"
              price="599.99"
            />
            <HomeCards
              src={mac}
              title="Macbook Pro M1"
              alt="Macbook"
              price="2499.99"
            />
            <HomeCards
              src={switchs}
              title="Nintendo Switch Oled"
              alt="Nintendo Switch"
              price="399.99"
            />
            <HomeCards
              src={iphone}
              title="Iphone 14 Pro Max"
              alt="Iphone 14"
              price="1199.99"
            />
            <HomeCards
              src={washer}
              title="LG Washer and Dryer"
              alt="Washer and Dryer by LG"
              price="799.99"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
