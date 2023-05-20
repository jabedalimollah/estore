import React, { useState, useEffect } from "react";
import styles from "../../styles/products/productsComponents.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, UncontrolledTooltip } from "reactstrap";
// import { add } from "../../Redux/features/product/productSlice";
import { add } from "../../Redux/features/product/productSlice";
import { useNavigate } from "react-router-dom";
const ProductsComponent = ({
  productsData,
  index,
  handleProductsDetailsCondition,
}) => {
  const [productImage1, setProductImage1] = useState(
    productsData[index].image1
  );
  const [productImage2, setProductImage2] = useState(
    productsData[index].image2
  );
  const [productImage3, setProductImage3] = useState(
    productsData[index].image3
  );
  const [productColor, setProductColor] = useState(productsData[index].color1);
  const [productImage, setProductImage] = useState(productsData[index].image1);
  const [productCount, setProductCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productsData[index].price);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackbutton = () => {
    handleProductsDetailsCondition(index);
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
  const handlePic1 = () => {
    setProductImage(productImage1);
  };
  const handlePic2 = () => {
    setProductImage(productImage2);
  };
  const handlePic3 = () => {
    setProductImage(productImage3);
  };
  const handleColor1 = () => {
    setProductColor(productsData[index].color1);
    setProductImage1(productsData[index].image1);
    setProductImage2(productsData[index].image2);
    setProductImage3(productsData[index].image3);
    setProductImage(productsData[index].image1);
  };
  const handleColor2 = () => {
    setProductColor(productsData[index].color2);
    setProductImage1(productsData[index].image4);
    setProductImage2(productsData[index].image5);
    setProductImage3(productsData[index].image6);
    setProductImage(productsData[index].image4);
  };
  const handleColor3 = () => {
    setProductColor(productsData[index].color3);
    setProductImage1(productsData[index].image7);
    setProductImage2(productsData[index].image8);
    setProductImage3(productsData[index].image9);
    setProductImage(productsData[index].image7);
  };
  const handleMinusBtn = () => {
    //  productCount <= 1 ? setProductCount(1) : setProductCount(productCount - 1);
    let temp = productCount <= 1 ? 1 : productCount - 1;
    setProductCount(temp);
    setTotalPrice(productsData[index].price * temp);
  };
  const handlePlusBtn = () => {
    // productCount >= 10
    //   ? setProductCount(10)
    //   : setProductCount(productCount + 1);
    // setTotalPrice(productsData[index].price * productCount);
    let temp = productCount >= 10 ? 1 : productCount + 1;
    setProductCount(temp);
    setTotalPrice(productsData[index].price * temp);
  };
  const handleAddToCart = () => {
    const login = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items")).condition
      : false;
    if (login) {
      let data = {};
      data = { ...productsData[index] };
      // data.color1 = "black";
      // console.log(data);
      data.color = productColor;
      data.image = productImage1;
      data.count = productCount;
      data.subtotal = totalPrice;
      dispatch(add(data));
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.submain}>
          <div className={styles.backbtn_box}>
            <button className={styles.backbtn_div} onClick={handleBackbutton}>
              <BsArrowLeft />
            </button>
          </div>
          <div className={styles.product_box}>
            {" "}
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
                    onClick={handlePic1}
                    className={styles.product_group_pic1}
                    style={{
                      // backgroundImage: `url(${productsData[index].image1} )`,
                      backgroundImage: `url(${productImage1} )`,
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
                </div>
                <div className={styles.image_wrapper}>
                  <div
                    onClick={handlePic2}
                    className={styles.product_group_pic1}
                    style={{
                      // backgroundImage: `url(${productsData[index].image2} )`,
                      backgroundImage: `url(${productImage2} )`,
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
                </div>
                <div className={styles.image_wrapper}>
                  <div
                    onClick={handlePic3}
                    className={styles.product_group_pic1}
                    style={{
                      backgroundImage: `url(${productImage3} )`,
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
              </Carousel>
            </div>
            <div className={styles.product_picture_box}>
              <div className={styles.product_groupPictures_box}>
                <div
                  onClick={handlePic1}
                  className={styles.product_group_pic}
                  style={{
                    // backgroundImage: `url(${productsData[index].image1} )`,
                    backgroundImage: `url(${productImage1} )`,
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
                  onClick={handlePic2}
                  className={styles.product_group_pic}
                  style={{
                    // backgroundImage: `url(${productsData[index].image2} )`,
                    backgroundImage: `url(${productImage2} )`,
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
                  onClick={handlePic3}
                  className={styles.product_group_pic}
                  style={{
                    backgroundImage: `url(${productImage3} )`,
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
                  {productsData[index].name}({productColor},
                  {productsData[index].storage} GB) ({productsData[index].ram}
                  GB RAM)
                </h5>
              </div>
              <div className={styles.product_rating_box}>
                <div className={styles.product_rating}>
                  {productsData[index].ratings}
                  <AiFillStar className={styles.star_icon} />
                </div>
                <div className={styles.product_review_box}>
                  <p className={styles.product_review}>
                    {productsData[index].rating_count} Ratings &{" "}
                    {productsData[index].reviews} Reviews
                  </p>
                </div>
              </div>

              <div className={styles.price_box}>
                <h4 className={styles.price_text}>
                  ₹{productsData[index].price}
                </h4>
              </div>
              <div className={styles.product_description}>
                {/* <p>description</p> */}
                <p className={styles.product_description_text}>
                  {productsData[index].description}
                </p>
              </div>
              <div className={styles.color_box}>
                <div className={styles.color_text}>Color</div>
                <div className={styles.color_div}>
                  <div
                    onClick={handleColor1}
                    className={styles.product_color}
                    style={{
                      backgroundImage: `url(${productsData[index].image1} )`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  >
                    <Button
                      color="primary"
                      data-placement="top"
                      id="tooltip19808768"
                      size="sm"
                      type="button"
                      className={styles.tooltipStyle}
                    ></Button>
                    <UncontrolledTooltip
                      delay={0}
                      placement="top"
                      target="tooltip19808768"
                    >
                      {productsData[index].color1}
                    </UncontrolledTooltip>
                  </div>
                  {productsData[index].color2 === "" ? null : (
                    <div
                      onClick={handleColor2}
                      className={styles.product_color}
                      style={{
                        backgroundImage: `url(${productsData[index].image4} )`,
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
                        {productsData[index].color2}
                      </UncontrolledTooltip>
                    </div>
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
                    >
                      <Button
                        color="primary"
                        data-placement="top"
                        id="tooltip1980876881"
                        size="sm"
                        type="button"
                        className={styles.tooltipStyle}
                      ></Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="top"
                        target="tooltip1980876881"
                      >
                        {productsData[index].color3}
                      </UncontrolledTooltip>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.specifications_box}>
                <h5 className={styles.specifications_text}>Specifications</h5>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Name</div>
                  <div className={styles.specifications_value}>
                    {productsData[index].name}
                  </div>
                </div>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Brand</div>
                  <div className={styles.specifications_value}>
                    {productsData[index].brand}
                  </div>
                </div>
                <div className={styles.specifications_div}>
                  <div className={styles.specifications_title}>Catagory</div>
                  <div className={styles.specifications_value}>
                    {productsData[index].catagory}
                  </div>
                </div>
                {productsData[index].storage === "" ? null : (
                  <div className={styles.specifications_div}>
                    <div className={styles.specifications_title}>Storage</div>
                    <div className={styles.specifications_value}>
                      {productsData[index].storage}GB
                    </div>
                  </div>
                )}

                {productsData[index].operating_system === "" ? null : (
                  <div className={styles.specifications_div}>
                    <div className={styles.specifications_title}>
                      Operating System
                    </div>
                    <div className={styles.specifications_value}>
                      {productsData[index].operating_system}
                    </div>
                  </div>
                )}

                {productsData[index].ram === "" ? null : (
                  <div className={styles.specifications_div}>
                    <div className={styles.specifications_title}>Ram</div>
                    <div className={styles.specifications_value}>
                      {productsData[index].ram}GB
                    </div>
                  </div>
                )}
              </div>
              <hr />
              <div className={styles.specifications_div}>
                <div className={styles.specifications_title}>Purches Price</div>
                <div className={styles.specifications_value}>
                  ₹{totalPrice}
                  {/* {productsData[index].price * productCount} */}
                </div>
              </div>
              <div className={styles.add_cart_box}>
                <div className={styles.cart_count}>
                  <button className={styles.minus_btn} onClick={handleMinusBtn}>
                    {/* - */}
                    <BiMinus />
                  </button>
                  <div className={styles.item_purches_count}>
                    {productCount}
                    {/* 1 */}
                  </div>
                  <button className={styles.plus_btn} onClick={handlePlusBtn}>
                    <BiPlus />
                    {/* + */}
                  </button>
                </div>
                <button
                  className={styles.add_to_cart_btn}
                  onClick={handleAddToCart}
                >
                  <HiShoppingCart className={styles.cart_icon} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsComponent;
