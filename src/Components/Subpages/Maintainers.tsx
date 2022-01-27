import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        [breakpoints.up(1300)]: {
          height: "calc(100% - 180px)",
          paddingTop: "90px",
          paddingBottom: "90px",
        },
        [breakpoints.down(1300)]: {
          height: "calc(100% - 140px)",
          paddingTop: "70px",
          paddingBottom: "70px",
        },
        [breakpoints.down(1079)]: {
          height: "calc(100% - 100px)",
          paddingTop: "50px",
          paddingBottom: "50px",
        },
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "flex-start",
      },
      heroContentContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "1rem 2rem",
        marginBottom: "50px",
      },
      semibold: {
        fontWeight: 800,
      },
      bold: {
        fontWeight: "bolder",
      },
      reduceLeading: {
        letterSpacing: "-1.25px",
      },
      white: {
        color: palette.common.white.main,
      },
      singleColText: {
        [breakpoints.up('md')]: {
          textAlign: "center",
        },
        [breakpoints.down('md')]: {
          textAlign: "left"
        },
        maxWidth: 600,
      },
      orange: {
        color: palette.primary.main,
      },
      titleText: {
        textAlign: "center",
        maxWidth: "800px",
        [breakpoints.down("md")]: {
          textAlign: "left",
          fontSize: "56px",
          lineHeight: "63px",
        }
      },
      buttonGroup: {
        display: "flex",
      },
      noUnderline: {
        textDecoration: "none",
      },
      lightButton: {
        background: palette.additional["gray"][4],
        color: palette.common.black.main,
        fontSize: "18px",
        lineHeight: "26px",
        marginRight: constants.generalUnit * 2,
        padding: constants.generalUnit,
        transition: "all ease-in-out 0.2s",
        "&:hover, &:active, &:focus": {
          background: palette.primary.main,
        }
      },
      timelineItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "32px",
      },
      timelineDate: {
        marginTop: "60px",
        fontSize: "20px",
        textAlign: "center",
      },
      timelineText: {
        position: "relative",
      },
      timelineHeader: {
        fontSize: "20px",
        fontWeight: 600,
        marginLeft: "2rem",
        marginBottom: "1rem",
        [breakpoints.down('sm')]: {
          marginBottom: ".5rem",
          fontSize: "18px",
          lineHeight: "25px",
        }
      },
      timelineBody: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "18px",
        lineHeight: "27px",
        marginLeft: "2rem",
        maxWidth: "500px",
        [breakpoints.down('sm')]: {
          maxWidth: "80%",
          fontSize: "16px",
          lineHeight: "25px",
        }
        
      },
      timelineAvi: {
        margin: "0 2rem",
      },
      dot: {
        width: "26px",
        height: "26px",
        borderRadius: "50%",
        background: palette.primary.main,
        zIndex: 500,
        flexShrink: 0,
      },
      line: {
        position: "absolute",
        width: "2px",
        height: "120%",
        background: palette.additional["gray"][6],
        top: 24, left: -14,
        bottom: 0,
      },
      avatar: {
        width: "60px",
        height: "60px",
        background: "#b8b8b8",
        borderRadius: "50%",
      },

    })
  })

const Maintainers: React.FC = () => {
  const classes = useStyles();
  return (
      <div className={classes.container}>
        <div className={classes.heroContentContainer}>
          <Typography variant="h2" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <Trans>
              Project history
            </Trans>
          </Typography>
        </div>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="" />
            <div className={classes.timelineDate}>2014</div>
            </div>
          </span>
          <span className={classes.dot}></span>
          <span className={classes.timelineText}>
            <section className={classes.line}></section>
            <div className={classes.timelineHeader}>Jeffrey Wilcke</div>
            <div className={classes.timelineBody}>Web3.js started with its initial commit on September 30, 2014 by Jeffrey Wilcke, co-founder of Ethereum. Initialized and developed as an Ethereum JavaScript API which implements the generic Ethereum JSON-RPC spec. His contributions paved the way for developers to easily interact with the Ethereum blockchain through Web3.js.</div>
          </span>
        </span>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="" />
            <div className={classes.timelineDate}>2014</div>
            </div>
          </span>
          <span className={classes.dot}></span>
          <span className={classes.timelineText}>
            <section className={classes.line}></section>
            <div className={classes.timelineHeader}>Merek Kotewicz</div>
            <div className={classes.timelineBody}>In late 2014, Merek Kotewicz of Parity Tech took over as lead maintainer of Web3.js until 2017. As the #2 all-time contributor to Web3.js, his version 0.x contributions helped to extend Web3.js functionality and its capabilities as the middleware of choice for a huge influx of new Ethereum JavaScript developers</div>
          </span>
        </span>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="" />
            <div className={classes.timelineDate}>2015</div>
            </div>
          </span>
          <span className={classes.dot}></span>
          <span className={classes.timelineText}>
            <section className={classes.line}></section>
            <div className={classes.timelineHeader}>Fabian Vogelsteller</div>
            <div className={classes.timelineBody}>In early 2015, Fabian Vogelsteller joined Merek Kotewicz in maintaining Web3.js. As the creator of the famous ERC-20 token standard, Fabian's expertise expands to overhauling the Web3.js APIs in 2019 to the version 1.x standard we all know of today. As the lead maintainer of the library from 2017 to 2018, his contributions to Web3.js live on to this day as the #1 all time contributor to the repository.</div>
          </span>
        </span>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="" />
            <div className={classes.timelineDate}>2018</div>
            </div>
          </span>
          <span className={classes.dot}></span>
          <span className={classes.timelineText}>
            <section className={classes.line}></section>
            <div className={classes.timelineHeader}>Samuel Furter</div>
            <div className={classes.timelineBody}>In July 2018, Samuel joined the Ethereum Foundation to take over as the lead maintainer of Web3.js. The importance of this library to the Ethereum JS community made Samuel's contributions vital to Ethereum's success as more JavaScript developers joined the Ethereum ecosystem. Samuel propelled version 1.x out of beta state and ensured its stability throughout Ethereum's tremendous developer growth.</div>
          </span>
        </span>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="" />
            <div className={classes.timelineDate}>2019</div>
            </div>
          </span>
          <span className={classes.dot}></span>
          <span className={classes.timelineText}>
            <section className={classes.line}></section>
            <div className={classes.timelineHeader}>EthereumJS</div>
            <div className={classes.timelineBody}>
              In 2019, Ryan Ghods and Christopher Gewecke of EthereumJS started to take over maintenance of Web3.js. Their contributions up to version 1.2.x allowed Web3.js users to reliably depend upon Web3.js for their JavaScript needs on Ethereum. Their focus on stability and improvements directly resulted to the 3000+ projects which depend on this library today to achieve their project needs.
            </div>
          </span>
        </span>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="" />
            <div className={classes.timelineDate}>2020</div>
            </div>
          </span>
          <span className={classes.dot}></span>
          <span className={classes.timelineText}>
            <section className={classes.line}></section>
            <div className={classes.timelineHeader}>ChainSafe</div>
            <div className={classes.timelineBody}>
              In June 2020, ChainSafe officially took over as the lead maintainer of the Web3.js library. As Ethereum continues to grow and improve over time, the tools must evolve with it. ChainSafe is leading the TypeScript rewrite of the outdated Web3.js library to provide an improved developer experience for all in the Ethereum JavaScript community. ChainSafe continues to build upon and maintain this vital public good with the financial support of the Ethereum Foundation and Nomic Labs.
            </div>
          </span>
        </span>
    </div>
  )
}

export default Maintainers;