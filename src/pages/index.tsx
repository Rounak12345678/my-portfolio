import { BannerMain } from "@/components/HomeBanner/BannerMain";
import { HomeDreamMain } from "@/components/HomeDream/HomeDreamMain";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Container, Typography } from "@mui/material";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <BannerMain />
      <HomeDreamMain />
    </Wrapper>
  );
};

export default Index;
