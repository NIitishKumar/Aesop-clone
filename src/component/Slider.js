import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import CircularProgress from '@mui/material/CircularProgress';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

export default () => {
  //-----------> hooks
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }, [1]);

  return (
    <>
    {
        products.length 
        ?

      <Swiper
      style={{margin:'5% 0'}}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products &&
          products.map((x) => {
            return (
              <SwiperSlide>
                <img
                  width="250px"
                  height="250px"
                  alt=""
                  src={x.image}
                />
                <p>{x.title}</p> 
              </SwiperSlide>
            );
          })}
      </Swiper>
     :
     <CircularProgress />         
    }
    </>
  );
};
