import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/Form/Inputs"), {
  ssr: false,
});

export default Page;
