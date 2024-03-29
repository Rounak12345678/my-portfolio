import dynamic from "next/dynamic";


const EnterPeril = dynamic(() => import("./EnterPeril"), {
  ssr: false
});
export const EnterPerilMain = () => {
  return <EnterPeril />;
};
