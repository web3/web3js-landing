import React from "react";
import {ITheme, makeStyles, createStyles} from "@chainsafe/common-theme";
import {Typography} from "@chainsafe/common-components";

const useStyles = makeStyles(
  ({constants, palette, breakpoints}: ITheme) => {
    return createStyles({
      container: {
        paddingTop: `${constants.headerHeight}px`,
        display: "flex",
        justifyContent: "center",
        background: "#1b1b1b",
        height: "auto",
      },
      linksContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [breakpoints.up("sm")]:{
          margin: "0 1rem",
          padding: ".6rem .5rem",
        },
        [breakpoints.down("sm")]: {
          margin: "0",
          padding: 0,
        },
        height: "40px",
      },
      navlink: {
        color: palette.common.white.main,
        [breakpoints.up("sm")]:{
          margin: `0 ${constants.generalUnit * 2}px`,
        },
        [breakpoints.down("sm")]: {
          margin: `0 ${constants.generalUnit}px`,
          fontSize: "14px",
        },
        margin: "0 1rem",
        textDecoration: "none",
        "&:hover": {
          color: palette.additional["gray"][6],
          transition: "ease-in 0.1s",
        },
      },
    })
  }
)

const InternalNav: React.FC = () => {
  const classes = useStyles()
  return(
    <div className={classes.container}>
      <div className={classes.linksContainer}>
          <Typography variant="h5">
            <a href="https://chainbridge.chainsafe.io" target="__blank" rel="noreferrer noopener"className={classes.navlink}>Banner with some text announcing a new release!</a>
          </Typography>
       
      </div>
    </div>
  )
}

export default InternalNav;