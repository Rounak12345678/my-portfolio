import { Box, BoxProps, styled } from "@mui/material";
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const WrapperStyle = styled(Box)`
  .main_body {
    padding: 100px 0;
  }
`;
interface wrapperProps extends BoxProps {}

const Wrapper: React.FC<wrapperProps & BoxProps> = ({ ...props }) => {
  return (
    <WrapperStyle {...props}>
      <Header />
      <Box className="main_body">{props?.children}</Box>
      <Footer />
    </WrapperStyle>
  );
};

export default Wrapper;
