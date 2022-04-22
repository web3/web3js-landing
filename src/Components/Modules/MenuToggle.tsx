import {motion} from "framer-motion";
import {
  createStyles, ITheme, makeStyles
} from "@chainsafe/common-theme";

const useStyles = makeStyles(({ breakpoints }: ITheme) => {
  return createStyles({
    menuToggle: {
      [breakpoints.down(1170)]: {
        display: "block",
        cursor: "pointer",
      },
      display: "none",
      width: "30px",
      margin: "25px",
      zIndex: 400000,
      position: "absolute",
      right: 0,
      height: "30px",
      outline: "none",
      cursor: "pointer",
      border: "none",
      background: "transparent",
  },
  })
})

export const MenuToggle = ({toggle}:any) => {
  const classes = useStyles();
  return (
  <button className={classes.menuToggle} onClick={toggle} >
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="blue" strokeWidth={2}>
      <motion.path strokeWidth={2} stroke="#fff" d="M 2 2.5 L 20 2.5"
      variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <motion.path
        strokeWidth={2} stroke="#fff" 
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path strokeWidth={2} stroke="#fff" d="M 2 16.346 L 20 16.346"
         variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
  )
}
