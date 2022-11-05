import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "locale/en";
import ja from "locale/ja";
import styles from "styles/components/Navbar.module.css";
import logoImage from "assets/navbar-logo.png";

// Variable "t" stand for "translation"
const Nav = () => {
  const [modal, setModal] = useState(false);
  const { pathname, locale, push } = useRouter();
  const t = locale === "en" ? en : ja;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    push("/", "/", { locale });
  };

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <nav className="backdrop-blur-sm w-full md:py-4 p-2 md:px-8 fixed z-50 rounded-b-sm shadow">
      <div className="flex justify-between max-w-7xl m-auto">
        <div
          id="navbar-open-button"
          className="md:hidden my-auto fixed cursor-pointer hover:text-dark-gray transition-colors top-5 text-gray"
          onClick={toggleModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="m-auto md:m-0">
          <Image
            src={logoImage}
            width={60}
            height={60}
            alt="Kesek Automation Small Logo"
          />
        </div>
        <div
          id="navbar-modal"
          className={`md:my-auto w-full h-screen md:h-auto md:w-auto right-0 md:right-auto md:top-auto top-0 backdrop-blur md:backdrop-blur-none  md:block ${
            modal ? "fixed" : "hidden"
          }`}
        >
          <div
            id="navbar-close-button"
            className={`md:hidden my-auto fixed cursor-pointer hover:text-dark-gray transition-colors top-5 right-5 text-gray`}
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex md:flex-row flex-col text-center md:gap-2 gap-8 max-w-xl m-auto mt-28 md:mt-auto p-3 md:p-0">
            {t.nav.map((navEl) => (
              <li
                className={`text-gray font-medium py-5 md:py-4 px-3 text-shadow-sm transition-colors hover:text-dark text-3xl md:text-base  ${
                  navEl.slug === pathname && styles.activePage
                }`}
                key={navEl.slug}
              >
                <Link href={navEl.slug}>{navEl.text}</Link>
              </li>
            ))}
            <select
              onChange={changeLanguage}
              defaultValue={locale}
              className="text-shadow-sm hover:text-dark text-lg text-dark-gray bg-transparent font-medium w-12 m-auto md:w-auto md:ml-8"
            >
              <option value="en">EN</option>
              <option value="ja">JA</option>
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
