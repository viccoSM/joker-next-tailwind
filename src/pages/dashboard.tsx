import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/Dashboard"), {
  ssr: false,
});

export default Page;
