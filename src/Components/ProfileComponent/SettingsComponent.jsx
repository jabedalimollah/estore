import React, { useState } from "react";
import styles from "../../styles/profile/SettingsComponent.module.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const SettingsComponent = ({ settingBack }) => {
  const [emailChangeCondition, setEmailChangeCondition] = useState(false);
  const [passwordChangeCondition, setPasswordChangeCondition] = useState(false);
  const handleEmailBackCondition = () => {
    setEmailChangeCondition(false);
  };
  const handlePasswordBackCondition = () => {
    setPasswordChangeCondition(false);
  };
  return (
    <>
      {emailChangeCondition ? (
        <ChangeEmailComponent
          handleEmailBackCondition={handleEmailBackCondition}
        />
      ) : null}
      {passwordChangeCondition ? (
        <ChangePasswordComponent
          handlePasswordBackCondition={handlePasswordBackCondition}
        />
      ) : null}
      <div className={styles.main}>
        <div className={styles.submain}>
          <div className={styles.setting_box}>
            <h4 className={styles.setting_title}>Settings</h4>
            <button
              className={styles.change_email}
              onClick={() => setEmailChangeCondition(true)}
            >
              Change Email Address
            </button>
            <button
              className={styles.change_password}
              onClick={() => setPasswordChangeCondition(true)}
            >
              Change Password
            </button>
            <button className={styles.back_btn} onClick={() => settingBack()}>
              <BiArrowBack /> Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const ChangeEmailComponent = ({ handleEmailBackCondition }) => {
  const [passwordShowHide, setPasswordShowHide] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [changeEmailCondition, setChangeEmailcondition] = useState(false);
  const [passwordWarning, setPasswordWarning] = useState(false);
  const handlePassword = (e) => {
    setPasswordInput(e.target.value);
  };
  const handleNextBtn = (e) => {
    e.preventDefault();
    let login = localStorage.getItem("items");
    if (login) {
      let login1 = JSON.parse(localStorage.getItem("items"));

      if (login1.password === passwordInput) {
        // console.log(login1.password);
        setChangeEmailcondition(true);
        setPasswordWarning(false);
      } else {
        setPasswordWarning(true);
      }
    } else {
      setPasswordWarning(true);
    }
  };
  const handleEamilBack = () => {
    setChangeEmailcondition(false);
  };
  return (
    <>
      {changeEmailCondition ? (
        <EamilChangeComponent
          handleEamilBack={handleEamilBack}
          handleEmailBackCondition={handleEmailBackCondition}
        />
      ) : null}
      <div className={styles.email_change_box}>
        <div className={styles.email_change_div}>
          <form
            className={styles.email_form}
            onSubmit={(e) => e.preventDefault()}
          >
            <h4 className={styles.change_email_title}>Change Email Address</h4>
            <label className={styles.password_text}>
              Password
              <span style={{ color: "red" }}>*</span>
            </label>
            <div className={styles.input_div}>
              <input
                // type="password"
                type={`${passwordShowHide ? "text" : "password"}`}
                name="password"
                placeholder="Enter Password"
                className={styles.password_input_box}
                onChange={handlePassword}
              />
              {passwordShowHide ? (
                <button
                  className={styles.password_hide}
                  onClick={() => setPasswordShowHide(false)}
                >
                  <AiFillEye />{" "}
                </button>
              ) : (
                <button
                  className={styles.password_hide}
                  onClick={() => setPasswordShowHide(true)}
                >
                  <AiFillEyeInvisible />
                </button>
              )}
            </div>
            {passwordWarning ? (
              <span className={styles.password_warning_style}>
                Incorrect Password
              </span>
            ) : null}

            <Link
              to={"/forget_password"}
              className={styles.fonget_password_style}
            >
              Forget Password ?
            </Link>
            <div className={styles.button_group_div}>
              <button
                className={styles.email_change_back_btn}
                onClick={() => handleEmailBackCondition()}
              >
                Back
              </button>
              <button
                className={styles.email_change_next_btn}
                onClick={handleNextBtn}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const EamilChangeComponent = ({
  handleEamilBack,
  handleEmailBackCondition,
}) => {
  const [emailChange, setEmailChange] = useState("");
  const [emailValidCondition, setEmailValidCondition] = useState(false);
  const navigate = useNavigate();
  const handleEmailChangeInput = (e) => {
    setEmailChange(e.target.value);
  };
  const handleUpdateBtn = (e) => {
    e.preventDefault();
    let filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(emailChange)) {
      // Yay! valid
      // return true;
      let login = JSON.parse(localStorage.getItem("items"));
      let temp = {};
      temp = { ...login };
      temp.email = emailChange;
      localStorage.setItem("items", JSON.stringify(temp));
      handleEamilBack();
      handleEmailBackCondition();
      setEmailValidCondition(false);
      navigate("/");
    } else {
      // return false;
      setEmailValidCondition(true);
    }
  };
  return (
    <>
      <div className={styles.email_change_component}>
        <div className={styles.email_change_component_box}>
          <form
            className={styles.email_form_box}
            onSubmit={(e) => e.preventDefault()}
          >
            <h4 className={styles.update_email_title}>Update Email</h4>
            <div className={styles.email_div}>
              <label>New Email</label>
              <input
                type="email"
                placeholder="Enter New Email"
                name="email"
                className={styles.email_input}
                onChange={handleEmailChangeInput}
              />
              {emailValidCondition ? (
                <span className={styles.email_valid_warning}>
                  Enter Valid Email Address
                </span>
              ) : null}
            </div>
            <button
              className={styles.update_btn_style}
              onClick={handleUpdateBtn}
            >
              Update
            </button>
            <button
              className={styles.cancel_btn_style}
              onClick={() => handleEamilBack()}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
const ChangePasswordComponent = ({ handlePasswordBackCondition }) => {
  const [currentVisibleCondition, setCurrentVisibleCondition] = useState(false);
  const [newVisibleCondition, setNewVisibleCondition] = useState(false);
  const [confirmVisibleCondition, setConfirmVisibleCondition] = useState(false);
  const [passwordData, setPasswordData] = useState({
    current_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [currentPasswordWarning, setCurrentPasswordWarning] = useState(false);
  const [newPasswordWarning, setNewPasswordWarning] = useState(false);
  const [confirmPasswordWarning, setConfirmPasswordWarning] = useState(false);
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };
  const handleSaveBtn = (e) => {
    e.preventDefault();
    let login = localStorage.getItem("items");
    if (login) {
      let login1 = JSON.parse(localStorage.getItem("items"));
      if (login1.password === passwordData.current_password) {
        setCurrentPasswordWarning(false);
        if (passwordData.new_password.length >= 8) {
          setNewPasswordWarning(false);
          if (passwordData.confirm_password === passwordData.new_password) {
            let temp = {};
            temp = { ...login1 };
            temp.password = passwordData.new_password;
            temp.cpassword = passwordData.confirm_password;
            localStorage.setItem("items", JSON.stringify(temp));
            handlePasswordBackCondition();
            navigate("/");
          } else {
            setConfirmPasswordWarning(true);
          }
        } else {
          setNewPasswordWarning(true);
          setConfirmPasswordWarning(true);
        }
      } else {
        setCurrentPasswordWarning(true);
      }
    } else {
      setCurrentPasswordWarning(true);
    }
  };
  return (
    <>
      <div className={styles.change_password_component}>
        <div className={styles.password_change_box}>
          <form
            className={styles.change_password_form}
            onSubmit={(e) => e.preventDefault()}
          >
            <h4 className={styles.change_password_title}>Change Password</h4>
            <label className={styles.passowrd_input_div}>
              <span>
                Current Password<span className={styles.require_start}>*</span>
              </span>

              <span className={styles.change_password_div}>
                <input
                  // type="password"
                  type={`${currentVisibleCondition ? "text" : "password"}`}
                  placeholder="Enter Current Password"
                  name="current_password"
                  className={styles.password_box}
                  onChange={handlePasswordChange}
                />
                {currentVisibleCondition ? (
                  <button
                    className={styles.visible_btn}
                    onClick={() => setCurrentVisibleCondition(false)}
                  >
                    <AiFillEye className={styles.eye_icon} />
                  </button>
                ) : (
                  <button
                    className={styles.visible_btn}
                    onClick={() => setCurrentVisibleCondition(true)}
                  >
                    <AiFillEyeInvisible className={styles.eye_icon} />
                  </button>
                )}
              </span>
              {currentPasswordWarning ? (
                <span className={styles.password_warning}>
                  Password Incorrect
                </span>
              ) : null}
            </label>
            <label className={styles.passowrd_input_div}>
              <span>
                New Password<span className={styles.require_start}>*</span>
              </span>

              <span className={styles.change_password_div}>
                <input
                  // type="password"
                  type={`${newVisibleCondition ? "text" : "password"}`}
                  placeholder="Enter New Password"
                  name="new_password"
                  className={styles.password_box}
                  onChange={handlePasswordChange}
                />
                {newVisibleCondition ? (
                  <button
                    className={styles.visible_btn}
                    onClick={() => setNewVisibleCondition(false)}
                  >
                    <AiFillEye className={styles.eye_icon} />
                  </button>
                ) : (
                  <button
                    className={styles.visible_btn}
                    onClick={() => setNewVisibleCondition(true)}
                  >
                    <AiFillEyeInvisible className={styles.eye_icon} />
                  </button>
                )}
              </span>
              {newPasswordWarning ? (
                <span className={styles.password_warning}>
                  Enter mininum 8 character
                </span>
              ) : null}
            </label>
            <label className={styles.passowrd_input_div}>
              <span>
                Confirm Password<span className={styles.require_start}>*</span>
              </span>

              <span className={styles.change_password_div}>
                <input
                  // type="password"
                  type={`${confirmVisibleCondition ? "text" : "password"}`}
                  placeholder="Enter Confirm Password"
                  name="confirm_password"
                  className={styles.password_box}
                  onChange={handlePasswordChange}
                />
                {confirmVisibleCondition ? (
                  <button
                    className={styles.visible_btn}
                    onClick={() => setConfirmVisibleCondition(false)}
                  >
                    <AiFillEye className={styles.eye_icon} />
                  </button>
                ) : (
                  <button
                    className={styles.visible_btn}
                    onClick={() => setConfirmVisibleCondition(true)}
                  >
                    <AiFillEyeInvisible className={styles.eye_icon} />
                  </button>
                )}
              </span>
              {confirmPasswordWarning ? (
                <span className={styles.password_warning}>
                  Enter Same Password
                </span>
              ) : null}
            </label>
            <div className={styles.button_group_div}>
              <button
                className={styles.email_change_back_btn}
                onClick={() => handlePasswordBackCondition(false)}
              >
                Back
              </button>
              <button
                className={styles.email_change_back_btn}
                onClick={handleSaveBtn}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SettingsComponent;
