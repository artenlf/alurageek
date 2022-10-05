import { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>AluraGeek | Login</title>
      </Head>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
};

export default Login;
