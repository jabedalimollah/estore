import React, { useState } from "react";
import styles from "../../styles/signup/signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { RiLock2Fill } from "react-icons/ri";
import { RiLockUnlockFill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { RiPhoneFill } from "react-icons/ri";
import Lottie from "lottie-react";
import signupPic from "../../assets/signupPic.json";
const SignUp = () => {
  const [allData, setAllData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    condition: true,
    dob: "0000-00-00",
    gender: "",
    address: "Empty",
    profile_pic:
      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png",
    mobile: "",
  });
  const [passwordHidden, setPasswordHidden] = useState(false);
  const [cpasswordHidden, setCpasswordHidden] = useState(false);
  const [passwordCondition, setPasswordCondition] = useState(false);
  const [cpasswordCondition, setCpasswordCondition] = useState(false);
  const [emailCondition, setEmailCondition] = useState(false);
  const [emailExit, setEmailExit] = useState(false);
  const [genderCondition, setGenderCondition] = useState(true);
  const [nameCondition, setNameCondition] = useState(true);
  const [numberCondition, setNumberCondition] = useState(true);
  const [dobCondition, setDobCondition] = useState(true);
  const navigate = useNavigate();

  const handleOnChage = (e) => {
    setAllData({ ...allData, [e.target.name]: e.target.value });
  };
  const handleSignUpBtn = (e) => {
    e.preventDefault();
    // let logout = localStorage.getItem("items");
    // let logout = JSON.parse(localStorage.getItem("items"));
    // item = JSON.parse(localStorage.getItem("items"));
    // localStorage.setItem("items", JSON.stringify(z));

    if ("0000-00-00" === allData.dob) {
      // console.log("dfdf");
      setDobCondition(false);
    } else {
      setDobCondition(true);
    }
    // console.log(allData.dob);

    const validateNumberField = (myNumber) => {
      const numberRegEx = /\-?\d*\.?\d{1,2}/;
      return numberRegEx.test(String(myNumber).toLowerCase());
    };
    setNumberCondition(validateNumberField(allData.mobile));

    // console.log(validateNumberField(allData.mobile));

    const removeExtraSpace = (s) => s.trim().split(/ +/).join(" ");
    let nameValue = removeExtraSpace(allData.name);
    if (nameValue === "") {
      setNameCondition(false);
    } else {
      setNameCondition(true);
      let temp = {};
      temp = { ...allData };
      temp.name = nameValue;
      setAllData(temp);
      // console.log(nameValue);
    }
    let gender = allData.gender;
    if (gender === "") {
      setGenderCondition(false);
    } else {
      setGenderCondition(true);
    }
    let filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(allData.email)) {
      // Yay! valid
      // return true;
      setEmailCondition(false);
    } else {
      // return false;
      setEmailCondition(true);
    }
    // ==============================================

    if (!(allData.password.length >= 8)) {
      setPasswordCondition(true);
    } else {
      setPasswordCondition(false);
    }

    if (!(allData.password === allData.cpassword)) {
      setCpasswordCondition(true);
    } else {
      setCpasswordCondition(false);
    }

    let logout = localStorage.getItem("items");
    // let logout = JSON.parse(localStorage.getItem("items"));
    if (
      allData.password.length >= 8 &&
      allData.password === allData.cpassword &&
      // filter.test(allData.email)
      logout &&
      genderCondition &&
      nameCondition &&
      numberCondition &&
      dobCondition
    ) {
      let temp = JSON.parse(localStorage.getItem("items"));
      if (temp.email == allData.email) {
        // console.log(true);
        setEmailExit(true);
      } else if (
        allData.password.length >= 8 &&
        allData.password === allData.cpassword &&
        filter.test(allData.email) &&
        genderCondition &&
        nameCondition &&
        numberCondition &&
        dobCondition
      ) {
        localStorage.setItem("items", JSON.stringify(allData));
        navigate("/");
        window.location.reload(true);
        setEmailExit(false);
      }
    } else if (
      allData.password.length >= 8 &&
      allData.password === allData.cpassword &&
      filter.test(allData.email) &&
      genderCondition &&
      nameCondition &&
      numberCondition &&
      dobCondition
    ) {
      localStorage.setItem("items", JSON.stringify(allData));
      navigate("/");
      window.location.reload(true);
    }
    // else {
    //   setPasswordCondition(true);
    //   setCpasswordCondition(true);
    // }
  };
  return (
    <>
      <div className={styles.main}>
        <div className="container ">
          <div className="row mx-lg-5 d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-5">
              <form
                className={styles.form_box}
                onSubmit={(e) => e.preventDefault()}
              >
                <h3 className={styles.login_title}>Sign Up</h3>
                <div className={styles.form_value_box}>
                  <label className={styles.form_data_wrapper}>
                    <span className={styles.icons_style}>
                      <FaUserAlt />
                      {/* Email */}
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={allData.name}
                      onChange={handleOnChage}
                      placeholder="Enter Full Name"
                      className={styles.input_box}
                    />
                  </label>{" "}
                  {nameCondition ? null : (
                    <span className={styles.invalid_user}>
                      Enter The Full Name
                    </span>
                  )}
                </div>
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
                      value={allData.email}
                      onChange={handleOnChage}
                      placeholder="Enter Email"
                      className={styles.input_box}
                    />
                  </label>{" "}
                  {emailExit ? (
                    <span className={styles.invalid_user}>
                      Email Already Exit
                    </span>
                  ) : null}
                  {emailCondition ? (
                    <span className={styles.invalid_user}>
                      Enter Valid Email Address
                    </span>
                  ) : null}
                </div>
                <div className={styles.form_value_box}>
                  <label className={styles.form_data_wrapper}>
                    <span className={styles.icons_style}>
                      <RiPhoneFill />
                      {/* Email */}
                    </span>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={allData.mobile}
                      onChange={handleOnChage}
                      placeholder="Enter Phone Number"
                      className={styles.input_box}
                    />
                  </label>{" "}
                  {numberCondition ? null : (
                    <span className={styles.invalid_user}>
                      Enter Valid Phone Number
                    </span>
                  )}
                </div>
                <div className={styles.form_value_box}>
                  <label className={styles.form_data_wrapper}>
                    <div className={styles.dob_box}>
                      {/* <GrMail /> */}
                      <span className={styles.dob_title}>Date Of Birth</span>
                      <div className={styles.dob_style}>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          // value={data.dob}
                          onChange={handleOnChage}
                          className={styles.date_input}
                        />
                      </div>
                    </div>
                  </label>{" "}
                  {dobCondition ? null : (
                    <span className={styles.invalid_user}>
                      Enter Date of Birth
                    </span>
                  )}
                </div>
                <div className={styles.form_value_box}>
                  <label className={styles.form_data_wrapper}>
                    <div className={styles.icons_style}>
                      {/* <FaUserAlt /> */}
                      <span className={styles.gender_style}>Gender</span>{" "}
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="male"
                          id="male"
                          onChange={handleOnChage}
                          name="gender"
                          // checked={data.gender === "male" ? true : false}
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="female"
                          id="female"
                          // checked={data.gender === "female" ? true : false}
                          onChange={handleOnChage}
                          name="gender"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                    </div>
                  </label>{" "}
                  {genderCondition ? null : (
                    <span className={styles.invalid_user}>Enter Gender</span>
                  )}
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
                      onChange={handleOnChage}
                      placeholder="Enter Password"
                      className={styles.input_box}
                    />
                    {allData.password === "" ? null : passwordHidden ? (
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
                  {passwordCondition ? (
                    <span className={styles.invalid_user}>
                      Enter minimum 8 charecter
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
                      type={`${cpasswordHidden ? "text" : "password"}`}
                      name="cpassword"
                      id="cpassword"
                      onChange={handleOnChage}
                      placeholder="Enter Confirm Password"
                      className={styles.input_box}
                    />
                    {allData.cpassword === "" ? null : cpasswordHidden ? (
                      <button
                        className={styles.password_hiden}
                        onClick={() => setCpasswordHidden(false)}
                      >
                        <AiFillEye className={styles.eye_icon} />
                      </button>
                    ) : (
                      <button
                        className={styles.password_hiden}
                        onClick={() => setCpasswordHidden(true)}
                      >
                        <AiFillEyeInvisible className={styles.eye_icon} />
                      </button>
                    )}
                  </label>
                  {cpasswordCondition ? (
                    <span className={styles.invalid_user}>
                      Enter same password
                    </span>
                  ) : null}
                </div>
                {/* <div className={styles.forget_password_box}>
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
                </div> */}

                <button className={styles.login_btn} onClick={handleSignUpBtn}>
                  Sign Up
                </button>
                <div className={styles.or_div}>
                  <div className={styles.or_title}>OR</div>
                </div>
                <div className={styles.login_with_others}></div>
                <Link to="/login" className={styles.sign_up_page}>
                  {/* Create a New account */}
                  Already have an account ? Sign in
                </Link>
              </form>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className={styles.log_in_pic}>
                <Lottie
                  animationData={signupPic}
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

export default SignUp;
