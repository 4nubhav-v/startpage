import { motion } from "motion/react";
function Footer() {
  return (
    <footer className="bg-gb-bg/30 text-gb-fg border-gb-bg1 w-full border-t p-4 px-4 py-4 text-center text-[0.875rem]">
      <aside>
        <motion.p
          className="font-ioskeleymono leading-0.5"
          initial={{ opacity: 0, filter: "blur(2px)" }}
          transition={{ delay: 0.2 }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
        >
          Copyright © {new Date().getFullYear()} - All right reserved by Anubhav
        </motion.p>
      </aside>
    </footer>
  );
}

export default Footer;
