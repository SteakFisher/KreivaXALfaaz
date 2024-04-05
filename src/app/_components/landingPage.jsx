import React from "react";
import "./topNav.css";

export default function LandingPage() {
  return (
    <>
      <header id="header">
        <div
          className="nav mix-blend-normal fixed w-1920"
        >
          <img className="navBack object-left w-full object-cover h-auto" src="NavbarReel.png" />
          <div className="navMenu flex justify-start absolute -rotate-3 -mt-10" style={{}}>
            <ul className="navMenuList ml-162 -mt-30 -translate-y-90">
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Gallery
              </a>
              <a href="fas" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                About
              </a>
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Sponsor
              </a>
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Loda
              </a>
              <a href="fa" className="navMenuButton navMenuButton text-white no-underline duration-300 text-lg px-52">
                Lassun
              </a>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}