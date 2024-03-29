import { EnterPerilMain } from "@/components/EnterPeril/EnterPerilMain";
import { BannerMain } from "@/components/HomeBanner/BannerMain";
import { HomeDreamMain } from "@/components/HomeDream/HomeDreamMain";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import events from "../../json/events/events";
import Pageloader from "@/components/Pageloader/Pageloader";
import eventEmitter from "@/components/services/event.emitter";

const Index = () => {
  const [imagesLoadedCount, setImagesLoadedCount] = useState(0);
  useEffect(() => {
    const handleEvent = () => {
      setImagesLoadedCount((prev) => prev + 1);
    };
    eventEmitter.on(events.imageLoaded, handleEvent);
    return () => {
      eventEmitter.off(events.imageLoaded, handleEvent);
    };
  }, []);
  return (
    <>
      {imagesLoadedCount < 40 ? <Pageloader /> : null}
      <Wrapper>
        <BannerMain />
        <HomeDreamMain />
        <EnterPerilMain />
      </Wrapper>
    </>
  );
};

export default Index;
