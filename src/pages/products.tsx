import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import AllProductsGrid from "../components/Grid/AllProducts";
import Header from "../components/Header";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>AluraGeek | Produtos</title>
      </Head>
      <Header />
      <AllProductsGrid />
      <Footer />
    </>
  );
};

export default Products;
