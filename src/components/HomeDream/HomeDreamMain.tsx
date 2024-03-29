import dynamic from "next/dynamic";
import React from "react";


const HomeDream = dynamic(() => import("./HomeDream"), {
  ssr: false
});

export const HomeDreamMain = () => {
  return <HomeDream />;
};
