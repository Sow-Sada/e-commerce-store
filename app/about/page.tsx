import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <section className="h-screen w-full px-0 py-[90px] bg-white">
      <div className="w-[1130px] max-w-[85%] flex items-center justify-around mx-auto my-0">
        {/* <Image src="girl.png" className="pic" /> */}
        <div className="text w-[540px]">
          <h2 className="text-[40px] lg:text-[70px] font-semibold mb-2.5">
            About Me
          </h2>
          <h5 className="text-[22px] font-medium mb-5">
            Full-Stack Developer &{" "}
            <span className="text-[#57C5B6]">Designer</span>
          </h5>
          <p className="text-lg leading-[25px] tracking-[1px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
            natus ad sed harum itaque ullam enim quas, veniam accusantium, quia
            animi id eos adipisci iusto molestias asperiores explicabo cum vero
            atque amet corporis! Soluta illum facere consequuntur magni. Ullam
            dolorem repudiandae cumque voluptate consequatur consectetur, eos
            provident necessitatibus reiciendis corrupti!
          </p>
          <div className="mt-[30px]">
            <Link
              href="https://www.linkedin.com/in/sada-sow/"
              className="text-lg text-[#57C5B6] no-underline transition-[0.5s] px-[25px] py-2 rounded-md border-[none] hover:border hover:border-solid hover:border-[#57C5B6]"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
