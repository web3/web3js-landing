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
          justifyContent: "space-evenly",
        }
      },
      fact: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "357px",
        borderRadius: constants.generalUnit,
        border: "1px solid #e8e8e8",
        padding: "1.5rem 1rem",
        marginRight: constants.generalUnit * 3,
        [breakpoints.down('md')]: {
          margin: ".5rem 0 .5rem 0",
          justifyContent: "space-evenly",
        },
        "& > span": {
          fontSize: "18px",
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
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <Trans>Why Web3.js?</Trans>
          </Typography>
          <div className={clsx(classes.marginTop, classes.factsContainer)}>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline)}>
                  <Trans>Connect to any EVM-compatible blockchain.</Trans>
                </a>
              </Typography>
              <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a>
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Connect to any EVM-compatible blockchain.</Trans>
                </a>
              </Typography>
              <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a>
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={clsx(classes.singleColText)}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Built-in cryptowallet authentication.</Trans>
                </a>
              </Typography>
              <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a>
            </div>
          </div>
          <div className={clsx(classes.marginTop, classes.factsContainer)}>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline)}>
                  <Trans>Connect to any EVM-compatible blockchain.</Trans>
                </a>
              </Typography>
              <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a>
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={classes.singleColText}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Connect to any EVM-compatible blockchain.</Trans>
                </a>
              </Typography>
              <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a>
            </div>
            <div className={clsx(classes.levitate, classes.fact)}>
              <Typography variant="body1" className={clsx(classes.singleColText)}>
                <a href="/" target="__blank" rel="noopener noreferrer" className={classes.noUnderline}>
                  <Trans>Built-in cryptowallet authentication.</Trans>
                </a>
              </Typography>
              <a href="/" target="__blank" rel="noopener noreferrer">
                <img className={classes.arrow} src="/arrow.png" alt="orange arrow link" />
              </a>
            </div>
          </div>
        </article>
      </div >
    </section >
  )
}

export default Why;