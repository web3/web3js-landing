import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "./MobileMenu";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const useStyles = makeStyles(({ constants}: ITheme) => {
  return createStyles({
    navlink: {
      fontSize: "25px", listStyle: "none", display: "flex", alignItems: "center", justifyContent: "flex-end", cursor: "pointer", margin: `${constants.generalUnit * 2.5}px ${constants.generalUnit * 1}px`,
    },
    noUnderline: {
      textDecoration: "none",
      color: "#fff",
    }
  })
})

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -400}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MobileMenuItem = ({ linkUrl, name }:NavLink) => {

  const classes = useStyles();

  return (
    <motion.li
      className={classes.navlink}
      variants={variants}
      whileHover={{ x: -8}}
      whileTap={{ scale: 0.93 }}
    >
      <a target="__blank" rel="noopener noreferrer" href={linkUrl} className={classes.noUnderline}>{name}</a>
    </motion.li>
  );
};
