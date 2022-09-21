import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import { Typography } from '@chainsafe/common-components';

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        flexDirection: "column",
        [breakpoints.up(599)]:{
          padding: "2rem",
          flexDirection: "row",
        },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      leftColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "2rem 0",
        [breakpoints.up(799)]: {
          flexDirection: "row",
          width: "50%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
        },
      },
      rightColumn: {
        padding: "0",
        width: "100%",
        [breakpoints.up(799)]: {
          flexDirection: "row",
          width: "50%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
        },
      },
      columnContentWrapper: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      },      
      bold: {
        fontWeight: 600,
      },
      reduceLeading: {
        letterSpacing: "-1.25px",
      },
      white: {
        color: palette.common.white.main,
      },
      titleText: {
        color: palette.additional["gray"][3],
        textAlign: "left",
        fontSize: "48px",
        lineHeight: "56px",
      },
      noUnderline: {
        textDecoration: "none",
      },
      itemsContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
      },
      item:{
        margin: ".5rem 0",
        padding: "1.5rem 1rem",
        background: "#292929",
        borderRadius: "12px",
        width: "100%",
        transition: "all .3s ease-out",
        "& > a > p": {
          fontSize: "20px",
          color: palette.additional["gray"][5],
          transition: "0.2s ease-in",
          "&:hover": {
            opacity: "60%",
          },
        },
        "&:hover": {
          background: "#121212",
        }
      },
      button: {
        fontSize: "18px",
        fontWeight: 600,
        borderRadius: "8px",
        padding: ".7rem 1rem",
        color: palette.common.white.main,
        transition: "ease-in 0.25s",
        marginBottom: "1rem",
        background: "#292929",
        "&:hover": {
          opacity: "60%",
        },
        "&:first-of-type":{
          color: palette.common.black.main,
          background: palette.primary.main,
        },
      }
    })
  })

const Timeline: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <div className={classes.columnContentWrapper}>   
          <Typography variant="h3" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            Latest Updates
          </Typography>
          <br></br>
          <a className={classes.button} href="https:/web3js.org/maintainers" target="_blank" rel="noopener noreferrer">About the maintainers</a>
          <a className={classes.button} href="https://discord.gg/rvwGWZPt" target="_blank" rel="noopener noreferrer">Join Discord</a>
          {/* <a className={classes.button} href="/maintainers">Read Project History</a> */}
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.columnContentWrapper}>
          <div className={classes.itemsContainer}>
            <div className={classes.item}>
              <a href="https://twitter.com/ChainSafeth/status/1541434996094709763" target="_blank" rel="noopener noreferrer"><p>Version 1.7.4 is live!</p></a>
            </div>
            <div className={classes.item}>
              <a href="https://twitter.com/ChainSafeth/status/1507414169725075456" target="_blank" rel="noopener noreferrer"><p>Announcing the Chainlink plugin into web3.js</p></a>
            </div>
            <div className={classes.item}>
              <a href="https://blog.chainsafe.io/the-future-of-web3-js-v3-0-0-release-ecc9feecb2de" target="_blank" rel="noopener noreferrer"><p>The Future of web3.js</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;