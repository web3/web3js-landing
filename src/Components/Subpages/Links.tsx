import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        minHeight: "30vh",
        [breakpoints.up(1300)]: {
          height: "calc(100% - 180px)",
          paddingTop: "90px",
          paddingBottom: "90px",
        },
        [breakpoints.up(1980)]: {
          height: "calc(100% - 360px)",
          paddingTop: "180px",
          paddingBottom: "180px",
          minHeight: "60vh",
        },
        [breakpoints.up(2560)]: {
          height: "calc(100% - 600px)",
          paddingTop: "300px",
          paddingBottom: "300px",
          minHeight: "60vh",
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "2rem",
        [breakpoints.up('md')]: {
          alignItems: "flex-start",
        },
        [breakpoints.down('sm')]: {
          alignItems: "flex-start",
          padding: "10rem 2rem"
        },
      },
      bold: {
        fontWeight: "bolder",
      },
      reduceLeading: {
        letterSpacing: "-1.25px",
      },
      black: {
        color: palette.common.black.main,
        transition: "all .2s ease-in",
        "&:hover": {
          color: palette.primary.main,
        }
      },
      gray: {
        color: palette.additional["gray"][6],
        transition: "all .2s ease-in",
        "&:hover": {
          color: palette.additional["gray"][10],
        }
      },
      titleText: {
        maxWidth: "800px",
        textAlign: "left",
        [breakpoints.down("md")]: {
          fontSize: "56px",
          lineHeight: "63px",
        }
      },
      noUnderline: {
        textDecoration: "none",
      },
    })
  })

const Links: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.contentContainer}>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline, classes.black)}>
              <Trans>Quick Start</Trans>
            </a>
          </Typography>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.black, classes.noUnderline)}>
              <Trans>Tutorial</Trans>
            </a>
          </Typography>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline, classes.black)}>
              <Trans>Docs</Trans>
            </a>
          </Typography>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.black, classes.noUnderline)}>
              <Trans>GitHub</Trans>
            </a>
          </Typography>
        </div>
        <div style={{ width: 900 }}></div>
      </section>
    </div>
  )
}

export default Links;