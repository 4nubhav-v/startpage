import { motion, stagger } from "motion/react";
import Card from "./Card.tsx";
import startpageData from "./data.ts";
function CardGroup() {
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
  return (
    <motion.div
      variants={divanimate}
      initial="start"
      animate="animate"
      className="m-4 grid w-full grid-cols-1 gap-4 p-4 pt-8 md:grid-cols-2 lg:m-15 lg:grid-cols-3 lg:gap-7 lg:p-10"
    >
      {getCardmaker()}
    </motion.div>
  );
}

export default CardGroup;
