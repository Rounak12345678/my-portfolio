/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/no-array-index-key */


import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Link from "next/link";

const FooterWrap = styled(Box)`
  .footer_mainSec {
    text-align: center;
    background: url("/assets/images/red_footer.webp") no-repeat top center;
    background-size: 100% 100%;
    min-height: 20vw;
    padding-top: 8vw;
    padding-bottom: 1vw;
    margin-top: -8vw;
    position: relative;
    z-index: 3;
    @media (max-width: 1199px) {
      padding-top: 100px;
      padding-bottom: 20px;
      margin-top: -90px;
    }
  }
  .footer_social {
    ul {
      padding: 0;
      margin: 0;
      li {
        padding: 0;
        margin: 0;
        display: inline-block;
        width: auto;
        line-height: 0;
        margin-right: 1.5vw;
        @media (max-width: 599px) {
          margin-right: 15px;
        }
        &:last-child {
          margin-right: 0;
        }
        a {
          transition: 0.6s ease-in-out;
          &:hover {
            transform: rotate(360deg);
          }
          img {
            width: 5.3vw;
            @media (max-width: 1199px) {
              width: 60px;
            }
            @media (max-width: 599px) {
              width: 40px;
            }
          }
        }
      }
    }
  }

  .copyrtBoxes {
    margin-top: 0.5vw;
    margin-bottom: 0.8vw;
    p {
      font-size: 1.6vw;
      line-height: 1;
      color: #fff;
      @media (max-width: 1199px) {
        font-size: 20px;
      }
      @media (max-width: 599px) {
        font-size: 16px;
      }
    }
  }

  .footer_short_Itm {
    ul {
      padding: 0;
      margin: 0;
      li {
        padding: 0;
        margin: 0;
        display: inline-block;
        width: auto;
        line-height: 1;
        border-right: 4px solid #fff;
        margin-right: 1vw;
        padding-right: 1vw;
        @media (max-width: 599px) {
          border-right-width: 2px;
        }
        &:last-child {
          border-right: 0;
        }
        a {
          font-size: 1.6vw;
          line-height: 1;
          color: #fff;
          position: relative;
          padding-bottom: 6px;

          @media (max-width: 1199px) {
            font-size: 20px;
          }
          @media (max-width: 599px) {
            font-size: 16px;
          }
          &:after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 0;
            width: 100%;
            height: 7px;
            background: #fff;
            @media (max-width: 599px) {
              height: 3px;
            }
          }
          &:last-child {
            border-right: 0;
            padding-right: 0;
            margin-right: 0;
          }

          &:hover {
            color: #fff;
            &:after {
              background: #fff;
            }
          }
        }
      }
    }
  }
  .footer_info {
    a {
      color: white;
    }

    li {
      color: white;
      justify-content: center;
      @media (max-width: 599px) {
        font-size: 20px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Box className="footer_mainSec">
        <Container fixed>
          <Box className="footer_info">
            <List>
              <ListItem>
                Contact:- <Link href="tel:+917044966031"> +917044966031</Link>
              </ListItem>
              <ListItem>
                Email:-{" "}
                <Link href="mailto:rounak.barman@gmail.com">
                  rounak.barman@gmail.com
                </Link>
              </ListItem>
              <ListItem>Location:- Kolkata,India</ListItem>
            </List>
          </Box>

          <Box className="copyrtBoxes">
            <Typography variant="body1">
              Copyright © 2024.Designed by Rounak. All right reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </FooterWrap>
  );
};

export default Footer;
