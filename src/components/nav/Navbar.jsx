import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import LogoDekstop from '../../assets/Logo.svg';
import LogoMobile from '../../assets/LogoSMK.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const closeMobile = () => {
    if (!click) {
      setClick(true);
    } else {
      setClick(false);
    }
  };

  return (
    <>
      <nav className="navbar px-4 py-2 bg-white shadow-lg fixed top-0 right-0 left-0 flex items-center z-50">
        <div className="container mx-auto px-4 ">
          <div className="navbar-box flex items-center justify-between gap-x-8">
            <div className="box">
              <img src={LogoMobile} alt="Logo" className="block md:hidden w-[40px] cursor-pointer" />
              <img src={LogoDekstop} alt="Logo Smk Strada" className="md:w-[234px] hidden md:block cursor-pointer" />
            </div>
            {/* LAPTOP */}
            <div className="box flex items-center justify-center transition-all duration-500 ease">
              <ul className="menu hidden lg:flex items-center justify-between text-center gap-x-8">
                <li className="hover:text-slate-400">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="" className="cursor-default">
                    Profile
                  </Link>
                </li>
                <li className="hover:text-slate-400">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <div>|</div>
                </li>
                <li className="hover:text-slate-400">
                  <Link to="/information">Information</Link>
                </li>
                <li className="hover:text-slate-400">
                  <Link to="#contact">Contact</Link>
                </li>
              </ul>
              <div className="box lg:hidden">
                <Hamburger onToggle={() => closeMobile()} direction="right" size={25} className="cursor-pointer" />
              </div>
            </div>
            {/* LAPTOP */}
          </div>
        </div>
        {/* Mobile */}
        <div className={`${click ? 'nav-block' : 'nav-hidden'} "navbar-mobile absolute h-auto w-full bg-transparent shadow-lg top-[65px] right-0 lg:hidden"`}>
          <ul className="flex flex-col items-center justify-center text-center transition-all ease delay-75 duration-400">
            <li className="block min-w-full ">
              <Link to="/" className="block py-4 pl-3 pr-4 w-full bg-white hover:bg-slate-200 cursor-pointer">
                Home
              </Link>
            </li>
            <li className="block min-w-full">
              <Link to="/" className="block py-4 pl-3 pr-4 w-full bg-white hover:bg-slate-200 cursor-default">
                Profile
              </Link>
            </li>
            <li className="block min-w-full ">
              <Link to="/gallery" className="block py-4 pl-3 pr-4 w-full bg-white hover:bg-slate-200 cursor-pointer">
                Gallery
              </Link>
            </li>
            <li className="block min-w-full ">
              <Link to="/information" className="block py-4 pl-3 pr-4 w-full bg-white hover:bg-slate-200 cursor-pointer">
                Information
              </Link>
            </li>
            <li className="block min-w-full ">
              <Link to="#contact" className="block py-4 pl-3 pr-4 w-full bg-white hover:bg-slate-200 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile */}
      </nav>
    </>
  );
};

export default Navbar;
