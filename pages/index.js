import Link from "next/link";
import Layout from "components/Layout";
import styles from "styles/Home.module.css";

export default function Home(props) {
  console.log(props.locale);
  return (
    <Layout title="Home">
      <div>
        <main>
          <Link href="/" locale="ja">
            To /ja/
          </Link>
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: { locale },
  };
}
