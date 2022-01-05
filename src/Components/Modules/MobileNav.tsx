import * as React from "react";
import { useDimensions } from "./use-dimensions";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";
import "./styles.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 1200px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 1200px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const {dynamicHeight} = useDimensions();
  console.log(dynamicHeight);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={dynamicHeight}
      
    >
      <motion.div className="background" variants={sidebar} />
      <MobileMenu />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};