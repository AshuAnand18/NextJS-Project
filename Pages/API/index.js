import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Image from 'next/image';
import Home from "../components/home";
import About from '../components/about';
import Feature from '../components/feature';
import Footer from '../components/footer'
const Index = () => {
  return (
    <Layout pageTitle="LandingPage">
      <Header />
      <Home/>
      <Feature/>
      <About/>
      <Footer/>
    </Layout>
  )
}
export default Index;

