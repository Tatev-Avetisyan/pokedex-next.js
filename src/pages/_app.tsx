import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import Head from "next/head";

const quicksand = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedéx with Next.js</title>
        <meta name="description" content="Pokedéx app with Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={quicksand.className}>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
