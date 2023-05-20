import React, { useEffect } from "react";
import styles from "../../styles/contact/contact.module.css";
import { MdPhone } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa";

import Footer from "../../common/Footer/Footer";
// AIzaSyD0zfAIXSs8sd5nsI0IRIiaCoZnfPhiAUg

const ContactPage = () => {
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.contact_title}>Feel Free To Contact Us</div>
        <div className={styles.contact_me}>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className={`col-md-3 ${styles.contact_me_div}`}>
                <MdPhone className={styles.contact_icons} /> +91 6295 965 896
              </div>
              <div className={`col-md-3 mx-5 ${styles.contact_me_div}`}>
                <GrMail className={styles.contact_icons} />{" "}
                jabedalimollah7@gmail.com
              </div>
              <div className={`col-md-3 ${styles.contact_me_div}`}>
                <a
                  href="https://jabedalimollah.netlify.app/"
                  target="_blank"
                  className={styles.contact_website}
                >
                  <FaGlobe className={styles.contact_icons} />{" "}
                  https://jabedalimollah.netlify.app/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map_box}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29331.060974880867!2d87.04244625626998!3d23.229159707856375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7a58c5fc2b411%3A0xfdbd0b45c0b4aa70!2sBankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1683916289988!5m2!1sen!2sin"
            // width={600}
            // height={450}
            // style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className={styles.map_div}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.form_box}>
          <div className={styles.form_div}>
            <input
              type="text"
              placeholder="Enter Name"
              className={styles.input_box}
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className={styles.input_box}
            />
            <textarea
              className={styles.input_box}
              placeholder="Enter message"
            ></textarea>
            <button className={styles.send_btn}>Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
