import React, { useState, useEffect } from "react";
import styles from "../../styles/cart/cartComponents.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Button, UncontrolledTooltip } from "reactstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { add } from "../../Redux/features/product/productSlice";
const CartComponent = ({ productsIndex, handleProductBackBtn }) => {
  const [productcolor1, setProductColor1] = useState(null);
  const [productcolor2, setProductColor2] = useState(null);
  const [productcolor3, setProductColor3] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const productItem = useSelector((state) => state.product.value);
  const handleColor = () => {
    if (
      productItem[productsIndex].color === productItem[productsIndex].color1
    ) {
      setProductColor1(productItem[productsIndex].image1);
      setProductColor2(productItem[productsIndex].image2);
      setProductColor3(productItem[productsIndex].image3);
      setProductImage(productItem[productsIndex].image1);
    }
    if (
      productItem[productsIndex].color === productItem[productsIndex].color2
    ) {
      setProductColor1(productItem[productsIndex].image4);
      setProductColor2(productItem[productsIndex].image5);
      setProductColor3(productItem[productsIndex].image6);
      setProductImage(productItem[productsIndex].image4);
    }
    if (
      productItem[productsIndex].color === productItem[productsIndex].color3
    ) {
      setProductColor1(productItem[productsIndex].image7);
      setProductColor2(productItem[productsIndex].image8);
      setProductColor3(productItem[productsIndex].image9);
      setProductImage(productItem[productsIndex].image7);
    }
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    handleColor();
  }, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.submain}>
          <div className={styles.backbtn_box}>
            <button
              className={styles.backbtn_div}
              onClick={() => handleProductBackBtn()}
            >
              <BsArrowLeft />
            </button>
          </div>
          <div className={styles.product_box}>
            <div className={styles.product_groupPictures_box_mobile}>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                //deviceType={true}//{this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className="location-jobs "
                // containerClass="carousel-container"
                // itemClass="carousel-item"
              >
                <div className={styles.image_wrapper}>
                  <div
                    onClick={() => setProductImage(productcolor1)}
                    className={styles.product_group_pic1}
                    style={{
                      // backgroundImage: `url(${productsData[index].image1} )`,
                      // backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70 )`,
                      backgroundImage: `url(${productcolor1} )`,
                      // backgroundRepeat: "no-repeat",
                      // backgroundOrigin: "border-box",
                      // backgroundPosition: "center",

                      backgroundSize: "contain",

                      backgroundRepeat: "no-repeat",

                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className={styles.image_wrapper}>
                  <div
                    onClick={() => setProductImage(productcolor2)}
                    className={styles.product_group_pic1}
                    style={{
                      // backgroundImage: `url(${productsData[index].image2} )`,
                      // backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70 )`,
                      backgroundImage: `url(${productcolor2} )`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
                <div className={styles.image_wrapper}>
                  <div
                    onClick={() => setProductImage(productcolor3)}
                    className={styles.product_group_pic1}
                    style={{
                      // backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70 )`,
                      backgroundImage: `url(${productcolor3} )`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </Carousel>
            </div>
            <div className={styles.product_picture_box}>
              <div className={styles.product_groupPictures_box}>
                <div
                  onClick={() => setProductImage(productcolor1)}
                  className={styles.product_group_pic}
                  style={{
                    // backgroundImage: `url(${productsData[index].image1} )`,
                    // backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70 )`,
                    backgroundImage: `url(${productcolor1} )`,
                    // backgroundRepeat: "no-repeat",
                    // backgroundOrigin: "border-box",
                    // backgroundPosition: "center",

                    backgroundSize: "contain",

                    backgroundRepeat: "no-repeat",

                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                    className={styles.groupImage}
                    src={productsData[index].image1}
                    alt={productsData[index].image1}
                  /> */}
                </div>
                <div
                  onClick={() => setProductImage(productcolor2)}
                  className={styles.product_group_pic}
                  style={{
                    // backgroundImage: `url(${productsData[index].image2} )`,
                    // backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70 )`,
                    backgroundImage: `url(${productcolor2} )`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                    className={styles.groupImage}
                    src={productsData[index].image2}
                    alt={productsData[index].image2}
                  /> */}
                </div>
                <div
                  onClick={() => setProductImage(productcolor3)}
                  className={styles.product_group_pic}
                  style={{
                    // backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70 )`,
                    backgroundImage: `url(${productcolor3} )`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                    className={styles.groupImage}
                    src={productsData[index].image3}
                    alt={productsData[index].image3}
                  /> */}
                </div>
              </div>
              <div
                className={styles.product_view_pic}
                style={{
                  // backgroundImage: `url(${productsData[index].image1} )`,
                  //   backgroundImage: `url(https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70)`,
                  backgroundImage: `url(${productImage} )`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {/* <img
                  src={productsData[index].image1}
                  alt={productsData[index].image1}
                /> */}
              </div>
            </div>
            <div className={styles.product_details_box}>
              <div className={styles.product_name_box}>
                <h5 className={styles.product_name}>
                  ({productItem[productsIndex].name}) (
                  {productItem[productsIndex].color},{" "}
                  {productItem[productsIndex].storage} GB) (
                  {productItem[productsIndex].ram} GB RAM)
                  {/* {productsData[index].name}({productColor},
                  {productsData[index].storage} GB) ({productsData[index].ram}
                  GB RAM) */}
                </h5>
              </div>
              <div className={styles.product_rating_box}>
                <div className={styles.product_rating}>
                  {/* {productsData[index].ratings} */}
                  {productItem[productsIndex].ratings}
                  <AiFillStar className={styles.star_icon} />
                </div>
                <div className={styles.product_review_box}>
                  <p className={styles.product_review}>
                    {productItem[productsIndex].ratings} Ratings &{" "}
                    {productItem[productsIndex].review} Reviews
                    {/* {productsData[index].rating_count} Ratings &{" "}
                    {productsData[index].reviews} Reviews */}
                  </p>
                </div>
              </div>

              <div className={styles.price_box}>
                <h4 className={styles.price_text}>
                  ₹{productItem[productsIndex].price}
                  {/* ₹{productsData[index].price} */}
                </h4>
              </div>
              <div className={styles.product_description}>
                {/* <p>description</p> */}
                <p className={styles.product_description_text}>
                  {productItem[productsIndex].description}
                  {/* {productsData[index].description} */}
                </p>
              </div>
              <div className={styles.color_box}>
                <div className={styles.color_text}>Color</div>
                <div className={styles.color_div}>
                  <div
                    className={styles.product_color}
                    style={{
                      backgroundImage: `url(${productcolor1})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <Button
                      color="primary"
                      data-placement="top"
                      id="tooltip198087688"
                      size="sm"
                      type="button"
                      className={styles.tooltipStyle}
                    ></Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="top"
                      target="tooltip198087688"
                    >
                      {productItem[productsIndex].color}
                    </UncontrolledTooltip>
                  </div>
                  {/* {productsData[index].color2 === "" ? null : (
                    <div
                      onClick={handleColor2}
                      className={styles.product_color}
                      style={{
                        backgroundImage: `url(${productsData[index].image4} )`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )}
                  {productsData[index].color3 === "" ? null : (
                    <div
                      onClick={handleColor3}
                      className={styles.product_color}
                      style={{
                        backgroundImage: `url(${productsData[index].image7} )`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  )} */}
                </div>
              </div>
              <div className={styles.specifications_box}>
                <h5 className={styles.specifications_text}>Specifications</h5>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Name</div>
                  <div className={styles.specifications_value}>
                    {productItem[productsIndex].name}
                  </div>
                </div>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Brand</div>
                  <div className={styles.specifications_value}>
                    {productItem[productsIndex].brand}
                  </div>
                </div>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Catagory</div>
                  <div className={styles.specifications_value}>
                    {productItem[productsIndex].catagory}
                  </div>
                </div>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Color</div>
                  <div className={styles.specifications_value}>
                    {productItem[productsIndex].color}
                  </div>
                </div>
                {productItem[productsIndex].storage === "" ? null : (
                  <div className={styles.specifications_div}>
                    <div className={styles.specifications_title}>Storage</div>
                    <div className={styles.specifications_value}>
                      {productItem[productsIndex].storage}GB
                    </div>
                  </div>
                )}

                {productItem[productsIndex].operating_system === "" ? null : (
                  <div className={styles.specifications_div}>
                    <div className={styles.specifications_title}>
                      Operating System
                    </div>
                    <div className={styles.specifications_value}>
                      {productItem[productsIndex].operating_system}
                    </div>
                  </div>
                )}

                {productItem[productsIndex].ram === "" ? null : (
                  <div className={styles.specifications_div}>
                    <div className={styles.specifications_title}>Ram</div>
                    <div className={styles.specifications_value}>
                      {productItem[productsIndex].ram}GB
                    </div>
                  </div>
                )}
              </div>
              <hr />
              <div className={styles.specifications_div}>
                <div className={styles.specifications_title}>Purches Price</div>
                <div className={styles.specifications_value}>
                  ₹{productItem[productsIndex].price}
                  {/* {productsData[index].price * productCount} */}
                </div>
              </div>
              <div className={styles.add_cart_box}>
                <div className={styles.cart_count}></div>
                <button className={styles.add_to_cart_btn}>
                  <HiShoppingCart className={styles.cart_icon} />
                  Ordered
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
