import React from "react";
import { ITheme, makeStyles, createStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        overflowX: "hidden",
        minHeight: "30vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        [breakpoints.down(767)]: {
          alignItems: "flex-start",
        },
      },
      gridContainer: {
        paddingTop: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        width: "calc(100% - 16px)",
        display: "block",
        maxWidth: "1200px",
      },
      bold: {
        fontWeight: 800,
      },
      reduceLeading: {
        letterSpacing: "-1px",
      },
      white: {
        color: palette.common.white.main,
      },
      singleColText: {
        textAlign: "left",
        maxWidth: 420,
        fontWeight: 600,
      },
      titleText: {
        textAlign: "center",
        marginBottom: constants.generalUnit * 4,
        [breakpoints.down("md")]: {
          fontSize: "48px",
          lineHeight: "55px",
          maxWidth: "90%",
          textAlign: "left",
          marginBottom: constants.generalUnit * 2,
        }
      },
      marginTop: {
        marginTop: "1.25rem",
        [breakpoints.down(767)]: {
          marginTop: "1rem",
        },
      },
      contentContainer: {
        width: "100%",
        marginBottom: "80px",
        paddingLeft: constants.generalUnit,
        paddingRight: constants.generalUnit,
        display: "flex",
        flexDirection: "column",
        float: "left",
        [breakpoints.down(599)]: {
          marginBottom: "20px",
        }
      },
      factsContainer: {
        display: "flex",
        [breakpoints.down('md')]: {
          flexDirection: "column",
        }
      },
      fact: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "350px",
        borderRadius: constants.generalUnit,
        border: "1px solid #e8e8e8",
        padding: "1.5rem 2rem",
        marginRight: constants.generalUnit * 3,
        [breakpoints.down('md')]: {
          maxWidth: "100%",
          marginBottom: "1rem",
        },
        "& > span": {
          fontSize: "18px",
          maxWidth: "350px",
          [breakpoints.down('md')]: {
            maxWidth: "100%",
          },
        },
      },
      arrow: {
        marginLeft: constants.generalUnit,
        width: "24px",
        height: "24px",
      },
      noUnderline: {
        textDecoration: "none",
      },
      levitate: {
        "&:hover": {
          transform: "translateY(-4px)",
        },
        transition: "all .2s ease-in",
      }
    })
  })

const Why: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <Typography variant="h2" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <Trans>What you can do with Web3.js</Trans>
          </Typography>
          <div className={clsx(classes.marginTop, classes.factsContainer)}>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline)}>
                  <Trans>Interact with smart contracts as JS objects.</Trans>
                </a>
              </Typography>
              {/* <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a> */}
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Subscribe to specific on-chain events.</Trans>
                </a>
              </Typography>
              {/* <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a> */}
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={clsx(classes.singleColText)}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Interact with the Ethereum Name Service.</Trans>
                </a>
              </Typography>
              {/* <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a> */}
            </div>
          </div>
          <div className={clsx(classes.marginTop, classes.factsContainer)}>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline)}>
                  <Trans>Utilities with built-in helpers for Ethereum dapps and web3 packages.</Trans>
                </a>
              </Typography>
              {/* <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a> */}
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Get block and state information from Ethereum nodes. </Trans>
                </a>
              </Typography>
              {/* <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a> */}
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={clsx(classes.singleColText)}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Create accounts, process and sign transactions.</Trans>
                </a>
              </Typography>
              {/* <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a> */}
            </div>
          </div>
        </article>
      </div >
    </section >
  )
}

export default Why;