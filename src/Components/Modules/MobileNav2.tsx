import * as React from "react";
import { useDimensions } from "./use-dimensions";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import "./styles.css";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";
import { discordUrl, docsUrl } from "../../urls";

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
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export interface NavLink {
  id?: number;
  name: string;
  linkUrl: string;
}


const useStyles = makeStyles(({ palette, constants }: ITheme) => {
  return createStyles({
    background: {
      position: "absolute",
      top: 0, left: 0, bottom: 0,
      height: "100vh",
      width: "100vw",
      background: palette.background.default,
    },
      navMenu: {
      top: "100px",
      position: "absolute",
      right: "0",
      padding: "25px",
      maxWidth: "80%",
  },
  navlink: {
      fontSize: "25px", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", margin: `${constants.generalUnit * 2.5}px ${constants.generalUnit * 1}px`,
    },
    noUnderline: {
      textDecoration: "none",
      color: "#fff",
  }
  })
})

const navlinks: NavLink[] = [
  {
    id: 1,
    name: "Docs",
    linkUrl: docsUrl
  },
  {
    id: 2,
    name: "Join Discord",
    linkUrl: discordUrl
  },
  {
    id: 3,
    name: "Blog",
    linkUrl: "https://medium.com/chainsafe-systems"
  },
  {
    id: 4,
    name: "GitHub",
    linkUrl: "https://github.com/web3/web3.js"
  },
]


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
        <motion.ul 
        variants={variants}
        className={classes.navMenu}
      >
        {navlinks.map(i => (
          <motion.li
            className={classes.navlink}
            variants={variants}
            whileHover={{ x: -8}}
            whileTap={{ scale: 0.93 }}
          >
            <a target="__blank" rel="noopener noreferrer" href={i.linkUrl} className={classes.noUnderline}>{i.name}</a>
            </motion.li>
        ))}
      </motion.ul>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};