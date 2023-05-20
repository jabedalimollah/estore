import React, { useEffect, useState } from "react";

import styles from "../../styles/products/products.module.css";
import { BsFillGridFill } from "react-icons/bs";
import { RiLayoutGridFill } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
import { GoThreeBars } from "react-icons/go";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineTune } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import ProductsData from "../../Database/products.json";
import ProductsComponent from "../../Components/ProductsComponent/ProductsComponent";
const ProductsPage = () => {
  const [gridCondition, setGridCondition] = useState("grid1");
  const [productsData, setProductsData] = useState([]);
  const [categoryCondition, setCategoryCondition] = useState("all");
  const [categoryBackup, setCategoryBackup] = useState([]);
  const [companyBackup, seCompanyBackup] = useState([]);
  const [rangeValue, setRangeValue] = useState({
    minValue: 10,
    maxValue: 200000,
    rangeCount: 200000,
  });
  const [searchInput, setSearchInput] = useState("");
  const [filterCondition, setFilterCondition] = useState(false);
  const [productsDetailsCondition, setProductsDetailsCondition] =
    useState(false);
  const [productsIndexNumber, setProductsIndexNumber] = useState(null);
  useEffect(() => {
    setProductsData([...ProductsData]);
    setCategoryBackup([...ProductsData]);
    seCompanyBackup([...ProductsData]);
  }, []);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    let data = [];
    data = ProductsData.filter((item) => {
      return (
        !(
          item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1
        ) ||
        !(
          item.brand.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1
        ) ||
        !(
          item.catagory.toLowerCase().indexOf(e.target.value.toLowerCase()) ===
          -1
        )
      );
      //   !(
      //     item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) === -1
      //   ) ||
      //   e.target.value.toLowerCase() === item.brand.toLowerCase() ||
      //   e.target.value.toLowerCase() === item.catagory.toLowerCase()
      // );
    });
    setProductsData(data);
  };
  const handleAllCategory = () => {
    setProductsData([...ProductsData]);
    setCategoryBackup([...ProductsData]);
  };
  const handleMobileCategory = () => {
    let Mobile = "Mobile";
    let data = [];
    let getData = [];
    getData = companyBackup;

    data = getData.filter((item) => {
      return Mobile === item.catagory;
    });
    setProductsData(data);
    setCategoryBackup(data);
  };
  const handleLaptopCategory = () => {
    let Mobile = "Laptop";
    let data = [];

    let getData = [];
    getData = companyBackup;
    data = getData.filter((item) => {
      return Mobile === item.catagory;
    });
    setProductsData(data);
    setCategoryBackup(data);
  };
  const handleWatchCategory = () => {
    let Mobile = "Watch";
    let data = [];

    let getData = [];
    getData = companyBackup;
    data = getData.filter((item) => {
      return Mobile === item.catagory;
    });
    setProductsData(data);
    setCategoryBackup(data);
  };
  const handleTabletCategory = () => {
    let Mobile = "Tablet";
    let data = [];

    let getData = [];
    getData = companyBackup;
    data = getData.filter((item) => {
      return Mobile === item.catagory;
    });
    setProductsData(data);
    setCategoryBackup(data);
  };
  const handleHeadphoneCategory = () => {
    let Mobile = "Headphone";
    let data = [];

    let getData = [];
    getData = companyBackup;
    data = getData.filter((item) => {
      return Mobile === item.catagory;
    });
    setProductsData(data);
    setCategoryBackup(data);
  };
  const handleCompanyName = (e) => {
    let data = [];
    let getData = [];
    getData = categoryBackup;
    if (e.target.value === "all") {
      setProductsData(categoryBackup);
      seCompanyBackup(categoryBackup);
    } else {
      data = getData.filter((item) => {
        return item.brand.toLowerCase() === e.target.value;
      });
      setProductsData(data);
      seCompanyBackup(data);
    }
  };
  const handleBlackBtn = () => {
    let data = [];
    data = ProductsData.filter((item) => {
      return !(item.color1.toLowerCase().search("black") === -1);
    });
    setProductsData(data);
  };
  const handleGoldBtn = () => {
    let data = [];
    data = ProductsData.filter((item) => {
      return !(item.color1.toLowerCase().search("gold") === -1);
    });
    setProductsData(data);
  };

  const handleGreyBtn = () => {
    let data = [];
    data = ProductsData.filter((item) => {
      return !(item.color1.toLowerCase().search("silver") === -1);
    });
    setProductsData(data);
  };
  const handleBlueBtn = () => {
    let data = [];
    data = ProductsData.filter((item) => {
      return !(item.color1.toLowerCase().search("blue") === -1);
    });
    setProductsData(data);
  };

  const handleRange = (e) => {
    setRangeValue({ ...rangeValue, rangeCount: e.target.value });
    let data = [];
    let getData = [];
    getData = ProductsData;
    data = getData.filter((item) => {
      return item.price < e.target.value;
    });
    setProductsData(data);
  };
  const handleClearFilterBtn = () => {
    setRangeValue({ ...rangeValue, rangeCount: 200000 });
    setProductsData([...ProductsData]);

    setCategoryBackup([...ProductsData]);
    document.querySelector("#brand").value = "all";
    setSearchInput("");
  };
  const handleSortingData = (e) => {
    let data = [];
    data = [...ProductsData];
    if (e.target.value === "default") {
      setProductsData([...ProductsData]);
    }
    if (e.target.value === "low_price") {
      data.sort((a, b) => {
        return parseInt(a.price) - parseInt(b.price);
      });

      setProductsData([...data]);
    }
    if (e.target.value === "high_price") {
      data.sort((a, b) => {
        return parseInt(b.price) - parseInt(a.price);
      });

      setProductsData([...data]);
    }
  };
  const handleProductsDetailsCondition = (index, condition) => {
    setProductsDetailsCondition(!productsDetailsCondition);
    // setProductsDetailsCondition(true);
    setProductsIndexNumber(index);
  };
  const productDetailsHide = () => {
    setProductsDetailsCondition(false);
    setProductsIndexNumber(index);
    // console.log(productsDetailsCondition);
  };
  return (
    <>
      {productsDetailsCondition ? (
        <ProductsComponent
          productsData={productsData}
          index={productsIndexNumber}
          handleProductsDetailsCondition={handleProductsDetailsCondition}
          // productDetailsHide={productDetailsHide}
        />
      ) : null}
      <div className={styles.main}>
        <div className={styles.submain}>
          <div className={styles.filter_component}>
            <div className={styles.search_box}>
              <input
                type="text"
                placeholder="Search"
                onChange={handleSearchInput}
                value={searchInput}
                className={styles.searchInput_style}
              />
            </div>
            <div className={styles.catagory_component}>
              <h5 className={styles.category_title}>Category</h5>
              <button
                className={styles.category_button}
                onClick={handleAllCategory}
              >
                All
              </button>
              <button
                className={styles.category_button}
                onClick={handleMobileCategory}
              >
                Mobiles
              </button>
              <button
                className={styles.category_button}
                onClick={handleLaptopCategory}
              >
                Laptops
              </button>
              <button
                className={styles.category_button}
                onClick={handleWatchCategory}
              >
                Watchs
              </button>
              <button
                className={styles.category_button}
                onClick={handleTabletCategory}
              >
                Tablets
              </button>
              <button
                className={styles.category_button}
                onClick={handleHeadphoneCategory}
              >
                Headphones
              </button>
            </div>
            <div className={styles.brand}>
              <h5 className={styles.category_title}>Company</h5>
              <select
                name="brand"
                id="brand"
                className={styles.company_name}
                onChange={handleCompanyName}
              >
                <option value={"all"}>All</option>
                <option value={"apple"}>Apple</option>
                <option value={"hp"}>HP</option>
                <option value={"vivo"}>Vivo</option>
              </select>
            </div>
            <div className={styles.colors}>
              <h5 className={styles.category_title}>Colors</h5>
              <div className={styles.color_box}>
                <button
                  className={styles.allColor_button}
                  onClick={() => setProductsData([...ProductsData])}
                >
                  All
                </button>
                <button
                  className={styles.black_button}
                  onClick={handleBlackBtn}
                ></button>
                <button
                  className={styles.gold_button}
                  onClick={handleGoldBtn}
                ></button>
                <button
                  className={styles.grey_button}
                  onClick={handleGreyBtn}
                ></button>
                <button
                  className={styles.blue_button}
                  onClick={handleBlueBtn}
                ></button>
              </div>
            </div>
            <div className={styles.price_range}>
              <h5 className={styles.category_title}>Price</h5>
              <p>
                ₹{rangeValue.rangeCount}
                {/* 12000 */}
              </p>
              <input
                type="range"
                className=""
                id="customRange1"
                value={rangeValue.rangeCount}
                min={rangeValue.minValue}
                max={rangeValue.maxValue}
                onChange={handleRange}
              />
            </div>
            <div className={styles.clearFilter_box}>
              <button
                className={styles.clearFilter_btn}
                onClick={handleClearFilterBtn}
              >
                Clear Filter
              </button>
            </div>
          </div>
          {filterCondition ? (
            <div className={styles.filter_component_mobile}>
              <div className={styles.filter_backbtn}>
                <button
                  className={styles.filter_backbtn_icon}
                  onClick={() => setFilterCondition(false)}
                >
                  <BsArrowLeft className={styles.backbtn_icon} />
                </button>
              </div>
              <div className={styles.search_box}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearchInput}
                  value={searchInput}
                  className={styles.searchInput_style}
                />
              </div>
              <div className={styles.catagory_component}>
                <h5 className={styles.category_title}>Category</h5>
                <button
                  className={styles.category_button}
                  onClick={handleAllCategory}
                >
                  All
                </button>
                <button
                  className={styles.category_button}
                  onClick={handleMobileCategory}
                >
                  Mobiles
                </button>
                <button
                  className={styles.category_button}
                  onClick={handleLaptopCategory}
                >
                  Laptops
                </button>
                <button
                  className={styles.category_button}
                  onClick={handleWatchCategory}
                >
                  Watchs
                </button>
                <button
                  className={styles.category_button}
                  onClick={handleTabletCategory}
                >
                  Tablets
                </button>
                <button
                  className={styles.category_button}
                  onClick={handleHeadphoneCategory}
                >
                  Headphones
                </button>
              </div>
              <div className={styles.brand}>
                <h5 className={styles.category_title}>Company</h5>
                <select
                  name="brand"
                  id="brand"
                  className={styles.company_name}
                  onChange={handleCompanyName}
                >
                  <option value={"all"}>All</option>
                  <option value={"apple"}>Apple</option>
                  <option value={"hp"}>HP</option>
                  <option value={"vivo"}>Vivo</option>
                </select>
              </div>
              <div className={styles.colors}>
                <h5 className={styles.category_title}>Colors</h5>
                <div className={styles.color_box}>
                  <button
                    className={styles.allColor_button}
                    onClick={() => setProductsData([...ProductsData])}
                  >
                    All
                  </button>
                  <button
                    className={styles.black_button}
                    onClick={handleBlackBtn}
                  ></button>
                  <button
                    className={styles.gold_button}
                    onClick={handleGoldBtn}
                  ></button>
                  <button
                    className={styles.grey_button}
                    onClick={handleGreyBtn}
                  ></button>
                  <button
                    className={styles.blue_button}
                    onClick={handleBlueBtn}
                  ></button>
                </div>
              </div>
              <div className={styles.price_range}>
                <h5 className={styles.category_title}>Price</h5>
                <p>
                  ₹{rangeValue.rangeCount}
                  {/* 12000 */}
                </p>
                <input
                  type="range"
                  className=""
                  id="customRange1"
                  value={rangeValue.rangeCount}
                  min={rangeValue.minValue}
                  max={rangeValue.maxValue}
                  onChange={handleRange}
                />
              </div>
              <div className={styles.clearFilter_box}>
                <button
                  className={styles.clearFilter_btn}
                  onClick={handleClearFilterBtn}
                >
                  Clear Filter
                </button>
              </div>
            </div>
          ) : null}

          <div className={styles.products_box}>
            <div className={styles.products_menubar}>
              <div className={styles.grid_option}>
                {/* <BsFillGridFill /> */}
                <div
                  className={styles.grid1}
                  onClick={() => setGridCondition("grid1")}
                >
                  <RiLayoutGridFill
                    className={
                      gridCondition == "grid1"
                        ? styles.grid1_icon_active
                        : styles.grid1_icon
                    }
                  />
                </div>
                <div
                  className={styles.grid2}
                  onClick={() => setGridCondition("grid2")}
                >
                  <GoThreeBars
                    className={
                      gridCondition == "grid2"
                        ? styles.grid2_icon_active
                        : styles.grid2_icon
                    }
                  />
                </div>

                {/* <GiHamburgerMenu /> */}
              </div>
              <div className={styles.products_count}>
                {productsData.length} items found
              </div>
              <div className={styles.price_shorting}>
                <select
                  name="shorting"
                  id="shorting"
                  className={styles.shorting_box}
                  onChange={handleSortingData}
                >
                  <option value={"default"}>Default</option>
                  <option value={"low_price"}>Low Price</option>
                  <option value={"high_price"}>High Price</option>
                </select>
              </div>
            </div>
            <div className={styles.products_menubar_mobile}>
              <div className={styles.products_filter_mobile}>
                <button
                  className={styles.filter_icon_mobile}
                  onClick={() => setFilterCondition(true)}
                >
                  <MdOutlineTune className={styles.filter_icon} />
                </button>
                <div className={styles.grid_option}>
                  {/* <BsFillGridFill /> */}
                  <div
                    className={styles.grid1}
                    onClick={() => setGridCondition("grid1")}
                  >
                    <RiLayoutGridFill
                      className={
                        gridCondition == "grid1"
                          ? styles.grid1_icon_active
                          : styles.grid1_icon
                      }
                    />
                  </div>
                  <div
                    className={styles.grid2}
                    onClick={() => setGridCondition("grid2")}
                  >
                    <GoThreeBars
                      className={
                        gridCondition == "grid2"
                          ? styles.grid2_icon_active
                          : styles.grid2_icon
                      }
                    />
                  </div>

                  {/* <GiHamburgerMenu /> */}
                </div>
                <div className={styles.price_shorting}>
                  <select
                    name="shorting"
                    id="shorting"
                    className={styles.shorting_box}
                    onChange={handleSortingData}
                  >
                    <option value={"default"}>Default</option>
                    <option value={"low_price"}>Low Price</option>
                    <option value={"high_price"}>High Price</option>
                  </select>
                </div>
              </div>
              <div className={styles.products_count_mobile}>
                {productsData.length} items found
              </div>
            </div>
            <div className={styles.products_component}>
              {productsData.length === 0 ? (
                <div className={styles.not_item_found_box}>
                  No product found
                </div>
              ) : (
                productsData.map((item, index) => {
                  return gridCondition === "grid1" ? (
                    <div
                      key={item.id}
                      className={styles.products_item}
                      onClick={() => handleProductsDetailsCondition(index)}
                    >
                      {/* <Image
                      src={item.image1}
                      width={500}
                      height={500}
                      alt={item.image1}
                    /> */}

                      <div className={styles.image_box}>
                        <img
                          src={item.image1}
                          alt={item.image1}
                          className={styles.products_image}
                          style={{
                            width: item.catagory == "Laptop" ? "80%" : "40%",
                          }}
                        />
                      </div>

                      <div className={styles.products_title_box}>
                        <h6 className={styles.products_name}>{item.name}</h6>
                        <p className={styles.products_price}>₹{item.price}</p>
                      </div>
                      <p className={styles.products_description}>
                        {item.description}
                      </p>
                      <div className={styles.rating_box}>
                        <div className={styles.rating_icons}>
                          {item.ratings == 5 ? (
                            <>
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                            </>
                          ) : item.ratings == 4 ? (
                            <>
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                            </>
                          ) : item.ratings == 3 ? (
                            <>
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                            </>
                          ) : item.ratings == 2 ? (
                            <>
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                            </>
                          ) : item.ratings == 1 ? (
                            <>
                              <AiFillStar className={styles.star_icon_fill} />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                              <AiOutlineStar
                                className={styles.star_icon_blank}
                              />
                            </>
                          ) : null}
                        </div>
                        <button className={styles.buyNow_btn}>Buy Now</button>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={item.id}
                      className={styles.products_item_Grid}
                      onClick={() => handleProductsDetailsCondition(index)}
                    >
                      {/* {productsDetailsCondition ? (
                      <ProductsComponent
                        item={item}
                        index={productsIndexNumber}
                        productDetailsHide={productDetailsHide}
                      />
                    ) : null} */}
                      <div className={styles.image_box_grid}>
                        <img
                          src={item.image1}
                          alt={item.image1}
                          className={`${styles.products_image_gird} ${
                            item.catagory == "Laptop"
                              ? styles.catagory_laptop
                              : styles.catagory_moblie
                          }`}
                          // style={{
                          //   width: item.catagory == "Laptop" ? "80%" : "36%",
                          // }}
                        />
                      </div>
                      <div className={styles.products_details_grid}>
                        <h5 className={styles.products_name_grid}>
                          {item.name}
                        </h5>
                        <h6 className={styles.products_price_grid}>
                          ₹{item.price}
                        </h6>
                        <p className={styles.products_description_grid}>
                          {item.description}
                        </p>
                        <div className={styles.rating_box_grid}>
                          <div className={styles.rating_icons}>
                            {item.ratings == 5 ? (
                              <>
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                              </>
                            ) : item.ratings == 4 ? (
                              <>
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                              </>
                            ) : item.ratings == 3 ? (
                              <>
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                              </>
                            ) : item.ratings == 2 ? (
                              <>
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                              </>
                            ) : item.ratings == 1 ? (
                              <>
                                <AiFillStar className={styles.star_icon_fill} />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                                <AiOutlineStar
                                  className={styles.star_icon_blank}
                                />
                              </>
                            ) : null}
                          </div>
                        </div>
                        <button className={styles.buyNow_btn_grid}>
                          Buy Now
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
