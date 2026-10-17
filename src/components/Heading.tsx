import { motion } from "motion/react";
function Heading() {
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
  return (
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
  );
}

export default Heading;
