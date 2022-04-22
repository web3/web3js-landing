import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import group from "./Icons/group.svg";
import laptop from "./Icons/laptop.svg";
import nft from "./Icons/nft.svg";
import trending from "./Icons/trending.svg";
import wallet from "./Icons/wallet.svg";
import loader from "./Icons/loader.svg";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        [breakpoints.up(360)]:{
          flexDirection: "column",
          padding: "2rem 0",
        },
        [breakpoints.up(799)]:{
          flexDirection: "row",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      column: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        borderRadius: "32px",
        background: palette.secondary.dark,
        padding: "3rem .5rem",
        [breakpoints.up(799)]: {
          flexDirection: "row",
        },
        [breakpoints.up(1199)]: {
          padding: "3rem 0",
        },
      },
      columnContentWrapper: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        padding: "0 2rem",
        width: "100%",
      },      
      bold: {
        fontWeight: 600,
      },
      reduceLeading: {
        letterSpacing: "-.85px",
      },
      white: {
        color: palette.common.white.main,
      },
      orange: {
        color: palette.primary.main,
      },
      titleText: {
        textAlign: "left",
        fontSize: "34px",
        lineHeight: "44px",
      },
      featureContainer: {
        display: "grid",
        gridTemplateColumns: "minmax(100%, 1fr)",
        [breakpoints.up(599)]:{
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        alignContent: "center",
        [breakpoints.up(799)]: {
          gridTemplateColumns: "repeat(3, 1fr)",
        }
      },
      spec: {
        display: "flex",
        flexDirection: "row",
        [breakpoints.up(799)]: {
          padding: "2.5rem 2rem",
        },
        "& > p": {
          fontSize: "20px",
          lineHeight: "26px",
          color: palette.additional["gray"][5],

        }
      },
      square: {
        width: "32px",
        height: "32px",
        background: palette.primary.dark,
        marginRight: "1rem",
      },
      orange5: {
        background: "#F06400",
      },
      primLight: {
        background: palette.primary.light,
      },
      primDark: {
        background: palette.primary.dark,
      },
    })
  })

const Features: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.column}>
        <div className={classes.columnContentWrapper}>        
          <Typography variant="h2" className={clsx(classes.reduceLeading, classes.titleText, classes.white)}>
            SDK Features
          </Typography>
          <div className={classes.featureContainer}>
            <div className={classes.spec}>
              <span className={classes.square}></span>
              <p>Interact with smart contracts as JS objects.</p>
            </div>
            <div className={clsx(classes.orange5, classes.spec)}>
              <span className={classes.square}></span>
              <p>Interact with smart contracts as JS objects.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;