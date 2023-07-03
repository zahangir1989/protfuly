
import Container from "../../Shared/Container";
// import { useState } from "react";

const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  // const closeMenu = () => setClick(false);
  const mainOptions = (
    <>
      <li>
        <a className="hover:text-[#10AFAF]" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-[#10AFAF]" href="#About" data-text="About">
          About{" "}
        </a>
      </li>
      <li>
        <a className="hover:text-[#10AFAF]" to="/classes" data-text="Reviews">
          Reviews
        </a>
      </li>
      <li>
        <a className="hover:text-[#10AFAF]" href="#Project">
          Projects
        </a>
      </li>
      <li>
        <a className="hover:text-[#10AFAF]">
          Faq
        </a>
      </li>
    </>
  );
  return (
    <>
      <Container>
        <div className="navbar justify-between border-b border-[#29303B] text-white hover:text-[#ffff]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0D121D] rounded-box w-52 hover:text-[#ffff]"
              >
                {mainOptions}
              </ul>
            </div>
            <div className="navbar-center hidden lg:flex hover:text-[#ffff]">
              {" "}
              <ul className="menu menu-horizontal px-1 hover:text-[#ffff]">
                {mainOptions}
              </ul>
            </div>
          </div>{" "}
          <a className="btn btn-ghost normal-case text-xl" href="#Contact">Contact Us</a>
          {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
        </div>
      </Container>
    </>
  );
};

export default Navbar;