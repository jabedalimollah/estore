import React, { useEffect, useState } from "react";
import styles from "../../styles/profile/profile.module.css";
import { BsFillCameraFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import SettingsComponent from "../../Components/ProfileComponent/SettingsComponent";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [allData, setAllData] = useState({});
  const [editCondition, setEditCondition] = useState(false);
  const [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
    mobile: "",
    profile_pic: "",
  });
  const [profilePic, setProfilePic] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [imageCondition, setImageCondition] = useState(false);
  const [viewImageCondition, setViewImageCondition] = useState(false);
  const [logoutCondition, setLogoutCondition] = useState(false);
  const [deleteCondition, setDeleteCondition] = useState(false);
  const [settingCondition, setSettingCondition] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    setAllData({ ...items });
    setData({ ...items });
    // setDateOfBirth({ ...items.dob });
    ReverseString(items);
    setProfilePic(
      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
    );
  }, []);
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    // if (e.target.name === "dob") {
    //   let temp = ReverseString(e.target.value);
    //   setData({ ...data, [e.target.name]: temp });
    // } else {
    //   setData({ ...data, [e.target.name]: e.target.value });
    // }
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(ReverseString(e.target.value));
    // console.log(typeof e.target.value);
  };
  function ReverseString({ ...items }) {
    let temp = {};
    temp = items.dob;
    // let temp1 = temp;
    let temp1 = temp.split("-").reverse().join("/");
    setDateOfBirth(temp1);
    // return str.split("-").reverse().join("/");
  }
  const handleSaveBtn = () => {
    setAllData({ ...data });
    localStorage.setItem("items", JSON.stringify(data));
    // console.log(data);
    setEditCondition(false);
  };
  const handleImage = (e) => {
    const x = URL.createObjectURL(e.target.files[0]);

    setProfilePic(x);
    setImageCondition(false);
    // let temp = {};
    // temp = { ...data };
    // temp.profile_pic = x;

    // localStorage.setItem("items", JSON.stringify(temp));
    // setAllData({ ...temp });
  };
  const handleRemoveBtn = () => {
    // let temp = {};
    // temp = { ...data };
    // temp.profile_pic =
    //   "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png";
    // localStorage.setItem("items", JSON.stringify(temp));
    // setAllData({ ...temp });
    setProfilePic(
      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"
    );
    setImageCondition(false);
  };
  const handlePicCloseBtn = () => {
    setViewImageCondition(false);
    setImageCondition(false);
  };
  const handleLogoutBtn = () => {
    const logout = JSON.parse(localStorage.getItem("items"));
    let temp = {};
    temp = { ...logout };
    temp.condition = false;
    // console.log(temp);
    localStorage.setItem("items", JSON.stringify(temp));

    navigate("/");
    window.location.reload(true);
  };
  const handleDeleteBtn = () => {
    localStorage.removeItem("items");
    navigate("/");
    window.location.reload(true);
  };
  const settingBack = () => {
    setSettingCondition(false);
  };
  const handleDeleteBackBtn = () => {
    setDeleteCondition(false);
  };
  return (
    <>
      <div className={styles.main}>
        {settingCondition ? (
          <SettingsComponent settingBack={settingBack} />
        ) : null}
        {imageCondition ? (
          <div className={styles.submain}>
            <div className={styles.image_box}>
              <button
                className={styles.image_div}
                onClick={() => setViewImageCondition(true)}
              >
                View Image
              </button>
              <div className={styles.image_div}>
                <span className={styles.upload_image_style}>
                  <input
                    type="file"
                    onChange={handleImage}
                    className={styles.image_file}
                    id="profile_pic"
                    name="profile_pic"
                    accept="image/png, image/gif, image/jpeg"
                  />
                  <label
                    htmlFor="profile_pic"
                    className={styles.upload_picture_text}
                  >
                    Upload Picuture
                  </label>
                </span>
              </div>
              <button className={styles.image_div} onClick={handleRemoveBtn}>
                Remove Image
              </button>
              <button
                className={styles.image_div}
                onClick={() => setImageCondition(false)}
              >
                Cancle
              </button>
            </div>
          </div>
        ) : null}
        {viewImageCondition ? (
          <div className={styles.pic_view_box}>
            <div className={styles.pic_view_div}>
              <div
                className={styles.pic_view}
                style={{
                  // backgroundImage: `url(${allData.profile_pic})`,
                  backgroundImage: `url(${profilePic})`,
                  backgroundSize: "contain",
                  // backgroundSize: "cover",

                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundOrigin: "content-box",
                  // backgroundAttachment: "fixed",
                }}
              ></div>
              <button
                className={styles.pic_close_btn}
                onClick={handlePicCloseBtn}
              >
                Close
              </button>
            </div>
          </div>
        ) : null}
        {logoutCondition ? (
          <div className={styles.logout_box}>
            <div className={styles.logout_div_box}>
              <div className={styles.logout_text}>
                Are you sure you want to log out ?
              </div>
              <div className={styles.logout_button_group}>
                <button
                  className={styles.logout_button_yes}
                  onClick={handleLogoutBtn}
                >
                  Yes
                </button>
                <button
                  className={styles.logout_button_no}
                  onClick={() => setLogoutCondition(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {deleteCondition ? (
          <DeleteAccount handleDeleteBackBtn={handleDeleteBackBtn} />
        ) : null}
        <div className={styles.profile_box}>
          <div className={styles.picture_div}>
            <div
              onClick={() => setImageCondition(true)}
              className={styles.picture_box}
              style={{
                // backgroundImage: `url(${allData.profile_pic})`,
                backgroundImage: `url(${profilePic})`,
                backgroundSize: "contain",
                // backgroundSize: "cover",

                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundOrigin: "content-box",
                // backgroundAttachment: "fixed",
              }}
            >
              <button
                className={styles.camera_icon}
                onClick={() => setImageCondition(true)}
              >
                <BsFillCameraFill />
              </button>
            </div>
          </div>
          <div className={styles.profile_info}>
            <div className={styles.profile_Edit_wrapper}>
              <h5 className={styles.profile_info_title}>Profile Info</h5>
              {editCondition ? (
                <div className={styles.button_group_style}>
                  <button
                    className={styles.close_btn}
                    onClick={() => setEditCondition(false)}
                  >
                    Close
                  </button>
                  <button className={styles.save_btn} onClick={handleSaveBtn}>
                    Save
                  </button>
                </div>
              ) : (
                <button
                  className={styles.edit_btn}
                  onClick={() => setEditCondition(true)}
                >
                  Edit
                </button>
              )}
            </div>

            <div className={styles.line_div}></div>
            <div className={styles.profile_info_box}>
              <div className={styles.profile_label}>
                <span className={styles.profile_label_title}>Name</span>
                {editCondition ? (
                  <div className={styles.input_div}>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="name"
                      id="name"
                      value={data.name}
                      placeholder="Enter Name"
                      className={styles.input_box}
                    />
                  </div>
                ) : (
                  <span className={styles.profile_label_value}>
                    {allData.name}
                  </span>
                )}
              </div>
              {editCondition ? null : (
                <div className={styles.profile_label}>
                  <span className={styles.profile_label_title}>
                    Date of Birth
                  </span>
                  {false ? (
                    <div>
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={data.dob}
                        onChange={handleInputChange}
                        className={styles.date_input}
                      />
                    </div>
                  ) : (
                    <span className={styles.profile_label_value}>
                      {/* 09/10/2000 */}
                      {/* {allData.dob} */}
                      {/* {ReverseString(allData.dob)} */}
                      {/* {ReverseString(dateOfBirth)} */}
                      {dateOfBirth}
                    </span>
                  )}
                </div>
              )}
              {editCondition ? null : (
                <div className={styles.profile_label}>
                  <span className={styles.profile_label_title}>Gender</span>
                  {false ? (
                    <div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          value="male"
                          id="male"
                          onChange={handleInputChange}
                          name="gender"
                          checked={data.gender === "male" ? true : false}
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
                          checked={data.gender === "female" ? true : false}
                          onChange={handleInputChange}
                          name="gender"
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                    </div>
                  ) : (
                    <span className={styles.profile_label_value}>
                      <span className={styles.gender_text}>
                        {" "}
                        {allData.gender}
                      </span>
                    </span>
                  )}
                </div>
              )}
              {editCondition ? null : (
                <div className={styles.profile_label}>
                  <span className={styles.profile_label_title}>Email</span>
                  <span className={styles.profile_label_value}>
                    {allData.email}
                  </span>
                </div>
              )}

              <div className={styles.profile_label}>
                <span className={styles.profile_label_title}>Phone</span>
                {editCondition ? (
                  <div className={styles.input_div}>
                    <input
                      onChange={handleInputChange}
                      type="text"
                      name="mobile"
                      id="mobile"
                      value={data.mobile}
                      placeholder="Enter Phone Number"
                      className={styles.input_box}
                    />
                  </div>
                ) : (
                  <span className={styles.profile_label_value}>
                    {allData.mobile}
                  </span>
                )}
              </div>
              <div className={styles.profile_label}>
                <span className={styles.profile_label_title}>Address</span>
                {editCondition ? (
                  <div className={styles.textarea_div}>
                    <textarea
                      onChange={handleInputChange}
                      className={styles.address_textarea}
                      name="address"
                      id="address"
                      cols="30"
                      rows="3"
                      value={data.address}
                      placeholder="Enter Address"
                    ></textarea>
                  </div>
                ) : (
                  <span className={styles.profile_label_value}>
                    {/* New Kantabandh, Hat-ashuria, Barjora, Bankura, 722204 */}
                    {allData.address}
                  </span>
                )}
              </div>
            </div>
            <div className={styles.logout_div}>
              <button
                className={styles.logout_btn}
                onClick={() => setLogoutCondition(true)}
              >
                Log Out
              </button>
            </div>
            <div className={styles.setting_div}>
              <button
                className={styles.setting_btn}
                onClick={() => setSettingCondition(true)}
              >
                <FiSettings />
                Settings
              </button>
            </div>
            <div className={styles.deleteAcc_div}>
              <button
                className={styles.deleteAcc_btn}
                onClick={() => setDeleteCondition(true)}
              >
                Delete This Account
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* {editCondition ? <ProfileComponent /> : null} */}
    </>
  );
};

const DeleteAccount = ({ handleDeleteBackBtn }) => {
  const [passwordWarning, setPasswordWarning] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordCondition, setpasswordCondition] = useState(false);
  const navigate = useNavigate();
  const handleDeleteBtn = () => {
    localStorage.removeItem("items");
    window.location.reload(true);
    navigate("/");
    window.location.reload(true);
    setpasswordCondition(false);
    handleDeleteBackBtn();
  };
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  const handleConfirmBtn = (e) => {
    e.preventDefault();

    let login = JSON.parse(localStorage.getItem("items"));
    if (login.password == passwordValue) {
      setpasswordCondition(true);
      setPasswordWarning(false);
    } else {
      setpasswordCondition(false);
      setPasswordWarning(true);
    }
  };
  return (
    <>
      {passwordCondition ? (
        <div className={styles.logout_box}>
          <div className={styles.delete_div_box}>
            <div className={styles.logout_text}>
              <h3>Delete Account</h3>
              <span>
                Are you sure you want to delete your account ? This will
                permanently erase your account.
              </span>
            </div>
            <div className={styles.logout_button_group}>
              <button
                className={styles.logout_button_yes}
                onClick={handleDeleteBtn}
              >
                Yes
              </button>
              <button
                className={styles.logout_button_no}
                // onClick={() => setDeleteCondition(false)}
                onClick={() => setpasswordCondition(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className={styles.delete_box}>
        <div className={styles.delete_subbox}>
          <form className={styles.delete_form}>
            <h5 className={styles.delete_title}>Delete Your Account ?</h5>
            <p className={styles.delete_message}>
              Are you sure delete account permanently ?
            </p>
            <div className={styles.password_div}>
              <label className={styles.password_text}>
                Password<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
                placeholder="Enter Your Password"
                className={styles.password_input}
              />
              {passwordWarning ? (
                <span className={styles.password_warning}>
                  Password Incorrect
                </span>
              ) : null}
            </div>

            <div className={styles.button_group}>
              <button
                className={styles.backBtn}
                onClick={() => handleDeleteBackBtn()}
              >
                Back
              </button>
              <button className={styles.confirm_btn} onClick={handleConfirmBtn}>
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ProfilePage;
