/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */


import { useGSAP } from "@gsap/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { gsap } from "gsap";
import { useRef } from "react";
import assest from "../../../json/assest";
import { primaryColors } from "../../../mui-theme/_muiPalette";
import { styled } from "@mui/material";
import ImgWithEvent from "../ImgWithEvent";



export const PageloaderStyled = styled(Box)`
  .pageloader_wraps {
    z-index: 999999;
    background: rgba(126, 39, 29, 1);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .main_img {
      max-width: 68vh;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    .pageloader_wraps_inner {
      max-width: 68vh;
      margin: 0 auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      padding-top: 28vh;

      @media (max-width: 599px) {
        max-width: 40vh;
        padding-top: 17vh;
      }
    }
    .banner_crowloader {
      position: absolute;
      right: 0;
      top: 3vh;
      max-width: 29vh;
      @media (max-width: 599px) {
        max-width: 16.5vh;
      }

      .red_eyeLoader {
        position: absolute;
        left: 34.1%;
        top: 2.8%;
        line-height: 0;
        @media (max-width: 599px) {
          top: 3.1%;
        }
        img {
          width: 2vh;
          object-fit: contain;
          @media (max-width: 599px) {
            width: 1vh;
          }
        }
      }
      .cr_imgLoader {
        img {
          width: 100%;
          object-fit: contain;
          height: 100%;
        }
      }
    }
  }

  .loadingtext {
    color: rgba(0, 0, 0, 0.3);
    font-size: 5vh;
    position: absolute;
    bottom: -2vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    &:before {
      content: attr(data-text);
      position: absolute;
      overflow: hidden;
      max-width: 7em;
      white-space: nowrap;
      color: ${primaryColors?.white};
      animation: loading 5s linear infinite;
    }
  }
  @keyframes loading {
    0% {
      max-width: 0;
    }
  }
`;


function Pageloader() {
  const crowredeye2 = useRef(null);

  useGSAP(() => {
    gsap.set(crowredeye2.current, {
      opacity: 0
    });
    const tl2 = gsap.timeline({ repeat: -1, yoyo: true });

    tl2.to(crowredeye2.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    });
  });
  return (
    <PageloaderStyled>
      <Box className="pageloader_wraps">
        <Box className="pageloader_wraps_inner">
          <Box className="loadingtext" data-text="loading…">
            loading…
          </Box>
          <Box className="main_img">
            <ImgWithEvent src={assest.bannersld} alt="no-image" />
          </Box>

          <Box className="banner_crowloader">
            <figure className="cr_imgLoader">
              <ImgWithEvent src={assest?.crow} alt="no-image" />
            </figure>
            <Typography
              variant="caption"
              className="red_eyeLoader"
              ref={crowredeye2}
            >
              <ImgWithEvent src={assest?.red_eye} alt="no-image" />
            </Typography>
          </Box>
        </Box>
      </Box>
    </PageloaderStyled>
  );
}

export default Pageloader;
