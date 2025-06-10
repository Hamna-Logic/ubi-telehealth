import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaLocationArrow,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-blue-100 dark:bg-gray-950">
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
              UBI TeleHealth
            </h1>
            <p className="">
              At UBI Telehealth, we are deeply committed to empowering you on your health journey. 

With state-of-the-art wellness products, unparalleled customer satisfaction, and an unwavering passion for your well-being, our exceptional team of physicians is ready to deliver personalized healthcare, the way it should be. {" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>
                UBI Telehealth: 11215 Metro Parkway Building 3 Suite 100 Fort Myers, FL 33966
                <br />
                The Pharmacy Hub: 15600 NW 15th Ave Suite C Miami Gardens, Florida 33169
              </p>
            </div>

            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#https://www.instagram.com/ubi_telehealth/">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#https://www.facebook.com/p/UBI-Telehealth-61555751747121/">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#https://www.linkedin.com/company/ubitelehealth/">
                <FaLinkedin className="text-3xl" />
              </a>
              <a href="#https://www.tiktok.com/@ubitelehealth?_t=8oWdW5YT5bC&_r=1">
                <FaTiktok className="text-3xl" />
              </a>
              <a href="#https://www.youtube.com/channel/UCDd2p5VYCqQMfm69NPel0bQ?app=desktop">
                <FaYoutube className="text-3xl" />
              </a>
              <a href="#https://www.pinterest.com/ubitelehealth/">
                <FaPinterest className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Customer Support</li>
                  <li className="cursor-pointer">Contact Us</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Why UBI</li>
                  <li className="cursor-pointer">Become An Ambassador</li>
                  <li className="cursor-pointer">Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Solutions</li>
                  <li className="cursor-pointer">Terms and Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            Copyright 2025 UBI Telehealth.
All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
