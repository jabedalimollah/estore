import React, { useState, useEffect } from "react";
import styles from "../../styles/home/home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import ProductsData from "../../Database/products.json";
const Home = () => {
  const [slideBtn, setSlideBtn] = useState("pic1");
  const [productsData, setProductsData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setProductsData([...ProductsData]);
    displayData();
  }, []);

  const displayData = () => {
    let temp = [];
    temp = ProductsData.filter((item, index) => {
      return index <= 6;
    });
    setData(temp);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className={styles.main}>
        <div className="container mb-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5">
              <div className={styles.hero_section_contant}>
                <div className={styles.basic_text}>Welcome to</div>
                <h5 className={styles.hero_section_title}>JStore</h5>
                <p className={styles.hero_section_para}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  dicta soluta cumque magnam iste, hic architecto impedit veniam
                  est necessitatibus repellendus autem!
                </p>

                <Link href={"/products"} className={styles.shop_now_btn}>
                  <button className={styles.shopNow_button}>Shop Now</button>
                  {/* <span className={styles.slide}></span>
                  <span className={styles.slide_break}>Shop Now</span> */}
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className={styles.hero_image_cover}>
                <div
                  className={
                    slideBtn === "pic1"
                      ? styles.hero_image
                      : styles.hero_image_hide
                  }
                  style={{
                    backgroundImage: `url(https://cdn.pixabay.com/photo/2017/11/06/13/50/family-2923690_960_720.jpg)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {slideBtn === "pic1" ? (
                    <button
                      className={styles.next_slide_btn}
                      onClick={() => setSlideBtn("pic2")}
                    >
                      <span className={styles.next_slide}> </span>
                      <span className={styles.next_slide_break}>
                        Next Slide
                      </span>
                    </button>
                  ) : null}
                </div>
                <div
                  className={
                    // slideBtn==="pic2"? styles.hero_image_hide1 : styles.hero_image1
                    slideBtn === "pic2"
                      ? styles.hero_image
                      : styles.hero_image_hide
                  }
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/4062467/pexels-photo-4062467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {slideBtn === "pic2" ? (
                    <button
                      className={styles.next_slide_btn}
                      onClick={() => setSlideBtn("pic3")}
                    >
                      <span className={styles.next_slide}> </span>
                      <span className={styles.next_slide_break}>
                        Next Slide
                      </span>
                    </button>
                  ) : null}
                </div>
                <div
                  className={
                    // slideBtn==="pic2"? styles.hero_image_hide1 : styles.hero_image1
                    slideBtn === "pic3"
                      ? styles.hero_image
                      : styles.hero_image_hide
                  }
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {slideBtn === "pic3" ? (
                    <button
                      className={styles.next_slide_btn}
                      onClick={() => setSlideBtn("pic1")}
                    >
                      <span className={styles.next_slide}> </span>
                      <span className={styles.next_slide_break}>
                        Next Slide
                      </span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.feature_services_box}>
          <div className={styles.feature_services_title_box}>
            <h5 className={styles.feature_services_title}>
              Our Feature Services
            </h5>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_div}>
              <Carousel
                responsive={responsive}
                // showDots={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                infinite={true}
              >
                {data.map((item, index) => {
                  return (
                    <div style={{ margin: "30px" }} key={item.id}>
                      <div className={styles.product_wrapper}>
                        <div
                          className={styles.product_image}
                          style={{
                            backgroundImage: `url(${item.image1})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          }}
                        ></div>
                        <Link href={"./products"} className={styles.view_btn}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
