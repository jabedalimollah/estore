import React, { useEffect, useState } from "react";
import styles from "../../styles/navbar/navbar.module.css";
import { FaUserCircle } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarCondition, setNavbarCondition] = useState(false);
  const [auth, setAuth] = useState(null);
  const count = useSelector((state) => state.product.value);

  // const count = localStorage.getItem("items")
  //   ? JSON.parse(localStorage.getItem("items")).condition
  //     ? useSelector((state) => state.product.value)
  //     : 0
  //   : 0;
  // const login1 = JSON.parse(localStorage.getItem("items"));
  const login1 = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : false;
  useEffect(() => {
    // const login = JSON.parse(localStorage.getItem("items"));
    const login = localStorage.getItem("items");
    if (login) {
      const login2 = JSON.parse(localStorage.getItem("items"));
      setAuth(login2.condition);
    }
  }, []);
  return (
    <>
      <nav className={styles.navbar}>
        <div
          className={styles.logo}
          // style={{
          //   backgroundImage: "url(/logo1.png)",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          // }}
        >
          <span className={styles.store_text}> E </span> Store
        </div>
        <div className={styles.navbar_menu}>
          <ul className={styles.navbar_ul}>
            {/* <li className={styles.navbar_list}>
              <Link className={styles.navbar_link} to={"*"}>
                not
              </Link>
            </li> */}
            <li className={styles.navbar_list}>
              <NavLink className={styles.navbar_link} to={"/"}>
                Home
              </NavLink>
              {/* <Link className={styles.navbar_link} to={"/"}>
                Home
              </Link> */}
            </li>
            <li className={styles.navbar_list}>
              <NavLink className={styles.navbar_link} to={"/about"}>
                About
              </NavLink>
              {/* <Link className={styles.navbar_link} to={"/about"}>
                About
              </Link> */}
            </li>
            <li className={styles.navbar_list}>
              <NavLink className={styles.navbar_link} to={"/products"}>
                Product
              </NavLink>
            </li>
            <li className={styles.navbar_list}>
              <NavLink className={styles.navbar_link} to={"/contact"}>
                Contact
              </NavLink>
            </li>
            {login1.condition ? (
              <li className={styles.navbar_list}>
                <NavLink className={styles.navbar_link} to={"/profile"}>
                  Profile
                </NavLink>
              </li>
            ) : (
              <li className={styles.navbar_list}>
                <Link className={styles.navbar_link} to={"/login"}>
                  Login
                </Link>
              </li>
            )}

            <li className={styles.navbar_list}>
              <Link
                className={`${styles.navbar_link}, ${styles.navbar_cart}`}
                to={"/cart"}
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
                <NavLink
                  className={styles.mobile_navbar_link}
                  to={"/"}
                  onClick={() => setNavbarCondition(!navbarCondition)}
                >
                  Home
                </NavLink>
                {/* <Link className={styles.mobile_navbar_link} to={"/"}>
                  Home
                </Link> */}
              </li>
              <li className={styles.mobile_navbar_list}>
                <NavLink
                  className={styles.mobile_navbar_link}
                  to={"/about"}
                  onClick={() => setNavbarCondition(!navbarCondition)}
                >
                  About
                </NavLink>
                {/* <Link className={styles.mobile_navbar_link} to={"/about"}>
                  About
                </Link> */}
              </li>
              <li className={styles.mobile_navbar_list}>
                <NavLink
                  className={styles.mobile_navbar_link}
                  to={"/products"}
                  onClick={() => setNavbarCondition(!navbarCondition)}
                >
                  Product
                </NavLink>
                {/* <Link className={styles.mobile_navbar_link} to={"/products"}>
                  Product
                </Link> */}
              </li>
              <li className={styles.mobile_navbar_list}>
                <NavLink
                  className={styles.mobile_navbar_link}
                  to={"/contact"}
                  onClick={() => setNavbarCondition(!navbarCondition)}
                >
                  Contact
                </NavLink>
                {/* <Link className={styles.mobile_navbar_link} to={"/contact"}>
                  Contact
                </Link> */}
              </li>
              {login1.condition ? (
                <li className={styles.mobile_navbar_list}>
                  <NavLink
                    className={styles.mobile_navbar_link}
                    to={"/profile"}
                    onClick={() => setNavbarCondition(!navbarCondition)}
                  >
                    Profile
                  </NavLink>
                  {/* <Link className={styles.mobile_navbar_link} to={"/profile"}>
                    Profile
                  </Link> */}
                </li>
              ) : (
                <li className={styles.mobile_navbar_list}>
                  <NavLink
                    className={styles.mobile_navbar_link}
                    to={"/login"}
                    onClick={() => setNavbarCondition(!navbarCondition)}
                  >
                    Log in
                  </NavLink>
                  {/* <Link className={styles.mobile_navbar_link} to={"/login"}>
                    Log in
                  </Link> */}
                </li>
              )}

              <li className={styles.mobile_navbar_list}>
                <NavLink
                  className={`${styles.mobile_navbar_link}, ${styles.mobile_navbar_cart}`}
                  to={"/cart"}
                  onClick={() => setNavbarCondition(!navbarCondition)}
                >
                  <BsCart2 className={styles.mobile_cart_icon} />

                  <span className={styles.mobile_cart_count}>
                    {count.length}
                  </span>
                </NavLink>
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
