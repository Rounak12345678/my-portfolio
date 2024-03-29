/* eslint-disable import/no-extraneous-dependencies */



import { useGSAP } from "@gsap/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import assest from "../../../json/assest";
import { styled } from "@mui/material";


gsap.registerPlugin(ScrollTrigger);

export const HomeBannerStyled = styled(Box)`
  .home_bannerPart {
    margin-top: -8.5%;
    position: relative;
    overflow: hidden;
    .main_img {
      img {
        width: 100%;
        /* @media (max-width: 899px) {
          height: 100vh;
          object-fit: cover;
        } */
      }
    }
    .home_bannerSecOne {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      padding-top: 6.5%;
      /* @media (max-width: 899px) {
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100% - 40vw);
      } */
    }
  }

  .banner_topshld {
    position: relative;
    display: table;
    margin: 0 auto;
    z-index: 1;
    .bannerTopSld_imgs {
      display: table;
      margin: 0 auto;
      line-height: 0;
      /* margin-left: -150px; */
      &.hover {
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
      }
    }
  }
  .banner_topshld_inns {
    margin-left: 0;
    position: relative;
    max-width: 12vw;
    /* @media (max-width: 899px) {
      max-width: 22vw;
    } */
  }

  .shidle_mainBoxes {
    position: relative;
    display: table;
    margin: 0 auto;
    margin-top: -5.2vw;
    /* @media (max-width: 899px) {
      margin-top: -8.2vw;
    } */
    .shld_imgs {
      max-width: 50vw;
      /* @media (max-width: 899px) {
        max-width: 66vw;
      } */
    }
  }
  .sld_innerContent {
    position: absolute;
    top: 18%;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 1;
    .banCnt1 {
      display: table;
      margin: 0 auto;
      line-height: 0;
      img {
        margin-right: -7.5%;
        max-width: 43vw;
        /* @media (max-width: 899px) {
          max-width: 50vw;
        } */
      }
    }
    .banCnt2 {
      display: table;
      margin: 0 auto;
      line-height: 0;
      margin-top: -1vw;
      img {
        max-width: 25vw;
        /* @media (max-width: 899px) {
          max-width: 45vw;
        } */
      }
    }
  }
  .shield_sec_banner {
    position: relative;
    max-width: 66vw;
    margin-left: auto;
    margin-right: auto;
  }
  .banner_crow {
    position: absolute;
    right: 8vw;
    top: 6.2vw;
    z-index: 1;
    max-width: 14vw;

    /* @media (max-width: 899px) {
      top: 17.2vw;
      max-width: 19vw;
      right: 0;
    } */

    .red_eye {
      position: absolute;
      top: 3.5%;
      left: 34.2%;
      line-height: 0;
      width: 0.8vw;
    }
  }

  .shld_lightLft {
    position: absolute;
    bottom: 0;
    left: 0;
    max-width: 35vw;
    mix-blend-mode: overlay;
  }
  .shld_lightRight {
    position: absolute;
    bottom: 0;
    right: -10%;
    max-width: 48vw;
    mix-blend-mode: overlay;
  }

  .banner_btmCntOne {
    position: absolute;
    left: -13vw;
    bottom: -12.5vw;
    /* @media (max-width: 1199px) {
      bottom: -15vw;
      left: -14vw;
    } */
    img {
      max-width: 19vw;
      /* @media (max-width: 899px) {
        max-width: 23vw;
      } */
    }
  }
  .banner_btmCntTwo {
    position: absolute;
    right: -12.5vw;
    bottom: -8vw;
    z-index: 3;

    /* @media (max-width: 1199px) {
      bottom: -1vw;
      right: -15.5vw;
    } */

    img {
      max-width: 31vw;
      /* @media (max-width: 899px) {
        max-width: 40vw;
      } */
    }
  }
`;


