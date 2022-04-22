import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import { Typography } from "@chainsafe/common-components";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        flexDirection: "column",
        [breakpoints.up(599)]:{
          padding: "2rem",
          flexDirection: "row",
        },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      leftColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "2rem 0",
        [breakpoints.up(799)]: {
          flexDirection: "row",
          width: "50%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
        },
      },
      rightColumn: {
        padding: "0",
        width: "100%",
        [breakpoints.up(799)]: {
          flexDirection: "row",
          width: "50%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
        },
      },
      columnContentWrapper: {
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
      },      
      bold: {
        fontWeight: 600,
      },
      reduceLeading: {
        letterSpacing: "-1.25px",
      },
      white: {
        color: palette.common.white.main,
      },
      titleText: {
        color: palette.additional["gray"][3],
        textAlign: "left",
        fontSize: "48px",
        lineHeight: "56px",
      },
      noUnderline: {
        textDecoration: "none",
      },
      logosContainer: {
        display: "grid",
        alignContent: "center",
        gridTemplateColumns: "repeat(4, 1fr)",
        [breakpoints.up(1199)]: {
          gridTemplateColumns: "repeat(5, 1fr)",
        }
      },
      logo: {
        margin: "0 2rem 2rem 0",
        width: "70px",
        [breakpoints.up(799)]: {
          padding: "1rem",
          margin: 0,
          width: "120px",
        },
      }
    })
  })

const Timeline: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <div className={classes.columnContentWrapper}>   
          <Typography variant="h3" className={clsx(classes.bold, classes.reduceLeading, classes.titleText)}>
            Used by leading projects
          </Typography>
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.columnContentWrapper}>
          <div className={classes.logosContainer}>
            <img className={classes.logo} src="/truffle.png" alt="truffle suite logo" />
            <img className={classes.logo} src="/yfi.png" alt="Yearn Finance yield aggregator logo" />
            <img className={classes.logo} src="/oz.png" alt="truffle suite logo" />
            <img className={classes.logo} src="/ens.png" alt="Ethereum Name Service Logo" />
            <img className={classes.logo} src="/opensea.png" alt="OpenSea NFT Platform" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;