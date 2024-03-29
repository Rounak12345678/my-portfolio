/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */


import { useGSAP } from "@gsap/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Link from "next/link";

import { List, ListItem, styled } from "@mui/material";


import assest from "../../../json/assest";
import {
  slideContent,
  starringCast,
} from "../../../json/mock/starringCast.mock";
import ImgWithEvent from "../ImgWithEvent";
import { primaryColors } from "../../../mui-theme/_muiPalette";
import { copperplate_roman_hplhsRg, faroestregular, franchiseregular, im_fell_english_scregular } from "../../../mui-theme/_muiTheme";
import ArrowRightIcon from "../../../ui/Icons/ArrowRightIcon";
import FileIcon from "../../../ui/Icons/FileIcon";

gsap.registerPlugin(ScrollTrigger);

const homeDreamPartMock = [
  {
    image: assest?.top_lnrImg2,
  },
];

 const HomeDreamStyled = styled(Box)`
  .dreamUpBy {
    margin-top: -14.4vw;
    @media (max-width: 899px) {
      margin-top: -15.5vw;
    }
    @media (max-width: 599px) {
      margin-top: -16.9vw;
    }
  }

  .stormtenderBoxes {
    padding-top: 14px;
  }

  .stormtenderBoxes_top {
    background: url("/assets/images/shapegradeOne.webp") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    z-index: 2;
    margin: 0 3%;
    padding-top: 13vw;
    padding-bottom: 7vw;
    @media (max-width: 599px) {
      margin: 0 10px;
      padding-top: 53px;
      padding-bottom: 50px;
    }
  }

  .stormtenderTophead {
    text-align: center;
    position: relative;
    z-index: 1;
    .head_lineTo {
      line-height: 0;
      margin: 0 auto;
      margin-bottom: 1vw;
      max-width: 66vw;
      @media (max-width: 599px) {
        max-width: 460px;
      }
      svg {
        width: 100%;
        height: 1.9vw;
      }
    }
    .ln_btm {
      display: table;
      margin: 0 auto;
      max-width: 24vw;
      @media (max-width: 599px) {
        max-width: 100%;
      }
    }
    .sec_hdngs {
      .subhd {
        font-size: 3vw;
        line-height: 1.1;
        font-family: ${im_fell_english_scregular.style.fontFamily};
     
        @media (max-width: 2000px) {
          font-size: 2.7vw;
        }
        @media (max-width: 1199px) {
          font-size: 27px;
        }
        @media (max-width: 599px) {
          font-size: 20px;
        }
      }
      .mainheads {
        font-size: 10vw;
        line-height: 0.9;
        color: ${primaryColors.color030000};
        font-family: ${franchiseregular.style.fontFamily};

        @media (max-width: 1199px) {
          font-size: 95px;
        }
        @media (max-width: 899px) {
          font-size: 80px;
        }
        @media (max-width: 599px) {
          font-size: 54px;
        }
      }
    }

    &.short {
      .sec_hdngs {
        .subhd {
          font-size: 3.2vw;
          line-height: 1;
          font-family: ${copperplate_roman_hplhsRg.style.fontFamily};
          margin-bottom: 30px;
          @media (max-width: 1199px) {
            font-size: 37px;
            margin-bottom: 15px;
          }
          @media (max-width: 899px) {
            font-size: 30px;
          }
          @media (max-width: 599px) {
            font-size: 25px;
          }
        }
        .mainheads {
          line-height: 1;
          font-size: 8.6vw;

          font-family: ${faroestregular.style.fontFamily};

          @media (max-width: 1199px) {
            font-size: 95px;
          }
          @media (max-width: 899px) {
            font-size: 80px;
          }
          @media (max-width: 599px) {
            font-size: 50px;
          }
          .subCp {
            font-size: 6.8vw;
            font-family: ${faroestregular.style.fontFamily};
            @media (max-width: 599px) {
              font-size: 30px;
            }
          }
        }
      }
    }
  }

  .stormtenderBoxes_topImage {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -20px;
    margin-top: 1vw;
    margin-bottom: 1.8vw;
    @media (max-width: 599px) {
      padding: 0 -5px;
    }
    .tndboximageCol {
      max-width: 50%;
      flex-basis: 50%;
      padding: 0 20px;
      img {
        width: 100%;
      }
      @media (max-width: 599px) {
        padding: 0 5px;
      }
      &:nth-child(2n + 2) {
        text-align: right;
      }
    }
  }

  .subheadBtm {
    max-width: 47vw;
    margin: 0 auto;
    @media (max-width: 899px) {
      max-width: 57vw;
    }
    @media (max-width: 599px) {
      max-width: 100%;
    }
    .subheadBtmMain {
      font-size: 2.83vw;
      line-height: 1;
      font-family: ${im_fell_english_scregular.style.fontFamily};
      @media (max-width: 1199px) {
        font-size: 29px;
      }
      @media (max-width: 899px) {
        font-size: 23px;
      }
      @media (max-width: 599px) {
        font-size: 20px;
      }
      span {
        display: block;
        font-size: 4vw;
        line-height: 1;
        font-family: ${im_fell_english_scregular.style.fontFamily};
        @media (max-width: 1199px) {
          font-size: 20px;
          margin-top: 5px;
        }
        @media (max-width: 599px) {
          font-size: 18px;
        }
      }
    }
    li {
      @media (max-width: 899px) {
        font-size: 20px;
      }
    }
  }
  .dont_trust_lie {
    mix-blend-mode: color-burn;
    display: table;
    margin-top: -7vw;
    max-width: 52vw;
    @media (max-width: 599px) {
      margin-top: -9.5vw;
      max-width: 67vw;
    }
  }
  .stormtenderTopWrappers {
    max-width: 66vw;
    margin: 0 auto;
    @media (max-width: 899px) {
      max-width: 460px;
    }
    @media (max-width: 599px) {
      padding: 0 15px;
    }
  }

  .stormtenderBoxes_btm {
    background: url("/assets/images/shapegradeTwo.webp") no-repeat center center;
    background-size: 100% 100%;
    position: relative;
    z-index: 1;
    margin: 0 3%;
    padding-top: 4vw;
    padding-bottom: 7vw;
    margin-top: -4vw;
    text-align: center;
    @media (max-width: 1199px) {
      padding-top: 60px;
      padding-bottom: 115px;
      margin-top: -70px;
    }
    @media (max-width: 899px) {
      padding-bottom: 13%;
    }
    @media (max-width: 599px) {
      margin: 0 10px;
      padding-bottom: 20%;
      margin-top: -60px;
    }
  }

  .strmtenderBtmHead {
    margin-bottom: 0.7vw;
    @media (max-width: 1199px) {
      margin-bottom: 25px;
    }
    @media (max-width: 599px) {
      margin-bottom: 15px;
    }
    .strmtenderBtmHeadMain {
      font-size: 15.3vw;
      line-height: 0.8;
      font-family: ${franchiseregular.style.fontFamily};
      @media (max-width: 2000px) {
        font-size: 13.3vw;
      }
      @media (max-width: 1199px) {
        font-size: 130px;
      }
      @media (max-width: 899px) {
        font-size: 92px;
      }
      @media (max-width: 599px) {
        font-size: 54px;
      }
    }
    .strmtenderBtmHeadSub {
      font-size: 2.8vw;
      line-height: 1;
      font-family: ${im_fell_english_scregular.style.fontFamily};
      @media (max-width: 2000px) {
        font-size: 2.4vw;
      }
      @media (max-width: 1199px) {
        font-size: 23px;
      }
      @media (max-width: 599px) {
        font-size: 20px;
      }
    }
  }
  .sldierStormSliders {
    display: table !important;
    margin: 0 auto;

    width: auto !important;
    /* border: 0.4vw solid ${primaryColors?.black}; */
    background: url("/assets/images/frame.webp") no-repeat;
    background-size: 100% 100%;
    padding: 20px;
    /* border-radius: 20px; */
    @media (max-width: 599px) {
      padding: 10px;
    }
    .main_sld {
      height: 400px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.8s;
      }
      .web_pages {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        opacity: 0;
        z-index: 2;
        transition: all 0.4s;
        a {
          color: white;
          transition: all 0.4s;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &:hover {
        img {
          scale: 1.2;
        }
        .web_pages {
          opacity: 1;
        }
      }
    }
  }

  .stormtenderBoxes_btm_slide {
    max-width: 43vw;
    margin: 0 auto;
    @media (max-width: 1199px) {
      max-width: 100%;
    }
    .slick-slider {
      padding: 0 94px;
      @media (max-width: 899px) {
        padding: 0 50px;
      }
      @media (max-width: 599px) {
        padding: 0 30px;
      }
    }
    .slick-arrow {
      width: 60px;
      height: 200px;
      cursor: pointer;
      &:before {
        display: none;
      }
      @media (max-width: 899px) {
        width: 40px;
        height: 150px;
      }
      @media (max-width: 599px) {
        width: 20px;
        height: 100px;
      }
    }
    .slick-prev {
      left: 0;
      background: url("/assets/images/arrow_lft.webp") no-repeat;
      background-size: 60px;
      @media (max-width: 899px) {
        background-size: 40px;
      }
      @media (max-width: 599px) {
        background-size: 20px;
      }
    }
    .slick-next {
      right: 0;
      background: url("/assets/images/arrow_rtt.webp") no-repeat;
      background-size: 60px;
      @media (max-width: 899px) {
        background-size: 40px;
      }
      @media (max-width: 599px) {
        background-size: 20px;
      }
    }
  }

  .stormtender_Starring {
    margin-top: 30px;
  }

  .stormtender_strHead {
    position: relative;
    padding: 0 15vw;
    line-height: 1;
    margin-bottom: 35px;
    @media (max-width: 1199px) {
      padding: 0 120px;
      margin-bottom: 30px;
    }
    @media (max-width: 899px) {
      padding: 0 60px;
      margin-bottom: 20px;
    }
    @media (max-width: 599px) {
      padding: 0 40px;
    }
    .lft_shadow {
      position: absolute;
      background: url("/assets/images/dashed_lft.webp") no-repeat top left;
      background-size: 100% 100%;
      width: 13vw;
      height: 3vw;
      left: 0;
      top: 0;
      @media (max-width: 2000px) {
        width: 10vw;
      }
      @media (max-width: 1199px) {
        width: 80px;
      }
      @media (max-width: 899px) {
        width: 40px;
      }
      @media (max-width: 599px) {
        width: 30px;
      }
    }
    .rtt_shadow {
      position: absolute;
      background: url("/assets/images/dashed_rtt.webp") no-repeat top left;
      background-size: 100% 100%;
      width: 13vw;
      height: 3vw;
      right: 0;
      top: 0;
      @media (max-width: 2000px) {
        width: 10vw;
      }
      @media (max-width: 1199px) {
        width: 80px;
      }
      @media (max-width: 899px) {
        width: 40px;
      }
      @media (max-width: 599px) {
        width: 30px;
      }
    }
    .stormtender_StarringHd {
      display: table;
      margin: 0 auto;
      font-size: 6.1vw;
      line-height: 0.7;
      font-family: ${copperplate_roman_hplhsRg.style.fontFamily};
      @media (max-width: 2000px) {
        font-size: 5vw;
      }
      @media (max-width: 1199px) {
        font-size: 46px;
      }
      @media (max-width: 899px) {
        font-size: 40px;
      }
      @media (max-width: 599px) {
        font-size: 29px;
      }
    }
  }
  .cast_imageInners {
    .main_img {
      line-height: 0;
      img {
        width: 100%;
      }
    }
  }

  .cast_imageInners_btm {
    margin-top: 2vw;
    position: relative;
    padding: 1.2vw 0;
    @media (max-width: 1199px) {
      padding: 25px 0;
    }
    &:after {
      position: absolute;
      content: "";
      background: url("/assets/images/shapearrowMain.webp") no-repeat top left;
      background-size: 100% 100%;
      width: 17vw;
      height: 1vw;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 1199px) {
        width: 100%;
        height: 18px;
      }
    }
    &:before {
      position: absolute;
      content: "";
      background: url("/assets/images/shapearrowMain.webp") no-repeat top left;
      background-size: 100% 100%;
      width: 17vw;
      height: 1vw;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 1199px) {
        width: 100%;
        height: 18px;
      }
    }
    .cast_head {
      font-size: 2.6vw;
      line-height: 1;
      font-family: ${im_fell_english_scregular.style.fontFamily};
      @media (max-width: 1199px) {
        font-size: 24px;
      }
      @media (max-width: 899px) {
        font-size: 30px;
      }
      @media (max-width: 599px) {
        font-size: 25px;
      }
    }
  }

  .stormtender_strBtmdtls {
    margin-top: 1.6vw;
    position: relative;
    padding: 0 8vw;
    @media (max-width: 1199px) {
      padding: 0 80px;
    }
    @media (max-width: 899px) {
      margin-top: 30px;
      padding: 0 40px;
    }
    @media (max-width: 599px) {
      margin-top: 20px;
    }
    .strormLft {
      position: absolute;
      background: url("/assets/images/dashed_lft.webp") no-repeat top left;
      background-size: 100% 100%;
      width: 6vw;
      height: 2.4vw;
      left: 0;
      top: 1.3vw;
      @media (max-width: 1199px) {
        width: 50px;
        top: 16px;
      }
      @media (max-width: 899px) {
        width: 35px;
      }
    }
    .strormRtt {
      position: absolute;
      background: url("/assets/images/dashed_lft.webp") no-repeat top left;
      background-size: 100% 100%;
      width: 6vw;
      height: 2.4vw;
      right: 0;
      top: 1.3vw;
      @media (max-width: 1199px) {
        width: 50px;
        top: 16px;
      }
      @media (max-width: 899px) {
        width: 35px;
      }
    }
    .othercmp {
      font-size: 7.8vw;
      line-height: 1;
      font-family: ${faroestregular.style.fontFamily};
      @media (max-width: 2000px) {
        font-size: 6.2vw;
      }
      @media (max-width: 1199px) {
        font-size: 60px;
      }
      @media (max-width: 899px) {
        font-size: 45px;
      }
      @media (max-width: 599px) {
        font-size: 35px;
      }
    }
  }

  .stormtender_strDetails {
    .slick-list {
      margin: 0 -1vw;
      .slick-slide {
        padding: 0 1vw;
      }
    }
  }
  .sub_list {
    li {
      align-items: flex-start;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    svg {
      min-width: 30px;
      margin-top: 6px;
      margin-right: 10px;
    }
  }
  .cv_btn {
    margin-top: 25px;
    background-color: #07171e;
    color: white;
    padding: 12px 20px;
    border-radius: 5px;
    @media (max-width: 899px) {
      font-size: 16px;
    }
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

function HomeDream() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init();
      AOS.refresh();
    };

    const timeoutId = setTimeout(initAOS, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const svgRef = useRef<any>(null);

  const svgRefParent = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useGSAP(() => {
    const initializeAnimation = () => {
      const path = svgRef.current.querySelector(".animated-path");
      const length = path.getTotalLength();

      // Set the initial values for stroke dasharray and dashoffset
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      // GSAP Timeline
      const tl = gsap.timeline();

      // Add animation to the timeline
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      // ScrollTrigger
      ScrollTrigger.create({
        trigger: path,
        start: "top bottom",
        end: "bottom top",
        scrub: false,
        animation: tl,
        invalidateOnRefresh: true,
        onEnter: () => {
          tl.play();
        },
        onEnterBack: () => {
          tl.restart();
        },
        onLeave: () => {
          tl.pause();
        },
        onLeaveBack: () => {
          tl.reverse();
        },
      });

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    };

    // Delay initialization to ensure correct values
    setTimeout(initializeAnimation, 100);
  });

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <HomeDreamStyled>
    <Box
      className="dreamUpBy"
      sx={{
        background: "url(/assets/images/wooden_back.webp) no-repeat bottom",
        backgroundSize: "cover"
      }}
    >
      <Box className="stormtenderBoxes" id="profile">
        <Box className="stormtenderBoxes_top" ref={svgRefParent}>
          <Container fixed>
            <Box className="stormtenderTopWrappers">
              <Box className="stormtenderTophead">
                <Box className="head_lineTo" ref={svgRef}>
                  {/* <svg>
                    <path
                      fillRule="evenodd"
                      fill="rgb(0, 0, 0)"
                      d="M0.000,0.001 L2581.000,0.001 L2581.000,30.000 L0.000,30.000 L0.000,0.001 Z"
                    />
                  </svg> */}

                  <svg
                    width="1920"
                    height="31"
                    viewBox="0 0 1920 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="animated-path"
                      d="M0 16L1920 15.001"
                      stroke="black"
                      strokeWidth="30"
                    />
                  </svg>
                </Box>
                <Box className="sec_hdngs">
                  <Typography
                    variant="h3"
                    className="subhd"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay="100"
                  >
                    I code, therefore I am… constantly learning and growing
                    🌱💻.I hope you find this amusing!
                  </Typography>
                  <Typography
                    variant="h2"
                    className="mainheads"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay="200"
                  >
                    My Profile
                  </Typography>
                </Box>
                <Box
                  className="ln_btm"
                  data-aos="flip-left"
                  data-aos-duration={1500}
                  data-aos-delay="200"
                >
                  <ImgWithEvent
                    src={assest?.btm_tlSec}
                    width={915}
                    height={52}
                    alt="no-image"
                  />
                </Box>
              </Box>

              <Box className="stormtenderBoxes_topImage">
                <Box
                  className="tndboximageCol"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                  data-aos-delay="200"
                >
                  <ImgWithEvent
                    src={assest.top_lnrImg2}
                    width={1116}
                    height={1293}
                    alt="no-image"
                  />
                </Box>
              </Box>

              <Box className="stormtenderTophead short">
                <Box className="sec_hdngs">
                  <Typography
                    variant="h3"
                    className="subhd"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay="100"
                  >
                    React Developer <br />
                    <Typography variant="h4"> (2021 - Current)</Typography>
                  </Typography>
                  <Typography
                    variant="h2"
                    className="mainheads"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay="150"
                  >
                    What{" "}
                    <Typography variant="caption" className="subCp">
                      I
                    </Typography>{" "}
                    Do
                  </Typography>
                </Box>
                <Box
                  className="ln_btm"
                  data-aos="flip-left"
                  data-aos-duration={1500}
                  data-aos-delay="200"
                >
                  <ImgWithEvent
                    src={assest?.btm_tlSec}
                    width={915}
                    height={52}
                    alt="no-image"
                  />
                </Box>
                <Box className="subheadBtm">
                  <List
                    className="sub_list"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay="150"
                  >
                    <ListItem>
                      <ArrowRightIcon />
                      Building responsive static websites using Next.js
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Developing single page applications using React Redux
                      architecture, ES6
                    </ListItem>
                    <ListItem>
                      <ArrowRightIcon />
                      Planned website development, converting mockups into
                      usable web presence with HTML, JavaScript, AJAX, and
                      JSON coding
                    </ListItem>
                  </List>
                  {/* <Typography
                    variant="h2"
                    className="subheadBtmMain"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay="100"
                  >
                    Singin’ Trav’lers & Collectors of
                    <Typography
                      variant="caption"
                      className="subbtnCaption"
                      data-aos="fade-up"
                      data-aos-duration={1500}
                      data-aos-delay="150"
                    >
                      HONEST TROUBLE
                    </Typography>
                  </Typography> */}
                  <a href="assets/resume/cv.pdf" className="cv_btn" download>
                    <FileIcon /> Download Cv
                  </a>
                </Box>
              </Box>

              <Box
                className="dont_trust_lie"
                data-aos="fade-down"
                data-aos-duration={1500}
                data-aos-delay="200"
              >
                <ImgWithEvent
                  src={assest?.dontTrusLie}
                  width={1920}
                  height={822}
                  alt="no-image"
                />
              </Box>
            </Box>
          </Container>
        </Box>

        <Box className="stormtenderBoxes_btm">
          <Container fixed>
            <Box className="stormtenderTopWrappers" id="Projects">
              <Box className="strmtenderBtmHead">
                <Typography
                  variant="h2"
                  className="strmtenderBtmHeadMain"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-delay="150"
                >
                  My Projects
                </Typography>
                <Typography
                  variant="h3"
                  className="strmtenderBtmHeadSub"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-delay="200"
                >
                  View some of my past projects to see examples of <br /> my
                  work
                </Typography>
              </Box>

              <Box
                className="stormtenderBoxes_btm_slide"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-delay="200"
              >
                <Slider {...settings}>
                  {slideContent.map((item, index) => (
                    <Box className="sldierStormSliders" key={index}>
                      <figure className="main_sld">
                        <ImgWithEvent
                          src={item?.image}
                          width={1568}
                          height={1545}
                          alt="no-image"
                        />
                        <Box className="web_pages">
                          <Link href={item?.link} target="_blank">
                            Go to Website
                          </Link>
                        </Box>
                      </figure>
                    </Box>
                  ))}
                </Slider>
              </Box>

              <Box className="stormtender_Starring">
                <Box className="stormtender_strHead">
                  <Box
                    className="lft_shadow"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay="250"
                    id="skills"
                  />
                  <Typography
                    variant="h2"
                    className="stormtender_StarringHd"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay="150"
                  >
                    Skills
                  </Typography>
                  <Box
                    className="rtt_shadow"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-delay="350"
                  />
                </Box>

                {/* <Box className="stormtender_strDetails">
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ md: "2vw" }}
                  >
                    {starringCast.map((item, index) => (
                      <Grid
                        item
                        xs={12}
                        md={4}
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-delay={index * 400 + 100}
                      >
                        <Box className="cast_imageInners">
                          <figure className="main_img">
                            <ImgWithEvent
                              src={item?.image}
                              width={766}
                              height={761}
                              alt="no-image"
                            />
                          </figure>
                          <Box className="cast_imageInners_btm">
                            <Typography variant="h2" className="cast_head">
                              {item?.name}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box> */}

                <Box className="stormtender_strDetails">
                  <Slider {...settings2}>
                    {starringCast.map((item, index) => (
                      <Box
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration={1500}
                        data-aos-delay={index * 400 + 100}
                      >
                        <Box className="cast_imageInners">
                          <figure className="main_img">
                            <ImgWithEvent
                              src={item?.image}
                              width={766}
                              height={761}
                              alt="no-image"
                            />
                          </figure>
                          <Box className="cast_imageInners_btm">
                            <Typography variant="h2" className="cast_head">
                              {item?.name}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Slider>
                </Box>

                <Box className="stormtender_strBtmdtls">
                  <Box
                    className="strormLft"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-delay="250"
                  />
                  {/* <Typography
                    variant="h3"
                    className="othercmp"
                    data-aos="fade-up"
                    data-aos-duration={1000}
                    data-aos-delay="150"
                  >
                    and other bad company
                  </Typography> */}
                  <Box
                    className="strormRtt"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-delay="350"
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  </HomeDreamStyled>
  );
}

export default HomeDream;
