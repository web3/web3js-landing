import React from "react";
import { ITheme, makeStyles, createStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";
import Maintainers from "./Maintainers";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        // overflowX: "hidden",
        maxWidth: "1300px",
        // padding: "0 24px",
        marginTop: "32px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
      gridContainer: {
        paddingTop: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        width: "calc(100% - 16px)",
        display: "block",
        maxWidth: "1200px",
      },
      rightCard: {
        // marginBottom: "80px",
        paddingLeft: constants.generalUnit,
        paddingRight: constants.generalUnit,
        display: "flex",
        flexDirection: "column",
        float: "left",
        [breakpoints.down(599)]: {
          marginBottom: "20px",
        }
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
        marginBottom: constants.generalUnit * 3,
        [breakpoints.down("md")]: {
          fontSize: "48px",
          lineHeight: "55px",
          maxWidth: "100%",
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
      bodyText: {
        fontSize: "18px",
        lineHeight: "26px",
        maxWidth: "90%",
      },
      noUnderline: {
        textDecoration: "none",
      },
      imageContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      },
      img: {
        margin: "8px",
        transition: "all 0.3s ease-in",
        "&:hover": {
          transform: "translateY(-5px)",
        }
      },
      logo: {
        width: "120px",
        maxWidth: "120px",
        [breakpoints.down('md')]: {
          width: "100px",
          maxWidth: "100px",
        }
      }
    })
  })

const UsedBy2: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <article>
        <Maintainers/>
      </article>
      <article className={classes.rightCard}>
        <Typography variant="h2" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
          <Trans>Used by leading projects</Trans>
        </Typography>
        <div className={classes.imageContainer}>
          <div className={classes.img}>
            <img style={{width:"70px"}} className={classes.logo} src="/truffle.png" alt="truffle suite logo" />
          </div>
          <div className={classes.img}>
            <img className={classes.logo} src="/yearn.png" alt="yearn finance" />
          </div>
          <div className={classes.img}>
            <img className={classes.logo} src="/oz_color.png" alt="open zeppelin logo" />
          </div>
          <div className={classes.img}>
            <img style={{width:"100px"}} className={classes.logo} src="/ens.png" alt="ethereum name service logo" />
          </div>
          <div className={classes.img}>
            <img className={classes.logo} src="/opensea.png" alt="open sea nft marketplace" />
          </div>
        </div>
      </article>
    </section >
  )
}

export default UsedBy2;