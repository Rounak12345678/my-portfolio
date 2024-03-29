
import eventEmitter from "@/pages/services/event.emitter";
import { useCallback } from "react";
import events from "../../json/events/events";


type ImgWithEventProps = React.ClassAttributes<HTMLImageElement> &
  React.ImgHTMLAttributes<HTMLImageElement>;
export default function ImgWithEvent(props: ImgWithEventProps) {
  const onLoad = useCallback(() => {
    console.log("Image loaded");
    eventEmitter.emit(events.imageLoaded);
  }, []);

  // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  return <img {...props} onLoad={onLoad} />;
}
