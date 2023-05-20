import React, { useState } from "react";
import styles from "../../styles/navbar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const [navbarCondition, setNavbarCondition] = useState(false);
  const count = useSelector((state) => state.product.value);
  return (
    <>
      <nav className={styles.navbar}>
        <div
          className={styles.logo}
          style={{
            backgroundImage: "url(/logo1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className={styles.navbar_menu}>
          <ul className={styles.navbar_ul}>
            <li className={styles.navbar_list}>
              <Link className={styles.navbar_link} href={"/"}>
                Home
              </Link>
            </li>
            <li className={styles.navbar_list}>
              <Link className={styles.navbar_link} href={"/about"}>
                About
              </Link>
            </li>
            <li className={styles.navbar_list}>
              <Link className={styles.navbar_link} href={"/products"}>
                Product
              </Link>
            </li>
            <li className={styles.navbar_list}>
              <Link className={styles.navbar_link} href={"/contact"}>
                Contact
              </Link>
            </li>
            <li className={styles.navbar_list}>
              <Link className={styles.navbar_link} href={"/profile"}>
                Profile
              </Link>
            </li>

            <li className={styles.navbar_list}>
              <Link
                className={`${styles.navbar_link}, ${styles.navbar_cart}`}
                href={"/cart"}
              >
                <BsCart2 className={styles.cart_icon} />

                <span className={styles.cart_count}>{count.length}</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.mobile_menu}>
          <div className={styles.hamburger_menu_box}>
            <div
              className={styles.hamburger_menu}
              onClick={() => setNavbarCondition(!navbarCondition)}
            >
              <div
                className={
                  navbarCondition
                    ? styles.hamburger_menu_firstLine1
                    : styles.hamburger_menu_firstLine
                }
              ></div>
              <div
                className={
                  navbarCondition
                    ? styles.hamburger_menu_secondLine2
                    : styles.hamburger_menu_secondLine
                }
              ></div>
              <div
                className={
                  navbarCondition
                    ? styles.hamburger_menu_thirdLine3
                    : styles.hamburger_menu_thirdLine
                }
              ></div>
            </div>
          </div>
          {/* {navbarCondition ? ( */}
          <div
            className={
              navbarCondition
                ? styles.mobile_navbar_menu1
                : styles.mobile_navbar_menu
            }
          >
            <ul className={styles.mobile_navbar_ul}>
              <li className={styles.mobile_navbar_list}>
                <Link className={styles.mobile_navbar_link} href={"/"}>
                  Home
                </Link>
              </li>
              <li className={styles.mobile_navbar_list}>
                <Link className={styles.mobile_navbar_link} href={"/about"}>
                  About
                </Link>
              </li>
              <li className={styles.mobile_navbar_list}>
                <Link className={styles.mobile_navbar_link} href={"/products"}>
                  Product
                </Link>
              </li>
              <li className={styles.mobile_navbar_list}>
                <Link className={styles.mobile_navbar_link} href={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className={styles.mobile_navbar_list}>
                <Link className={styles.mobile_navbar_link} href={"/profile"}>
                  Profile
                </Link>
              </li>

              <li className={styles.mobile_navbar_list}>
                <Link
                  className={`${styles.mobile_navbar_link}, ${styles.mobile_navbar_cart}`}
                  href={"/cart"}
                >
                  <BsCart2 className={styles.mobile_cart_icon} />

                  <span className={styles.mobile_cart_count}>
                    {count.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          {/* ) : null} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
