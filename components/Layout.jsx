import Head from "next/head";
import Navbar from "./Navbar";
import styles from "styles/components/Layout.module.css";

const Layout = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>Kesek Automation{title ? ` - ${title}` : ""}</title>
        <meta name="description" content="Kesek Automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
      {children}
    </>
  );
};

export default Layout;
