import { FiFacebook } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="relative bg-[#57C5B6] pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-center justify-center">
          <div className="w-full lg:w-6/12 px-4 flex flex-col justify-center items-center">
            <h4 className="text-3xl fonat-semibold text-white">
              Let's keep in touch!
            </h4>
            <h5 className="text-md lg:text-lg mt-2 mb-2 text-white">
              You can find me on any of these platforms. Thanks!
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <Link
                href="https://www.linkedin.com/in/sada-sow/"
                className="font-normal h-10 w-10"
              >
                <BsLinkedin size={22} />
              </Link>
              <Link href="#" className="font-normal h-10 w-10">
                <FiFacebook size={22} />
              </Link>
              <Link href="#" className="font-normal h-10 w-10">
                <ImLink size={22} />
              </Link>
              <Link
                href="https://github.com/Sow-Sada"
                className="font-normal h-10 w-10"
              >
                <BsGithub size={22} />
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
              Copyright © <span>2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
