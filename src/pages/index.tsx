import Head from "next/head";

import NavBar from "@/components/navbar/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devtools</title>
        <meta name="title" content="Devtools" key="title" />
        <meta
          name="description"
          content="A collection of web development tools"
        />
      </Head>

      <NavBar />
    </>
  );
}
