import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";

export const themeChange = () => {
  const GetElement = document.getElementById("mainWrapper");
  GetElement.classList.toggle("dark");
};

export default function Home() {
  return (
    <div className="whatever" id="mainWrapper">
      <div className="w-full min-h-screen bg-white dark:bg-slate-900">
        <Head>
          <title>Rakib | Front-End Developer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Main />
        <About />
        <Skills />
      </div>
    </div>
  );
}
