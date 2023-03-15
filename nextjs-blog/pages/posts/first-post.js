import Head from "next/head";
import Layout from "../../components/layouts";
import Link from "next/link";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
