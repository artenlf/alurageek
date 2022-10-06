import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Grid from "../components/ProductsGrids";
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
      <Footer />
    </>
  );
};
export default Home;
