import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        display: "flex",
        maxWidth: "1200px",
        flexDirection: "column",
        [breakpoints.up(800)]:{
          padding: "80px 96px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        [breakpoints.up(1800)]: {
          padding: "80px 0",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        },
        [breakpoints.down(1099)]: {
          padding: "80px 20px"
        },
      },
      gridContainer: {
        maxWidth: "1200px",
      },
      titleContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "1.5rem 1rem 3rem 1rem",
      },
      bold: {
        fontWeight: "bolder",
      },
      reduceLeading: {
        letterSpacing: "-1.25px",
      },
      titleText: {
        textAlign: "left",
        marginBottom: constants.generalUnit * 4,
        [breakpoints.down("md")]: {
          fontSize: "36px",
          lineHeight: "42px",
          marginBottom: constants.generalUnit * 2,
        }
      },
      bodyText: {
        fontSize: "18px",
        lineHeight: "26px",
        maxWidth: "500px",
      },
      timelineItem: {
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: constants.generalUnit * 4,
        [breakpoints.down('799px')]: {
          marginLeft: 0,
        }
      },
      timelineDate: {
        marginTop: constants.generalUnit,
        fontSize: "20px",
        textAlign: "center",
      },
      timelineText: {
        position: "relative",
      },
      timelineHeader: {
        fontSize: "20px",
        fontWeight: 600,
        marginLeft: constants.generalUnit * 4,
        marginBottom: constants.generalUnit * 2,
        [breakpoints.down('sm')]: {
          marginBottom: ".5rem",
          fontSize: "18px",
          lineHeight: `${constants.generalUnit * 3}px`,
        }
      },
      timelineBody: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "18px",
        lineHeight: "27px",
        marginLeft: constants.generalUnit * 4,
        maxWidth: "500px",
        [breakpoints.down('md')]: {
          maxWidth: "80%",
          fontSize: "16px",
          lineHeight: `${constants.generalUnit * 3}px`,
        }
      },
      timelineAvi: {
        margin: `0 ${constants.generalUnit * 4}px`,
      },
      dot: {
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: palette.primary.main,
        zIndex: 500,
        flexShrink: 0,
      },
      line: {
        position: "absolute",
        width: "2px",
        height: "105%",
        background: palette.additional["gray"][4],
        top: 24, left: -12,
        bottom: 0,
        [breakpoints.down('md')]: {
          height: "115%",
        }
      },
      avatar: {
        "& > img": {
          borderRadius: "50%",
          objectFit: "contain",
          width: "60px",
          height: "60px",
        }
      },

    })
  })

const Maintainers: React.FC = () => {
  const classes = useStyles();
  return (
      <div className={classes.container}>
      <div className={classes.gridContainer}>
        <div className={classes.titleContainer}>
          <Typography variant="h2" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <Trans>
              About Web3.js
            </Trans>
          </Typography>
          <Typography variant="body1" className={clsx(classes.bodyText)}>
            <Trans>
              Since 2014, Web3.js is an open-source collection of libraries which allow you to interact with a local or remote Ethereum node. Throughout its rich history, Web3.js would not have been possible without the vision, expertise and contributions made by committed individuals and organizations throughout the years.
            </Trans>
          </Typography>
        </div>
        <span className={classes.timelineItem}>
          <span className={classes.timelineAvi}>
            <div className={classes.avatar}>
              <img src="/jeffrey.jpg" alt="Jeffrey Wilcke"/>
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
              <img src="/marek.jpeg" alt="Marek Kotewicz" />
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
              <img src="fabian.jpeg" alt="Fabian Vogelsteller" />
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
              <img src="/samuel.jpeg" alt="Samuel Furter" />
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
              <img src="/ethereumjs.png" alt="ethereumjs" />
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
              <img src="chainsafe.png" alt="ChainSafe" />
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
    </div>
  )
}

export default Maintainers;