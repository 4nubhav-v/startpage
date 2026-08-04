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
      <html className="bg-gb-bg text-gb-fg selection:bg-gb-fg selection:text-gb-green relative flex min-h-screen w-full scrollbar-none flex-col bg-linear-to-b from-10% via-50% to-90%">
        <Header />
        <div className="m-4 grow p-4">
          <div className="mx-auto mt-36 flex max-w-7xl flex-col items-center justify-between">
            <div className="relative mt-5 flex h-24 max-w-4xl items-center justify-center lg:mt-2">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.88,
                  filter: "blur(2px)",
                }}
                transition={{ type: "spring", bounce: 0.65, delay: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                className="from-gb-fg to-gb-green text-shadow-2xl bg-linear-to-r bg-clip-text p-4 text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl"
              >
                Welcome <span>{GetUser()}</span> &lt;3
              </motion.h1>
              <div className="lg:left-max bg-gb-fg/30 animate-fade-in absolute left-1 h-20 w-14 rounded-full blur-3xl lg:w-20"></div>
              <div className="lg:right-max bg-gb-green/30 animate-fade-in absolute right-1 h-20 w-14 rounded-full blur-3xl lg:w-20"></div>
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
          </div>
        </div>
        <Footer />
      </html>
    </>
  );
}

export default Container;
