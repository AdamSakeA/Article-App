import React, { ReactNode } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`Adam : ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/imgs/sate-erik-bg.png" /> */}
      </Head>
      <Navigation />
      <main className={`${inter.className}`}>{children}</main>
      <Footer />
    </>
  );
}
