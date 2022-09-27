import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AluraGeek | Home</title>
      </Head>
      <Header />
      <Hero />
    </>
  );
};
export default Home;
