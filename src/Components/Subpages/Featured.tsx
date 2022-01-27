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
        background: palette.additional["gray"][4],
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        [breakpoints.down(767)]: {
          alignItems: "flex-start",
        },
      },
      gridContainer: {
        padding: "30px",
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
      bodyText: {
        fontSize: "18px",
        lineHeight: "26px",
        maxWidth: "90%",
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
          // flexDirection: "column",
          flexWrap: "wrap",
        }
      },
      fact: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "357px",
        marginRight: constants.generalUnit * 3,
        [breakpoints.down('md')]: {
          margin: "1rem 0 1rem 0",
          justifyContent: "space-evenly",
        }
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

const Featured: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <div className={classes.factsContainer}>
            <div className={classes.fact}>
              <Typography variant="h4" className={clsx(classes.bold, classes.singleColText)}>
                <Trans>Comprehensive.</Trans>
              </Typography>
              <Typography variant="body1" className={clsx(classes.marginTop, classes.bodyText, classes.singleColText)}>
                <Trans>Everything you need to start interacting with the Ethereum blockchain, whether you're using HTTP, IPC or websocket.
                </Trans>
              </Typography>
            </div>
            <div className={classes.fact}>
              <Typography variant="h4" className={clsx(classes.bold, classes.singleColText)}>
                <Trans>Community driven.</Trans>
              </Typography>
              <Typography variant="body1" className={clsx(classes.marginTop, classes.bodyText, classes.singleColText)}>
                <Trans>Launched as an open-source library in 2015, and frequently updated to support 200k+ downloads each week on NPM.</Trans>
              </Typography>
            </div>
            <div className={classes.fact}>
              <Typography variant="h4" className={clsx(classes.bold, classes.singleColText)}>
                <Trans>Modular.</Trans>
              </Typography>
              <Typography variant="body1" className={clsx(classes.marginTop, classes.bodyText, classes.singleColText)}>
                <Trans>Import only the packages you require; interact with smart contracts, query the blockchain, and more.</Trans>
              </Typography>
            </div>
          </div>
        </article>
      </div >
    </section >
  )
}

export default Featured;