import Link from "next/link";
import Layout from "components/Layout";
import { request } from "graphql-request";
import styles from "styles/Home.module.css";

export default function Home(props) {
  // console.log(props.locale);

  const endpoint =
    "https://api-us-west-2.hygraph.com/v2/cla11lozg08tu01up9hraaoxa/master";
  const query = `{
      services {
        id
        title
        briefDescription
        description {
          html
        }
        image {
          url
        }
      }
    }`;
  const fetchAPI = async () => {
    const data = await request(endpoint, query);
    console.log(data);
  };
  fetchAPI();
  return (
    <Layout title="Home">
      <div>
        <main>
          <Link href="/" locale="ja">
            To ja
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
