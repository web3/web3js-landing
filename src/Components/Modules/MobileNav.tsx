import * as React from "react";
import { useDimensions } from "./use-dimensions";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileMenu } from "./MobileMenu";
import "./styles.css";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

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

const useStyles = makeStyles(({ palette}: ITheme) => {
  return createStyles({
    background: {
      position: "absolute",
      top: 0, left: 0, bottom: 0,
      height: "100vh",
      width: "100vw",
      background: palette.background.default,
    },
    
  })
})


export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const {dynamicHeight} = useDimensions();
  const classes = useStyles();
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={dynamicHeight}
      
    >
      <motion.div className={classes.background} variants={sidebar} />
      <MobileMenu />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};