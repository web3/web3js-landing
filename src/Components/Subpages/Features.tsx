import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        [breakpoints.up(799)]:{
          marginTop: "2rem",
          flexDirection: "row",
        },
        flexDirection: "column",
        padding: "2rem 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      columnContentWrapper: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        [breakpoints.up(599)]: {
          padding: "0 2rem",
        }
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
        marginTop: "1.5rem",
        gridTemplateColumns: "minmax(100%, 1fr)",
        [breakpoints.up(599)]:{
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        alignContent: "center",
        [breakpoints.up(799)]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        }
      },
      spec: {
        display: "flex",
        flexDirection: "row",
        padding: "1rem 1rem 1rem 0",
        [breakpoints.up(799)]: {
          padding: "1rem 1rem 1rem 0",
        },
        "& > p": {
          color: palette.additional["gray"][5],
          fontSize: "24px",
          lineHeight: "26px",
          maxWidth: "85%",
          [breakpoints.up(599)]: {
            maxWidth: "400px",
          }
        }
      },
      square: {
        minWidth: "32px",
        width: "32px",
        height: "32px",
        borderRadius: "4px",
        background: palette.primary.dark,
        marginRight: "1rem",
      },
      orange5: {
        background: "#F06400",
      },
      orange4: {
        background: "#F57500",
      },
      orange3: {
        background: "#F98200",
      },
      orange2: {
        background: "#FB9400",
      },
      primLight: {
        background: palette.primary.light,
      },
    })
  })

const Features: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.columnContentWrapper}>        
        <Typography variant="h2" className={clsx(classes.reduceLeading, classes.titleText, classes.white)}>
          What you can do with web3.js
        </Typography>
        <div className={classes.featureContainer}>
          <div className={classes.spec}>
            <span className={classes.square}></span>
            <p>Interact with smart contracts as JS objects.</p>
          </div>
          <div className={classes.spec}>
            <span className={clsx(classes.orange5, classes.square)}></span>
            <p>Subscribe to specific on-chain events.</p>
          </div>
          <div className={classes.spec}>
            <span className={clsx(classes.orange4, classes.square)}></span>
            <p>Interact with the Ethereum Name Service.</p>
          </div>
          <div className={classes.spec}>
            <span className={clsx(classes.orange3, classes.square)}></span>
            <p>Utilities with built-in helpers for Ethereum dapps and web3 packages.</p>
          </div>
          <div className={classes.spec}>
            <span className={clsx(classes.orange2, classes.square)}></span>
            <p>Get block and state information from Ethereum nodes.</p>
          </div>
          
          <div className={classes.spec}>
            <span className={clsx(classes.primLight, classes.square)}></span>
            <p>Create accounts, process and sign transactions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;