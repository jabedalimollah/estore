import React from "react";
import styles from "../../styles/pageNotFound/pageNotFound.module.css";
import Lottie from "lottie-react";
import pageNotFound from "../../assets/pageNotFound.json";
import { Link } from "react-router-dom";

const PageNotFoundPage = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.submain}>
          <div className={styles.pic_box}>
            <Lottie
              animationData={pageNotFound}
              className={styles.lottie_pic}
            />
          </div>
          <div className={styles.btn_div}>
            <Link to={"/"} className={styles.go_to_home}>
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFoundPage;
