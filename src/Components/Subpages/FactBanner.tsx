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
        padding: "40px",
        width: "calc(100% - 16px)",
        display: "block",
        maxWidth: "1200px",
      },
      bold: {
        fontWeight: 800,
      },
      primaryColor: {
        color: palette.primary.main,
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
        justifyContent: "center",
        alignItems: "center",
        [breakpoints.down('md')]: {
          flexDirection: "column",
        }
      },
      fact: {
        display: "flex",
        flexDirection: "column",
        margin: "0 4rem",
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

const FactBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <div className={classes.factsContainer}>
            <div className={classes.fact}>
              <Typography variant="h2" className={clsx(classes.bold, classes.primaryColor, classes.singleColText)}>
                <Trans>250,000+</Trans>
              </Typography>
              <Typography variant="h4" className={clsx(classes.bold, classes.singleColText)}>
                <Trans>Downloads each week</Trans>
              </Typography>
            </div>
            <div className={classes.fact}>
              <Typography variant="h2" className={clsx(classes.bold, classes.primaryColor, classes.singleColText)}>
                <Trans>3000+</Trans>
              </Typography>
              <Typography variant="h4" className={clsx(classes.bold, classes.singleColText)}>
                <Trans>Dependent projects</Trans>
              </Typography>
            </div>
          </div>
        </article>
      </div >
    </section >
  )
}

export default FactBanner;