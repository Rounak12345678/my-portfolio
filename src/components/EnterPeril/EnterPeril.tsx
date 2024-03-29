/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-extraneous-dependencies */


import { useGSAP } from "@gsap/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useEffect, useRef } from "react";
import assest from "../../../json/assest";
import { styled } from "@mui/material";


 const EnterPerilStyled = styled(Box)`
  .enterPerilBannr {
    margin-top: -13vw;
    z-index: 0;
    line-height: 0;
    position: relative;
    .enterPerilRain {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-top: 13vw;
    }
    .enterPerilBannr_inner {
      padding-top: 13vw;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 2;
    }
    .main_img {
      img {
        width: 100%;
      }
    }
  }
  .enterPerilBannr_boxOne {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    img {
      width: 100%;
      max-height: 91vw;
    }
  }

  .enterPerilBannr_boxTwo {
    position: absolute;
    bottom: 80vw;
    left: 0;
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    img {
      max-height: 39vw;
      object-fit: contain;
      object-position: left;
    }
    &.active {
      opacity: 1;
    }
  }

  .enterPerilBannr_boxThree {
    position: absolute;
    bottom: 80vw;
    right: 0;
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    img {
      max-height: 36vw;
      object-fit: contain;
      object-position: right;
    }
    &.active {
      opacity: 1;
    }
  }

  .enterPerilPoste {
    position: absolute;
    bottom: 41vw;
    right: 0;
    left: 0;
    z-index: 1;
    transition: transform 0.5s ease;
    &.active {
      transform: rotate(-5deg);
      transition: transform 0.5s ease;
    }
    img {
      width: 100%;
    }
  }

  .enterPerilHand {
    position: absolute;
    bottom: 42vw;
    right: -8vw;
    z-index: 1;
    width: 100%;
    text-align: right;
    @media (max-width: 1199px) {
      bottom: 65vw;
    }
    @media (max-width: 399px) {
      bottom: 77vw;
    }
    img {
      max-width: 20vw;
      @media (max-width: 1199px) {
        max-width: 40vw;
      }
    }
  }

  .enterPeriCrow {
    position: absolute;
    left: 22vw;
    bottom: 96vw;
    z-index: 1;
    max-width: 19vw;
    display: table;
    @media (max-width: 1199px) {
      max-width: 30vw;
      left: 17vw;
    }
    .red_eye_crow {
      position: absolute;
      right: 3.2vw;
      top: 0.9vw;
      line-height: 0;
      img {
        width: 0.5vw;
        @media (max-width: 1199px) {
          width: 0.8vw;
        }
      }
      @media (max-width: 1199px) {
        right: 5vw;
        top: 1.45vw;
      }
    }
  }

  .enterPeriglowTop {
    position: absolute;
    left: 32vw;
    top: 26.5vw;
    z-index: 1;
    max-width: 30vw;
    /* @media (max-width: 1199px) {
      max-width: 50vw;
      top: 14vw;
    } */
    img {
      max-height: 21vw;
      object-fit: contain;
      /* @media (max-width: 1199px) {
        max-height: 41vw;
      } */
    }

    .enterPerlMn2 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .enterPerlMn3 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .enterPerlMnHover {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
`;

gsap.registerPlugin(ScrollTrigger);

