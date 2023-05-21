import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-8 px-4 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <img className="w-40 h-40"  src={logo} alt="" />
          <p className="text-gray-400 text-sm leading-loose">
            ACME Industries Ltd.
          </p>
          <p className="text-gray-400 text-sm leading-loose">
            Providing reliable tech since 2023
          </p>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Latest Update</h2>
          <ul className="text-gray-400 text-sm leading-loose">
            <li>
              <Link to="">Public API</Link>
            </li>
            <li>
              <Link to="">Documentation</Link>
            </li>
            <li>
              <Link to="">Guides</Link>
            </li>
            <li>
              <a href="#" className="hover:text-gray-100 transition-colors">
                Toys
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-lg font-medium mb-4">Contact Us</h2>
          <p className="text-gray-400 text-sm leading-loose">
            123 Main St.
            <br />
            Anytown, USA 123457
            <br />
            (123) 456-7890
            <br />
            toys@gamil.com
          </p>
        </div>
        <div className="col-span-1  md:justify-end">
          <h2 className="text-white text-lg font-medium mb-4">
            Follow Us Our Team
          </h2>{" "}
          <br />
          <ul className="flex space-x-4 ">
            <li>
              <a
                href="#"
                className="text-blue-500 hover:text-white transition-colors"
              >
                <FaFacebook className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-red-400 hover:text-white transition-colors"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="text-3xl" />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-yellow-400 hover:text-white transition-colors"
              >
                <FaSnapchat className="text-3xl" />
              </a>
            </li>
          </ul>
          <input
            className="mt-3 py-2 pl-2"
            type="email"
            name="email"
            id=""
            placeholder="Enter Your Email"
          />
          <br />
          <input
            className="bg-red-500 py-3 text-white px-4 text-2xl mt-3"
            type="submit"
            value="Submit"
          />
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400 text-sm text-center">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
