import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import SwipeableViews from "react-swipeable-views";
import Slider from "./component/Slider";
import ReactPlayer from "react-player";

function HomePage() {
  //-----------> hooks
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setproducts(json));
  }, [1]);

  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff",
    },
    slide1: {
      background: "#FEA900",
    },
    slide2: {
      background: "#B3DC4A",
    },
    slide3: {
      background: "#6AC0FF",
    },
  };

  return (
    <Grid container spacing={2} mt={0} style={{ backgroundColor: "#fffef2" }}>
      <Grid
        item
        lg={6}
        sm={6}
        style={{ backgroundColor: "#999", height: "65vh" }}
      >
        <Grid container xs={12} mt={15} justifyContent="left">
          <Grid item lg={4} sm={12}>
            <Typography variant="h2">Aeson</Typography>
          </Grid>
          <Grid item lg={4} sm={12}>
            <Typography align="left" variant="h6">
              Mother’s Day
            </Typography>
            <Typography align="left" varient="h3">
              A selection of gifts to recognise gracious guidance—including
              Beacon, a kit created with all kinds of supportive spirits in
              mind.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={6} sm={6} m={0} style={{ padding: "0" }}>
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/2uNWFvYVR6kExDhAT6fkVh/a55d6a1064529ca929d1b25f50095bae/Aesop_Gifting_2022_Mothers_Day_Web_Homepage_Primary_50-50_Desktop_XL_2880x1200px.jpg"
          //   style={{ display: "contents" }}
          height="100%"
          width="100%"
        />
        {/* <Grid container xs={12} mt={5}>
          <Grid item xs={4}>
            <Typography variant="h2">Aeson</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="p">
              Mother’s Day A selection of gifts to recognise gracious
              guidance—including Beacon, a kit created with all kinds of
              supportive spirits in mind.
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid xs={12}>
        {/* {products.map((x) => {
          return (
            <Grid container xs={12} mt={5}>
              <Grid item xs={4}>
                <Typography variant="h2">Aeson</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="p">
                  Mother’s Day A selection of gifts to recognise gracious
                  guidance—including Beacon, a kit created with all kinds of
                  supportive spirits in mind.
                </Typography>
              </Grid>
            </Grid>
          );
        })} */}
      </Grid>
      <Grid item xs={12}>
        <Slider />
      </Grid>
      <Grid item xs={12} className="footerLinkBorder"></Grid>
      <Grid item lg={6} sm={12}>
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/2CRXmSeUddG4F27PWPUqwO/798ad7d133df2db8a59d2d158fb071de/Aesop_Nourish_Your_Wellbeing_2020_Mid_Desktop_2560x1440px.jpg"
          height={"80%"}
          width="100%"
        />
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item lg={4} sm={12}>
        <Typography align="left" variant="h4" mb={4}>
          Cleansing, nourishing hand care
        </Typography>
        <Typography align="left" varient="p">
          Washing hands with vigour and rigour is an essential act. It is best
          followed by restorative, aromatic hydration: just like the uneasy
          mind, hard-working hands deserve attentive nurturing.
        </Typography>
        <div className="explore">
          <a
            href="https://www.aesop.com/hk/en/r/meticulous-hand-care/"
            className="exploreLink"
            style={{ "text-decoration": "none" }}
          >
            Explore Hand Care
          </a>
        </div>
      </Grid>

      <Grid item xs={12}>
        <Slider />
      </Grid>
      <Grid item xs={12} className="footerLinkBorder"></Grid>
      <Grid item lg={6} sm={12}>
        <ReactPlayer
          allow="autoplay; encrypted-media"
          controls={true}
          width="100%"
          height={"100%"}
          url="https://www.aesop.com/u1nb1km7t5q7/3gl0yMLAvnHrdszAOQ7pi/f99c3eadf821ab099290ba8c00babf66/history-of-fragrance-video.mp4"
        />
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item lg={4} sm={12}>
        <Typography align="left" variant="h6" mb={4}>
          The Athenaeum
        </Typography>
        <Typography align="left" variant="h4" mb={4}>
          A history of fragrance
        </Typography>
        <Typography align="left" varient="p">
          From our earliest in-house experiments to our newest formulations:
          essential oils, trial and error, and the science of perfumery.
        </Typography>
        <div className="explore">
          <a
            href="https://www.aesop.com/hk/en/r/meticulous-hand-care/"
            className="exploreLink"
            style={{ "text-decoration": "none" }}
          >
            Learn more
          </a>
        </div>
      </Grid>

      <Grid item lg={4} sm={12} ml={5} mt={6}>
        <Typography align="left" variant="h4" mb={4}>
          Store locator
        </Typography>
        <Typography align="left" varient="p">
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </Typography>
        <div className="explore">
          <a
            href="https://www.aesop.com/hk/en/r/meticulous-hand-care/"
            className="exploreLink"
            style={{ "text-decoration": "none" }}
          >
            Find a nearby store
          </a>
        </div>
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item lg={6} sm={12} mt={6}>
        <img
          style={{ float: "right", margin: 0 }}
          src="https://www.aesop.com/u1nb1km7t5q7/2CRXmSeUddG4F27PWPUqwO/798ad7d133df2db8a59d2d158fb071de/Aesop_Nourish_Your_Wellbeing_2020_Mid_Desktop_2560x1440px.jpg"
          height={"80%"}
          width="100%"
        />
      </Grid>
      <Grid xs={12}>
        <Typography variant="h4">
          ‘Fragrance is the voice of inanimate things.’
        </Typography>
      </Grid>
      <Grid xs={12} mb={20}>
        <Typography variant="h6">Mary Webb</Typography>
      </Grid>
    </Grid>
  );
}

export default HomePage;
