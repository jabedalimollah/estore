import React, { useEffect, useState, useRef } from "react";
import products from "../Database/products.json";
import ReactPlayer from "react-player";
const Products = () => {
  const [data, setData] = useState([]);
  const playerRef = useRef(null);
  useEffect(() => {
    setData(products);
  }, []);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <img src={item.image1} alt="" srcset="" />
            <img src={item.image2} alt="" srcset="" />
            <img src={item.image3} alt="" srcset="" />
            <img src={item.image4} alt="" srcset="" />
            <img src={item.image5} alt="" srcset="" />
            <img src={item.image6} alt="" srcset="" />
            <img src={item.image7} alt="" srcset="" />
            <img src={item.image8} alt="" srcset="" />
            <img src={item.image9} alt="" srcset="" />
            {/* <video width="750" height="500" controls autoplay>
              <source src={item.video} type="video/mp4" />
            </video> */}
            <ReactPlayer ref={playerRef} url={item.video} controls={true} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
