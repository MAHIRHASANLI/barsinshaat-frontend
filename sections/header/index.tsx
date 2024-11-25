"use client";
import NavLinkDesktop from "@/components/header/header/nav_link_desktop";
import NavLinkMobile from "@/components/header/header/nav_linnk_mobile";
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import barsLogo from "@/images/barsLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderSection: React.FC = () => {
  const defaultStil = {
    height: "85px",
    with: "100%",
    top: "0",
    background: "transparent",
    // backdropFilter: "blur(8px)",
    // WebkitBackdropFilter: "blur(8px)",
  };

  const stilHidden = {
    height: "85px",
    with: "100%",
    top: "-350px",
    background: "#fff",
    // backdropFilter: "blur(0px)",
    // WebkitBackdropFilter: "blur(0px)",
  };

  const stilVisible = {
    height: "85px",
    with: "100%",
    top: "0",
    background: "#fff",
    // backdropFilter: "blur(0px)",
    // WebkitBackdropFilter: "blur(0px)",
  };
  const [stil, setStil] = useState(defaultStil);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    //! Scroll olduqca stil deyismesi
    if (window.scrollY > 0 && window.scrollY < 200) setStil(stilHidden);
    else if (window.scrollY > 200) setStil(stilVisible);
    else setStil(defaultStil);
  }

  return (
    <header className={`${styles.header} fluid`} style={stil}>
      <div className={`${styles["top-header-area"]} container`}>
        <div className={styles["header-item"]}>
          <div className={styles.logo}>
            <Image
              src={barsLogo}
              alt="bars"
              sizes="(max-width: 768px) 100%"
              fill={true}
            />
          </div>

          <NavLinkDesktop />

          <div
            className={styles["menu-btn"]}
            onClick={() => setActive(!active)}
          >
            <button>{active ? "X" : <GiHamburgerMenu />}</button>
          </div>
        </div>

        <NavLinkMobile isActive={active} />

        {/* <div>
        </div> */}
      </div>
    </header>
  );
};

export default HeaderSection;
