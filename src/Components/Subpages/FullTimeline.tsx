import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import { Link, Typography } from "@chainsafe/common-components";
import Maintainers from "./Maintainers";
import web3js from "../../assets/images/web3js.png"
import hero from "../../assets/images/hero.png"

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        [breakpoints.up(360)]:{
          flexDirection: "column",
        },
        [breakpoints.up(799)]:{
          padding: "1rem 0",
          flexDirection: "row",
        },
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      },
      leftColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "2rem 0",
        [breakpoints.up(799)]: {
          flexDirection: "row",
          width: "30%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
          padding: "2rem 0",
        },
        "&:first-of-type":{
          [breakpoints.up(799)]:{
            marginRight: "1rem",
            marginBottom: 0,
          }
        }
      },
      rightColumn: {
        padding: "0",
        width: "100%",
        [breakpoints.up(799)]: {
          flexDirection: "row",
          width: "60%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
          padding: "2rem 0",
          marginRight: "2rem",
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
      descText: {
        color: palette.additional["gray"][7],
        fontSize: "24px",
        lineHeight: "30px",
        marginTop: constants.generalUnit,
      },
      titleText: {
        color: palette.additional["gray"][3],
        textAlign: "left",
        fontSize: "34px",
        lineHeight: "44px",
        display: "block",
        [breakpoints.up(799)]:{
          display: "none",
        },
        [breakpoints.up(1199)]: {
          fontSize: "56px",
          lineHeight: "64px",
        }
      },
      buttonGroup: {
        display: "flex",
      },
      noUnderline: {
        textDecoration: "none",
      },
      testCard: {
        width: "100%",
        background: palette.secondary.dark,
        marginBottom: "1rem",
        "& > img": {
          borderRadius: "1rem",
          width: "100%",
        }
      },
      brand: {
        maxWidth: "120px",
        display: "none",
        [breakpoints.up(799)]:{
          display: "block",
        }
      },
      linksWrapper: {
        display: "flex",
        flexDirection: "column",
        marginTop: "1.5rem",
      },
      link: {
        display: "flex",
        alignItems: "center",
      },
      stackedLink: {
        ...typography.body1,
        color: palette.additional["gray"][3],
        fontWeight: 600,
        alignSelf: "center",
        transition: "ease-out 0.3s",
        "&:hover": {
          color: palette.additional["gray"][8],
        },
        [breakpoints.down(799)]:{ 
          fontSize: "18px",
        }
      },
      stackedIndicator: {
        width: "12px",
        height: "50px",
        background: palette.primary.main,
        marginRight: ".5rem",
      },
      primLight: {
        background: palette.primary.light,
      },
      primDark: {
        background: palette.primary.dark,
      },
      displayOnWide: {
        display: "none",
        [breakpoints.up(599)]:{
          display: "block",
        padding: 0,
      },
      }
    })
  })

const FullTimeline: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <div className={classes.columnContentWrapper}>   
          <img className={classes.brand} src={web3js} alt="Abstract pattern of gemoetric shapes"/>
          <div className={classes.linksWrapper}>
            <div className={classes.link}>
              <div className={clsx(classes.primDark, classes.stackedIndicator)}></div><Link className={classes.stackedLink} to="/">Back to home</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.columnContentWrapper}>
          <div className={classes.testCard}><img src={hero} alt="Abstract pattern of gemoetric shapes"/></div>
          <Typography variant="h1" className={clsx(classes.reduceLeading, classes.titleText, classes.displayOnWide)}>
            The maintainers behind web3.js
          </Typography>
          <Maintainers/>
        </div>
      </div>
    </div>
  )
}

export default FullTimeline;