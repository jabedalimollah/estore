import React, { useState } from "react";
import styles from "../../styles/forgetPassword/fogetPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
const ForgetPassword = () => {
  const [email, setEmail] = useState(null);
  const [forgotPasswordCondition, setForgotPasswordCondition] = useState(false);
  const [passwordVisibleCondition, setPasswordVisibleCondition] =
    useState(false);
  const [newPassword, setNewPassword] = useState({
    password: "",
    cpassword: "",
  });
  const [cpasswordVisibleCondition, setCpasswordVisibleCondition] =
    useState(false);
  const [cpasswordCondition, setCpasswordCondition] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);
  const [emailInvalid, setEamilValid] = useState(false);
  const [resetPasswordcondition, setResetPasswordCondition] = useState(false);
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const login = localStorage.getItem("items");
    if (login) {
      const login1 = JSON.parse(localStorage.getItem("items"));
      if (login1.email === email) {
        setForgotPasswordCondition(true);
        setResetPasswordCondition(true);
      } else {
        setEamilValid(true);
      }
    } else {
      setEamilValid(true);
    }
  };
  const handlePasswordChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };
  const handleResetPasswordBtn = (e) => {
    e.preventDefault();
    if (!(newPassword.password.length >= 8)) {
      setPasswordCondition(true);
    } else if (newPassword.password === newPassword.cpassword) {
      let logout = JSON.parse(localStorage.getItem("items"));
      let temp = {};
      temp = { ...logout };
      temp.password = newPassword.password;
      temp.cpassword = newPassword.cpassword;
      localStorage.setItem("items", JSON.stringify(temp));
      // setCpasswordCondition(false);
      navigate("/");
    } else {
      setCpasswordCondition(true);
    }
    //   if (
    //     newPassword.password.length >= 8 &&
    //     newPassword.password === allData.cpassword
    //   ) {
    //     localStorage.setItem("items", JSON.stringify(allData));

    //     window.location.reload(true);
    //   }
  };
  return (
    <>
      {resetPasswordcondition ? (
        <div className={styles.reset_box}>
          <div className={styles.reset_div}>
            <h4 className={styles.reset_password_title}>Reset Password</h4>
            <form
              className={styles.reset_password_form}
              onSubmit={(e) => e.preventDefault()}
            >
              <label className={styles.input_div}>
                <span>
                  Password<span className={styles.require_start}>*</span>
                </span>

                <span className={styles.password_div}>
                  <input
                    // type="password"
                    type={`${passwordVisibleCondition ? "text" : "password"}`}
                    placeholder="Enter New Password"
                    name="password"
                    className={styles.password_box}
                    onChange={handlePasswordChange}
                  />
                  {passwordVisibleCondition ? (
                    <button
                      className={styles.visible_btn}
                      onClick={() => setPasswordVisibleCondition(false)}
                    >
                      <AiFillEye className={styles.eye_icon} />
                    </button>
                  ) : (
                    <button
                      className={styles.visible_btn}
                      onClick={() => setPasswordVisibleCondition(true)}
                    >
                      <AiFillEyeInvisible className={styles.eye_icon} />
                    </button>
                  )}
                </span>
                {passwordCondition ? (
                  <span className={styles.password_warning}>
                    Enter mininum 8 character
                  </span>
                ) : null}
              </label>
              <label className={styles.input_div}>
                <span>
                  Confirm Password
                  <span className={styles.require_start}>*</span>
                </span>
                <span className={styles.password_div}>
                  <input
                    // type="password"
                    type={`${cpasswordVisibleCondition ? "text" : "password"}`}
                    placeholder="Enter Confirm Password"
                    name="cpassword"
                    className={styles.password_box}
                    onChange={handlePasswordChange}
                  />
                  {cpasswordVisibleCondition ? (
                    <button
                      className={styles.visible_btn}
                      onClick={() => setCpasswordVisibleCondition(false)}
                    >
                      <AiFillEye className={styles.eye_icon} />
                    </button>
                  ) : (
                    <button
                      className={styles.visible_btn}
                      onClick={() => setCpasswordVisibleCondition(true)}
                    >
                      <AiFillEyeInvisible className={styles.eye_icon} />
                    </button>
                  )}
                </span>
                {cpasswordCondition ? (
                  <span className={styles.password_warning}>
                    Enter same password
                  </span>
                ) : null}
              </label>
              <button
                className={styles.forgot_password_btn}
                onClick={handleResetPasswordBtn}
                //   onClick={handleForgotPassword}
              >
                Reset Password
              </button>
              <button
                className={styles.reset_back_btn}
                onClick={() => setResetPasswordCondition(false)}
              >
                <BiArrowBack className={styles.back_arrow} /> Back
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <div className={styles.main}>
        <div className={styles.forgetPassword_box}>
          <h4 className={styles.forgot_title}>Forgot Password</h4>
          <form
            className={styles.form_box}
            onSubmit={(e) => e.preventDefault()}
          >
            <label className={styles.email_title}>
              Email<span className={styles.require_start}>*</span>{" "}
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={handleEmailChange}
              className={styles.input_box}
            />
            {emailInvalid ? (
              <span className={styles.invaild_message}>Invalid Email</span>
            ) : null}

            <button
              className={styles.forgot_password_btn}
              onClick={handleForgotPassword}
            >
              Forgot Password
            </button>
            <Link to={"/"} className={styles.back_btn}>
              <BiArrowBack className={styles.back_arrow} /> Back
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
