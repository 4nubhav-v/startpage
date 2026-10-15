import { motion, stagger } from "motion/react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form.tsx";
import Card from "./card/Card.tsx";
import startpageData from "../data.ts";

const divanimate = {
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { when: "beforeChildren", delayChildren: stagger(0.3) },
  },
  start: {
    transition: {
      when: "afterChildren",
    },
    opacity: 0,
    y: 10,
    scale: 0.98,
    filter: "blur(2px)",
  },
};

function getCardmaker() {
  if (!startpageData) return null;
  const cards = startpageData.map((x) => {
    return (
      <Card
        key={x.id}
        info={{
          title: x.title,
          icon: x.icon,
          socialsInfo: x.links || [],
        }}
      />
    );
  });
  return cards;
}

function GetUser() {
  const username = localStorage.getItem("name");
  if (!username) {
    const a = prompt(
      "Ahh looks like this is your first time visting this site, Can u enter your name plz :)",
    );
    if (a) {
      localStorage.setItem("name", a);
    } else {
      localStorage.setItem("name", "Guest");
    }
  }
  return <>{username}</>;
}
function Container() {
  return (
    <>
      <div className="bg-gb-bg/45 text-gb-fg selection:bg-gb-fg selection:text-gb-green relative flex min-h-screen w-screen flex-col overflow-hidden transition-all">
        <Header />
        <div className="absolute -z-1 hidden h-full opacity-60 blur-2xl md:-left-10 md:block lg:left-65 dark:opacity-25 dark:blur-3xl">
          <div className="hidden dark:block">
            <svg
              version="1.1"
              id="svg1"
              width="1069.8104"
              height="776.1698"
              viewBox="0 0 1069.8104 776.1698"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs id="defs1" />
              <g id="g1" transform="translate(-170.02908,-4.9454246)">
                <path
                  style={{
                    fill: "#fbf1c7",
                  }}
                  d="M 170.02908,4.9454247 328.54768,274.50394 746.998,704.45694 1239.8395,781.11522 1117.094,654.4624 760.01644,349.49574 503.36691,131.18627 299.66388,5.2086451 Z"
                  id="path1"
                />
              </g>
            </svg>
          </div>
          <div className="block dark:hidden">
            <svg
              version="1.1"
              id="svg1"
              width="1069.8104"
              height="776.1698"
              viewBox="0 0 1069.8104 776.1698"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs id="defs1" />
              <g id="g1" transform="translate(-170.02908,-4.9454246)">
                <path
                  style={{
                    fill: "#b8bb26",
                  }}
                  d="M 170.02908,4.9454247 328.54768,274.50394 746.998,704.45694 1239.8395,781.11522 1117.094,654.4624 760.01644,349.49574 503.36691,131.18627 299.66388,5.2086451 Z"
                  id="path1"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="m-4 grow p-4">
          <main className="mx-auto mt-36 flex max-w-7xl flex-col items-center justify-between">
            <div className="relative mt-5 flex h-24 max-w-4xl items-center justify-center lg:mt-2">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.88,
                  filter: "blur(2px)",
                }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                className="from-gb-bright-green dark:from-gb-fg dark:to-gb-green to-gb-fg text-shadow-2xl bg-linear-to-r bg-clip-text p-4 text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl"
              >
                Welcome <span>{GetUser()}</span> &lt;3
              </motion.h1>
            </div>
            <Form />
            <motion.div
              variants={divanimate}
              initial="start"
              animate="animate"
              className="m-4 grid w-full grid-cols-1 gap-4 p-4 pt-8 md:grid-cols-2 lg:m-15 lg:grid-cols-3 lg:gap-7 lg:p-10"
            >
              {getCardmaker()}
            </motion.div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Container;
