import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewProductForm from "../components/NewProductForm";

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>AluraGeek | Admin</title>
      </Head>
      <Header showButton home={false} />
      <NewProductForm />
      <Footer />
    </>
  );
};

export default Admin;
