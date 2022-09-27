import type { NextPage } from "next";
import Head from "next/head";
import Grid from "../components/Grid";
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
      <Grid />
    </>
  );
};
export default Home;
