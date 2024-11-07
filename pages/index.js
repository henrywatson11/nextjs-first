import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SearchBar from '../components/SearchBar';
import ProjectDescription from '../components/ProjectDescription';
import CounterWithReset from '../components/Counter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heno's page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Henry welcomes Nextjs <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <CounterWithReset/>
      <ProjectDescription/>
      <SearchBar/>
    </div>
  );
}