const ImageWithRef = forwardRef(({ src, ...props }: any, ref: any) => (
  <img src={src} {...props} alt="no-image" ref={ref} />
));
function EnterPeril() {
  const boxRef = useRef<any>(null);
  const boxRef2 = useRef<any>(null);

  useEffect(() => {
    const initAOS = () => {
      AOS.init();
      AOS.refresh();
    };

    // Ensure AOS is initialized after all content is loaded
    window.addEventListener("load", initAOS);

    // Cleanup event listener
    return () => {
      window.removeEventListener("load", initAOS);
    };
  }, []);

  const crowredeye = useRef<any>(null);

  const parallaxRef = useRef<any>(null);

  useGSAP(() => {
    gsap.set(document.querySelectorAll(".enterPerlMn3"), {
      opacity: "0"
    });

    const lightTL = gsap.timeline({ repeat: -1, yoyo: true });

    lightTL.to(document.querySelectorAll(".enterPerlMn3"), {
      opacity: 1,
      ease: "power2.inOut"
    });
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

  const groundRef = useRef(null);

  useEffect(() => {
    // Ensure ScrollTrigger is enabled

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(".enterPerilBannr"),
        start: "top 100%", // Trigger animation when the top of the element enters the viewport
        end: "bottom bottom", // Trigger animation when the bottom of the element leaves the viewport
        scrub: true // Smoothly animate the background position as the user scrolls
      }
    });

    const groundElement = groundRef.current;

    // Calculate dynamic background position based on client width
    const { clientWidth } = groundElement as any;
    const backgroundPositionX = clientWidth + 1; // Add 1px to prevent the background from sticking

    tl.to(groundElement, 0.01, {
      backgroundPosition: `0px ${backgroundPositionX}px`,
      force3D: true,
      rotation: 1,
      z: 0.01,
      ease: "none"
    });

    return () => {
      tl.kill(); // Clean up the timeline to avoid memory leaks
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const parallaxElements = document.querySelectorAll(".parallax");

    parallaxElements.forEach((element: any) => {
      const yPercent = parseFloat(element.getAttribute("data-parallax")) || 0;

      gsap.to(element, {
        yPercent: -yPercent * 100,
        ease: "power1.out", // Adjust easing for smoother motion
        scrollTrigger: {
          trigger: document.querySelectorAll(".enterPerilBannr"),
          start: "top top",
          end: "100%",
          scrub: 1, // Adjust scrubbing sensitivity
          invalidateOnRefresh: true // Ensure proper recalculations on refresh
        }
      });
    });
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.3 // Adjust threshold as needed
      }
    );

    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              x: 0,
              opacity: 1,
              ease: "power3.out",
              duration: 1
            });
          } else {
            gsap.to(entry.target, {
              x: -95,
              opacity: 0,
              ease: "power3.out",
              duration: 1
            });
          }
        });
      },
      {
        threshold: 0.8 // Adjust threshold as needed
      }
    );

    observer.observe(boxRef2.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.5 // Adjust threshold as needed
      }
    );

    const elements = document.querySelectorAll(".addedBox");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <EnterPerilStyled>
      <Box className="enterPerilBannr">
        <figure className="main_img">
          <img src={assest?.bannerPeril} alt="no-image" />
        </figure>

        <Box
          className="enterPerilRain"
          sx={{
            background: "url(/assets/images/rainPerl.webp) repeat top center",
            backgroundSize: "cover"
          }}
          ref={groundRef}
        />
        <Box className="enterPerilBannr_inner">
          <Box className="enterPerilBannr_boxOne">
            <img
              src={assest?.peril_secBox1}
              width={1920}
              height={3539}
              alt="no-image"
            />
          </Box>

          <Box className="enterPerilBannr_boxTwo addedBox">
            <img src={assest?.peril_secBox2} alt="no-image" />
          </Box>

          <Box className="enterPerilBannr_boxThree addedBox">
            <img
              src={assest?.peril_secBox3}
              width={1242}
              height={1392}
              alt="no-image"
            />
          </Box>

          <Box className="enterPerilPoste" ref={boxRef}>
            <Container fixed>
              <img
                src={assest?.americanSongPoster}
                width={1920}
                height={1393}
                alt="no-image"
              />
            </Container>
          </Box>

          <Box
            className="enterPerilHand parallax"
            ref={parallaxRef}
            data-parallax="0.8"
          >
            <Container fixed>
              <img src={assest?.posterHand} alt="no-image" />
            </Container>
          </Box>

          <Box className="enterPeriCrow" ref={boxRef2}>
            <img
              src={assest?.crow_btm}
              width={748}
              height={487}
              className="crowimg"
              alt="no-image"
            />
            <Typography
              variant="caption"
              className="red_eye_crow"
              ref={crowredeye}
            >
              <img
                src={assest?.crow_btmRed}
                width={18}
                height={16}
                className="redeye"
                alt="no-image"
              />
            </Typography>
          </Box>

          <Box className="enterPeriglowTop">
            <img
              src={assest?.enterLightImg1}
              width={1183}
              height={828}
              className="enterPerlMn1"
              alt="no-image"
            />

            <img
              src={assest?.enterLightImg2}
              width={1183}
              height={828}
              className="enterPerlMn2"
              alt="no-image"
            />

            <ImageWithRef
              src={assest?.enterLightImg3}
              width={1183}
              height={828}
              className="enterPerlMn3"
              alt="no-image"
            />
          </Box>
        </Box>
      </Box>
    </EnterPerilStyled>
  );
}

export default EnterPeril;
