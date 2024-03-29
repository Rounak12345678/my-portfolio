import dynamic from "next/dynamic";
import React from "react";

const HomeBanner = dynamic(() => import("./HomeBanner"), {
  ssr: false,
});

export const BannerMain = () => {
  return <HomeBanner />;
};