function HomeBanner() {
  const movingObjectsRef1 = useRef(null);
  const movingObjectsRef2 = useRef(null);
  const crowredeye = useRef(null);
  const parallaxRef = useRef<any>(null);

  useGSAP(() => {
    gsap.set(movingObjectsRef2.current, {
      opacity: 0
    });
    const tl1 = gsap.timeline({ repeat: -1, yoyo: true });
    tl1
      .to(movingObjectsRef2.current, 1, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      })
      .to(
        movingObjectsRef1.current,
        1,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        },
        "=-1"
      );
  });

  useGSAP(() => {
    gsap.set(crowredeye.current, {
      opacity: 0
    });

    const tl2 = gsap.timeline({ repeat: -1, yoyo: true });

    tl2.to(crowredeye.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    });
  });

  useGSAP(() => {
    gsap.set(document.querySelector(".shld_imgs"), {
      opacity: 0,
      scale: 0
    });
    gsap.set(document.querySelector(".banner_crow"), {
      opacity: 0,
      xPercent: 100
    });
    gsap.set(document.querySelector(".banner_topshld"), {
      opacity: 0,
      scale: 0
    });

    const tl = gsap.timeline();

    tl.to(document.querySelector(".shld_imgs"), 1, {
      scale: 1,
      duration: 2,
      opacity: 1
    })
      .to(document.querySelector(".banner_crow"), 1, {
        duration: 2,
        opacity: 1,
        xPercent: 0
      })
      .to(document.querySelector(".banner_topshld"), 1, {
        duration: 2,
        opacity: 1,
        scale: 1
      });

    ScrollTrigger.create({
      trigger: document.querySelector(".shield_sec_banner"),
      start: "top 20%",
      end: "bottom top",
      animation: tl,
      invalidateOnRefresh: true,
      onEnter: () => {
        // fadeAnimateIn.kill();
        tl.play();
      },
      onEnterBack: () => {
        tl.restart();
      },
      onLeave: () => {
        tl.pause();
      }
      // onLeaveBack: () => {
      //   tl.reverse();
      // }
    });
  });

  useGSAP(() => {
    gsap.set(document.querySelectorAll(".sld_innerContent  *"), {
      // filter: "blur(20px)",
      transform: "scale(12)",
      pointerEvents: "none",
      opacity: 0
    });

    const tl = gsap.timeline();
    tl.to(document.querySelectorAll(".sld_innerContent  *"), 1, {
      duration: 1,
      opacity: 1,
      // filter: "blur(0)",
      transform: "scale(1)",
      stagger: 0.3,
      pointerEvents: "all",
      ease: "power1.inOut"
    });

    ScrollTrigger.create({
      trigger: document.querySelector(".shield_sec_banner"),
      start: "top 10%",
      end: "bottom top",
      animation: tl,
      invalidateOnRefresh: true,
      onEnter: () => {
        // fadeAnimateIn.kill();
        tl.play();
      },
      onEnterBack: () => {
        tl.restart();
      },
      onLeave: () => {
        tl.pause();
      }
      // onLeaveBack: () => {
      //   tl.reverse();
      // }
    });
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element: any) => {
      const yPercent = parseFloat(element.getAttribute("data-parallax")) || 0;

      gsap.to(element, {
        yPercent: -yPercent * 100,
        ease: "power1.out", // Adjust easing for smoother motion
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, // Adjust scrubbing sensitivity
          invalidateOnRefresh: true // Ensure proper recalculations on refresh
        }
      });
    });
  }, []);

  return (
    <HomeBannerStyled>
      <Box className="home_bannerPart">
        <figure className="main_img">
          <img src={assest?.home_banner} alt="no-image" />
        </figure>

        <Box className="home_bannerSecOne">
          <Container fixed>
            <Box className="shield_sec_banner">
              <Box className="banner_topshld">
                <Box className="banner_topshld_inns">
                  <Box className="bannerTopSld_imgs" ref={movingObjectsRef1}>
                    <img
                      src={assest?.topsldnewimg3}
                      width={451}
                      height={775}
                      alt="no-image"
                    />
                  </Box>
                  <Box
                    className="bannerTopSld_imgs hover"
                    ref={movingObjectsRef2}
                  >
                    <img
                      src={assest?.topsldnewimg4}
                      width={451}
                      height={775}
                      alt="no-image"
                    />
                  </Box>
                </Box>
              </Box>

              <Box className="banner_crow">
                <figure className="cr_img">
                  <img src={assest?.crow} alt="no-image" />
                </figure>
                <Typography
                  variant="caption"
                  className="red_eye"
                  ref={crowredeye}
                >
                  <img src={assest?.red_eye} alt="no-image" />
                </Typography>
              </Box>
              <Box className="shidle_mainBoxes">
                <figure className="shld_imgs">
                  <img
                    src={assest?.bannersld}
                    width={1920}
                    height={1725}
                    alt="no-image"
                  />
                </figure>
                <Box className="sld_innerContent">
                  <Typography variant="caption" className="banCnt1">
                    <img
                      src={assest?.sld_bannerCn1}
                      width={1647}
                      height={793}
                      alt="no-image"
                    />
                  </Typography>
                  <Typography variant="caption" className="banCnt2">
                    <img
                      src={assest?.sld_bannerCn2}
                      width={1518}
                      height={262}
                      alt="no-image"
                    />
                  </Typography>
                </Box>
                <Box className="shld_lightLft">
                  <img
                    src={assest?.spotlightLeft}
                    width={1337}
                    height={1150}
                    alt="no-image"
                  />
                </Box>

                <Box className="shld_lightRight">
                  <img
                    src={assest?.spotlightRight}
                    width={1874}
                    height={1751}
                    alt="no-image"
                  />
                </Box>

                <Box
                  className="banner_btmCntOne parallax"
                  ref={parallaxRef}
                  data-parallax="0.5"
                >
                  <img
                    src={assest?.banner_btmImg1}
                    width={732}
                    height={947}
                    alt="no-image"
                  />
                </Box>

                <Box
                  className="banner_btmCntTwo parallax"
                  ref={parallaxRef}
                  data-parallax="-0.5"
                >
                  <img
                    src={assest?.banner_btmImg2}
                    width={1194}
                    height={465}
                    alt="no-image"
                  />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </HomeBannerStyled>
  );
}

export default HomeBanner;
