import React, { useState } from "react";
import styles from "../../styles/login/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import { RiLockUnlockFill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import Lottie from "lottie-react";
import loginPic from "../../assets/loginPic.json";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [validationMessage, setValidationMessage] = useState(false);
  const [passwordHidden, setPasswordHidden] = useState(false);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    // const login = localStorage.getItem("items")
    //   ? JSON.parse(localStorage.getItem("items")).condition
    //   : false;
    // const logout = JSON.parse(localStorage.getItem("items"));
    const logout1 = localStorage.getItem("items");
    if (logout1) {
      let logout = JSON.parse(localStorage.getItem("items"));
      if (
        logout.email === formData.email &&
        logout.password === formData.password
      ) {
        let temp = {};
        temp = { ...logout };
        temp.condition = true;
        localStorage.setItem("items", JSON.stringify(temp));
        navigate("/");
        window.location.reload(true);
      } else {
        setValidationMessage(true);
      }
    } else {
      setValidationMessage(true);
    }
  };
  return (
    <>
      <div className={styles.main}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-5">
              <form
                className={styles.form_box}
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className={styles.login_title}>Log in</h3>
                <div className={styles.form_value_box}>
                  <label className={styles.form_data_wrapper}>
                    <span className={styles.icons_style}>
                      <GrMail />
                      {/* Email */}
                    </span>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      onChange={handleOnChange}
                      className={styles.input_box}
                    />
                  </label>{" "}
                  {validationMessage ? (
                    <span className={styles.invalid_user}>
                      Enter Valid User
                    </span>
                  ) : null}
                </div>
                <div className={styles.form_value_box}>
                  <label className={styles.form_data_wrapper}>
                    <span className={styles.icons_style}>
                      <RiLock2Fill />
                      {/* Password */}
                    </span>
                    <input
                      type={`${passwordHidden ? "text" : "password"}`}
                      name="password"
                      id="password"
                      placeholder="Enter Password"
                      onChange={handleOnChange}
                      className={styles.input_box}
                    />
                    {formData.password === "" ? null : passwordHidden ? (
                      <button
                        className={styles.password_hiden}
                        onClick={() => setPasswordHidden(false)}
                      >
                        <AiFillEye className={styles.eye_icon} />
                      </button>
                    ) : (
                      <button
                        className={styles.password_hiden}
                        onClick={() => setPasswordHidden(true)}
                      >
                        <AiFillEyeInvisible className={styles.eye_icon} />
                      </button>
                    )}
                  </label>
                  {validationMessage ? (
                    <span className={styles.invalid_user}>
                      Enter Valid User
                    </span>
                  ) : null}
                </div>
                <div className={styles.forget_password_box}>
                  <span>
                    <input type="checkbox" className={styles.checkbox_style} />{" "}
                    Remember me
                  </span>
                  <Link
                    to={"/forget_password"}
                    className={styles.forget_password}
                  >
                    Forget Password ?
                  </Link>
                </div>

                <button className={styles.login_btn} onClick={handleLogin}>
                  Log In
                </button>
                <div className={styles.or_div}>
                  <div className={styles.or_title}>OR</div>
                </div>
                <div className={styles.login_with_others}></div>
                <Link to="/signup" className={styles.sign_up_page}>
                  Create a New account
                </Link>
              </form>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className={styles.log_in_pic}>
                <Lottie
                  animationData={loginPic}
                  loop={true}
                  className={styles.login_lottie}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
