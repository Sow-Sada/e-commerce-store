import Image from "next/image";
import Link from "next/link";
import sada from "../../public/M78-K6R-5R6 (2 von 2)_1683034639275.jpg";
const About = () => {
  return (
    <section className="w-full px-0 py-10 bg-white">
      <div className="w-full  flex flex-col lg:flex-row items-center justify-around lg:justify-evenly mx-auto my-0">
        <Image src={sada} alt="me" className="pic" height={500} width={350} />
        <div className="text space-y-4 lg:max-w-[500px] px-3">
          <h2 className="text-[40px] text-center lg:text-[70px] font-semibold mb-2.5">
            About Me
          </h2>
          <h5 className="text-[22px] font-medium mb-5">
            Full-Stack Developer &{" "}
            <span className="text-[#57C5B6]">Designer</span>
          </h5>
          <p className="text-lg tracking-[1px]">
            Hello all, my name is Sada and I am a currently a full stack
            engineer studying Computer Science in university. I have found
            passion in the world of software development and I hope to one day
            be a machine learning engineer. I hope to connect and continue to
            work and gain professional experience. Thank you for stopping by and
            checking out my e-commerce project.
          </p>
          <div className="">
            <Link
              href="https://www.linkedin.com/in/sada-sow/"
              className="text-lg text-[#57C5B6] no-underline transition-[0.5s] px-[25px] py-2 rounded-md  border-solid border border-[#338278] hover:bg-[#338278] hover:text-white"
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
