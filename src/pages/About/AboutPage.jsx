import React, { useEffect, useState } from "react";
import styles from "../../styles/about/about.module.css";
import Lottie from "lottie-react";
import shoppingPic from "../../assets/shoppin.json";
import aboutpic from "../../assets/aboutpic.json";
import Footer from "../../common/Footer/Footer";
import ConpanyData from "../../Database/companyData.json";
import SkillData from "../../Database/SkillsDB.json";
import Marquee from "react-fast-marquee";
const AboutPage = () => {
  const [companyPic, setCompanyPic] = useState([]);
  const [skillData, setSkillData] = useState([]);
  useEffect(() => {
    setCompanyPic([...ConpanyData]);
    setSkillData([...SkillData]);
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className="container">
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <div className={`col-md-5 ${styles.containt_box}`}>
              <h5 className={styles.about_us_title}>About Us</h5>
              <p className={styles.about_us_text}>This is Ecommours Website</p>
              <p className={styles.about_us_description}>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis commodi placeat ullam tenetur, ut deserunt nostrum.
                Error eum, quibusdam culpa velit aperiam vitae ullam quia cumque
                similique praesentium. Fuga dolores perferendis molestias dolor
                repellat dignissimos accusantium amet, sapiente beatae facere
                quia nam incidunt minima maxime. */}
                You can buy products from this e-commerce website. You can do
                Product Search and sort by price, brand and category. This is a
                responsive website. You can create new account if account is not
                created. If you have forgotten the password, you can also do the
                Forget Password. No database is used for this website. Your
                information will be stored in your device's local storage.
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.image_wrapper}>
                <Lottie
                  animationData={shoppingPic}
                  className={styles.lottie_pic}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row px-5 d-flex justify-content-center align-items-center flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse">
            {/* <div className="row d-flex justify-content-center align-items-center "> */}
            <div className="col-md-6">
              <div className={styles.image_wrapper}>
                <img src="./myself.JPEG" className={styles.lottie_pic2} />
              </div>
            </div>

            <div className={`col-md-5 ${styles.containt_box}`}>
              <h5 className={styles.about_us_title}>Jabed Ali Mollah</h5>
              <p className={styles.about_us_text}>React JS Developer</p>
              <p className={styles.about_us_description}>
                I am a Frontend developer and React js developer.I have built
                some projects. I am from Barjora I completed my diploma with cst
                from ABS Academy of Polytechnic. I have knowledge of react js,
                next js, redux, html, css javascript and Bootstrap.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row px-5 d-flex justify-content-center align-items-center">
            <div className={`col-md-5 ${styles.containt_box}`}>
              <h5 className={styles.about_us_title}>Technologies</h5>
              <p className={styles.about_us_text}>E-Store Website</p>
              <p className={styles.about_us_description}>
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis commodi placeat ullam tenetur, ut deserunt nostrum.
                Error eum, quibusdam culpa velit aperiam vitae ullam quia cumque
                similique praesentium. Fuga dolores perferendis molestias dolor
                repellat dignissimos accusantium amet, sapiente beatae facere
                quia nam incidunt minima maxime. */}
                I made this e-commerce website for my own practice purpose. I am
                collecting the product pictures from flipkart and I am
                collecting the animated pictures from lottiefiles. Many thanks
                to flipkart and lottiefiles. All the technologies that I have
                used to make this website are:- React js, Css3, Javascript,
                Bootstrap, React router dom, React redux, Redux toolkit, and
                React Icons etc.
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.image_wrapper}>
                <Lottie
                  animationData={aboutpic}
                  className={styles.lottie_pic}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.companies_div}>
          {/* <div className={styles.company_text_box}>
            Trusted By 1000+ Companies
          </div>
          <div className={styles.company_box}>
            <Marquee pauseOnHover={true} delay={0} loop={0} autoFill={true}>
              {companyPic.map((item, index) => {
                return (
                  <div className={styles.company_image_wrapper} key={item.id}>
                    <div
                      className={styles.company_pic}
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                );
              })}
            </Marquee>
          </div> */}
          <div className={styles.company_text_box}>My Technology Skills</div>
          <div className={styles.company_box}>
            <Marquee
              pauseOnHover={true}
              delay={0}
              loop={0}
              autoFill={true}
              direction={"left"}
            >
              {skillData.map((item, index) => {
                return (
                  <div className={styles.company_image_wrapper} key={item.id}>
                    <div
                      className={styles.company_pic}
                      style={{
                        backgroundImage: `url(${item.skill_image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        // height: "60%",
                        // display: "flex",
                        // alignSelf: "center",
                      }}
                    ></div>
                  </div>
                );
              })}
            </Marquee>
          </div>
          <div className={styles.company_box}>
            <Marquee
              pauseOnHover={true}
              delay={0}
              loop={0}
              autoFill={true}
              direction={"right"}
            >
              {skillData.map((item, index) => {
                return (
                  <div className={styles.company_image_wrapper} key={item.id}>
                    <div
                      className={styles.company_pic}
                      style={{
                        backgroundImage: `url(${item.skill_image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        // height: "60%",
                        // display: "flex",
                        // alignSelf: "center",
                      }}
                    ></div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
