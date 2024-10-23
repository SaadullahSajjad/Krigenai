import logo from "../../images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <ul className="flex flex-col justify-start mx-4 gap-16 sm:flex-row sm:justify-center sm:items-center sm:mx-0 sm:gap-36">
        <li>
          <Link href="/">
            <Image
              src={logo}
              alt="Picture of the KRIGEN LOGO"
              width={250}
              height={150}
              quality={100}
              priority
              sizes={"100vw"}
            />
          </Link>
        </li>
        <li>
          <ul className="flex flex-col justify-start items-start text-gray-600 gap-4 text-sm sm:flex-row sm:justify-center sm:items-center sm:text-base">
            <li>
              <span> © 2024 - Powered by KRIGEN.AI</span>
            </li>
            <li>
              <ul className="flex justify-center items-center gap-0 sm:gap-2">
                <li className="hover:text-blue-500">
                  <Link href="https://terms-and-conditions.krigen.ai/terms-and-conditions" target="_blank">Terms & Conditions</Link>
                </li>
                <li>/</li>
                <li className="hover:text-blue-500">
                  <Link href="https://privacy-policy.krigen.ai/privacy-policy" target="_blank">Privacy Policy</Link>
                </li>
                <li>/</li>
                <li className="hover:text-blue-500">
                  <Link href="https://krigen.ai/strategy-session" target="_blank">Contact Us</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
