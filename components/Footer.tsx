import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
    <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col justify-start items-start gap-6">
        <Image
          src="/logo.png"
          alt="logo"
          width={118}
          height={18}
          className="object-contain"
        />
        <p className="text-base text-gray-700">
          KingsCar 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <div className="flex gap-5 flex-wrap mb-6">
        <div>Created With</div>
        <ul className="flex gap-4 flex-wrap ">
          <li className="tech">Next.JS13</li>
          <li className="tech">Typescript</li>
          <li className="tech">Headless-UI</li>
          <li className="tech">Cars-API</li>
        </ul>
      </div>

      <div className="footer__copyrights-link flex-wrap">
        <Link href={"/"} className="text-gray-500">
          Privacy & Policy
        </Link>
        <Link href={"/"} className="text-gray-500">
          Terms & Condition
        </Link>
        <Link
          target="_blank"
          href={"https://iinbinkoswara.vercel.app"}
          className=" flex items-center text-center bg-green-800 text-white px-4 py-2 rounded-full hover:bg-green-600"
        >
          Iin bin Koswara @Vercel
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
