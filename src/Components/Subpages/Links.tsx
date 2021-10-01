import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        minHeight: "30vh",
        [breakpoints.up(1300)]: {
          height: "calc(100% - 80px)",
          paddingTop: "40px",
          paddingBottom: "40px",
        },
        [breakpoints.up(2560)]: {
          height: "calc(100% - 100px)",
          paddingTop: "50px",
          paddingBottom: "50px",
        },
        [breakpoints.down(1300)]: {
          height: "calc(100% - 40px)",
          paddingTop: "20px",
          paddingBottom: "20px",
        },
        [breakpoints.down(1079)]: {
          height: "calc(100% - 40px)",
          paddingTop: "20px",
          paddingBottom: "20px",
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
      bgDark: {
        background: "#0f0f0f",
      }
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
              <Trans>Examples</Trans>
            </a>
          </Typography>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.noUnderline, classes.black)}>
              <Trans>API Reference</Trans>
            </a>
          </Typography>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <a href="/" target="__blank" rel="noopener noreferrer" className={clsx(classes.black, classes.noUnderline)}>
              <Trans>Discord</Trans>
            </a>
          </Typography>
        </div>
      </section>
    </div >
  )
}

export default Links;