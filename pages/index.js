import Head from "next/head";
import Layout, { siteTitle } from "../components/layouts";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostDate } from '../lib/posts';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm Brendon. I am a software engineer focusing my career on web
          development, but I am interested in all sorts of software.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
