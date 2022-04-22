import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        minHeight: "60vh",
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
          height: "calc(100% - 200px)",
          paddingTop: "100px",
          paddingBottom: "100px",
          minHeight: "40vh",
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
      heroContentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2rem",
        [breakpoints.up('md')]: {
          alignItems: "center",
        },
        [breakpoints.down('sm')]: {
          alignItems: "flex-start",
          padding: "10rem 2rem"
        },
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
          maxWidth: "100%",
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
        transition: "all ease-in-out 0.2s",
        "&:hover, &:active, &:focus": {
          background: palette.primary.main,
        }
      },
      darkButton: {
        background: palette.additional["gray"][9],
        color: palette.common.white.main,
        fontSize: "18px",
        lineHeight: "26px",
        transition: "all ease-in-out 0.2s",
        "&:hover, &:active, &:focus": {
          background: palette.primary.main,
        }
      }
    })
  })

const Hero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <section>
        <div className={classes.heroContentContainer}>
          <Typography variant="h1" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            <Trans>
              The JavaScript library for building on Ethereum.
            </Trans>
          </Typography>
          <br />
          <br />
          <div className={classes.buttonGroup}>
            <Button size="large" variant="danger" className={clsx(classes.bold, classes.lightButton)}
            >
              <a className={classes.noUnderline} href="https://github.com/chainsafe/web3.unity" rel="noopener noreferrer" target="_blank">
                <Trans>Tutorial</Trans>
              </a>
            </Button>
            <Button size="large" variant="danger" className={clsx(classes.bold, classes.darkButton)}>
              <a className={clsx(classes.white, classes.noUnderline)} href="https://chainsafe.github.io/game-docs/" rel="noopener noreferrer" target="_blank">
                <Trans>Docs</Trans>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero;