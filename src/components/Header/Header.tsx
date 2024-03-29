/* eslint-disable prefer-const */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
/* eslint-disable mui-path-imports/mui-path-imports */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

import AOS from "aos";
import "aos/dist/aos.css";





import { Container } from "@mui/system";

import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "@mui/material";
import assest from "../../../json/assest";

// const CustomButton = dynamic(() => import("@/ui/Buttons/CustomButton"));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = "100%";

export const HeaderWrap = styled(Box)`
  &.main_head {
    background: url("assets/images/layerbackheader.webp") no-repeat bottom
      center ;
    background-size: 100% 100%;
    padding-top: 40px;
    padding-bottom: 46px;
    position: relative;
    z-index: 10;
    @media (max-width: 2000px) {
      padding-top: 20px;
      padding-bottom: 26px;
    }

    @media (max-width: 599px) {
      padding-top: 10px;
      padding-bottom: 16px;
    }

    .MuiPaper-root {
      background: transparent !important;
    }
  }

  .heading_main_btm {
    margin-top: 5px;

    .headerLogo {
      img {
        width: 11.4vw;
        @media (max-width: 1399px) {
          width: 13vw;
        }
        @media (max-width: 1199px) {
          width: 150px;
        }
        @media (max-width: 599px) {
          width: 100px;
        }
      }
    }
    .MuiToolbar-root {
      padding: 0;
      @media (max-width: 899px) {
        .MuiButtonBase-root {
          order: 1;
          padding: 0;
          margin: 0;
          background: transparent !important;
          margin-left: auto;
          svg {
            fill: #fff;
          }
        }
      }
    }
    .navbar {
      margin-left: auto;
      > ul {
        padding: 0;
        margin: 0;
        > li {
          padding: 0;
          margin: 0;
          display: inline-block;
          width: auto;
          margin-right: 4vw;
          @media (max-width: 2000px) {
            margin-right: 3vw;
          }
          @media (max-width: 1199px) {
            margin-right: 20px;
          }

          &:last-child {
            margin-right: 0;
          }
          > a {
            font-size: 1.85vw;
            line-height: 1.2;
            color: #fff;
            &:hover {
              color: #fff;
            }
            @media (max-width: 2000px) {
              font-size: 1.7vw;
            }
            @media (max-width: 1199px) {
              font-size: 25px;
            }
            @media (max-width: 599px) {
              font-size: 16px;
            }
            @media (max-width: 360px) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  .gapcmnLfRt {
    padding: 0 3.55vw !important;
    @media (max-width: 2000px) {
      padding: 0 2vw !important;
    }
    @media (max-width: 1199px) {
      padding: 0 !important;
    }
  }

  .navbarPartTop {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .topNav {
      padding: 0;
      margin: 0;
      li {
        padding: 0;
        margin: 0;
        display: inline-block;
        width: auto;
        margin-right: 3.2vw;
        @media (max-width: 2000px) {
          margin-right: 3vw;
        }
        @media (max-width: 1199px) {
          margin-right: 20px;
        }

        &:last-child {
          margin-right: 0;
        }
        a {
          font-size: 1.54vw;
          line-height: 1.1;
          color: #fff;
          &:hover {
            color: #000;
          }
          @media (max-width: 1199px) {
            font-size: 23px;
          }
        }
      }
    }
    .topboxrt {
      margin-left: 0.9vw;
    }
  }

  .shop_btHead {
    padding: 0;
    background: transparent !important;
    min-width: inherit;
    img {
      width: 2.2vw;
      @media (max-width: 1199px) {
        width: 30px;
      }
    }
  }
`;

export default function Header(props: Props) {
  console.log(props);
  const navItems = [
    {
      name: "Profile",
      route: "#profile",
    },
    {
      name: "My Projects",
      route: "#Projects",
    },
    {
      name: "Skills",
      route: "#skills",
    },
  ];

  // const { window } = props;

  const router = useRouter();

  React.useEffect(() => {
    gsap.set(document.querySelector(".mobile_hand"), {
      y: -95,
    });
    gsap.set(document.querySelector(".logo_hdrMainWrapps"), {
      opacity: 0,
    });

    gsap.set(document.querySelector(".followmarSpan"), {
      opacity: 0,
    });

    gsap.set(document.querySelectorAll(".mobile_frameMenu > ul > li"), {
      opacity: 0,
      x: -95,
    });

    gsap.set(document.querySelector(".mobile_frameShop"), {
      opacity: 0,
      y: -95,
    });

    gsap.set(document.querySelector(".mobile_shopBtms"), {
      opacity: 0,
      y: -95,
    });

    gsap.set(document.querySelector(".crossMobiletoggle"), {
      opacity: 0,
    });

    let menuTimeline = gsap.timeline();
  }, []);

  const drawer = <>sda</>;

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  React.useEffect(() => {
    const initAOS = () => {
      AOS.init();
      AOS.refresh();
    };

    const timeoutId = setTimeout(initAOS, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Box
          className="heading_main_top"
          sx={{ display: { xs: "block", md: "block" } }}
        >
          <Container fixed>
            <Box className="gapcmnLfRt">
              {/* <Box className="navbarPartTop">
                <List className="topNav">
                  {giftShopItems.map((item, index) => (
                    <ListItem
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay={index * 100 + 100}
                    >
                      <Link href={item?.route}>{item?.name}</Link>
                    </ListItem>
                  ))}
                </List>
                <Box
                  className="topboxrt"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay="350"
                >
                  <Button className="shop_btHead">
                    <img
                      src={assest?.coffinIcon}
                      width={85}
                      height={165}
                      alt=""
                    />
                  </Button>
                </Box>
              </Box> */}
            </Box>
          </Container>
        </Box>

        <Box className="heading_main_btm">
          <Container fixed>
            <Toolbar className="gapcmnLfRt">
              <Link
                href="/"
                className="headerLogo"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <img
                  src={assest.logo_img2}
                  width={425}
                  height={264}
                  alt="Logo"
                />
              </Link>

              <Box sx={{ display: { xs: "block" } }} className="navbar">
                <List>
                  {navItems.map((item, index) => (
                    <ListItem
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay={index * 100 + 100}
                    >
                      <Link
                        href={item?.route}
                        key={item?.route}
                        className={
                          router.pathname === item.route ? "active" : ""
                        }
                      >
                        {/* <CustomButton type="button" variant="text"> */}
                        {item?.name}
                        {/* </CustomButton> */}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          className="modal_drawserHeads"
          sx={{
            display: { xs: "none", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
