import dynamic from "next/dynamic";

const Page = dynamic(() => import("@/modules/Form/Toast"), {
  ssr: false,
});

export default Page;
