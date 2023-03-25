import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/Auth/Login"), {
  ssr: false,
});

export default Page;
