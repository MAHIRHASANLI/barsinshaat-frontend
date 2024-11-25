import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

type Props = {
  isActive: boolean;
};

const NavLinkMobile: React.FC<Props> = ({ isActive }) => {
  return (
    <div
      className={styles["nav-mobile"]}
      style={{ minHeight: isActive ? "300px" : "0" }}
    >
      <div className={styles["mob-links"]}>
        <Link href="">Ana Səhifə</Link>
        <Link href="">Haqqımızda</Link>
        <Link href="">Tərəfdaşlar</Link>
        <Link href="">Məhsullar</Link>
        <Link href="">Əlaqə</Link>
      </div>
    </div>
  );
};

export default NavLinkMobile;
