import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import { Typography } from "@chainsafe/common-components";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        [breakpoints.up(360)]:{
          flexDirection: "column",
        },
        [breakpoints.up(799)]:{
          padding: "0",
          flexDirection: "row",
          alignContents: "top",
        },
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
          // marginLeft: "10rem",
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
          width: "65%",
        },
        [breakpoints.up(1199)]: {
          flexDirection: "row",
          padding: "1rem 0",
        },
      },
      columnContentWrapper: {
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        width: "100%",
      },      
      reduceLeading: {
        letterSpacing: "-7px",
      },
      aboutItemHeading: {
        color: palette.additional["gray"][3],
        fontSize: "24px",
        lineHeight: "30px",
        fontWeight: 600,
        marginTop: constants.generalUnit,
      },
      descText: {
        color: palette.additional["gray"][7],
        fontSize: "24px",
        lineHeight: "30px",
        fontWeight: 400,
        marginTop: constants.generalUnit,
        maxWidth: "90%",
      },
      titleText: {
        color: palette.primary.main,
        textAlign: "left",
        display: "none",
        letterSpacing: "0.3px",
        fontWeight: "bold",
        [breakpoints.up(599)]:{
          display: "block",
          marginRight: "4rem",
          fontSize: "100px",
          lineHeight: "100px",
        },
      },
      aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        [breakpoints.up(799)]: {
          width: "70%",
        }
      },
      aboutItem: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
      },
      buttonGroup: {
        display: "flex",
      },
      noUnderline: {
        textDecoration: "none",
      },
    })
  })

const About: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.columnContentWrapper}>
          <Typography variant="h1" className={clsx(classes.reduceLeading, classes.titleText)}>
            web3.js is
          </Typography>
          <div className={classes.aboutTextWrapper}>
            <div className={classes.aboutItem}>
              <Typography variant="body2" className={classes.aboutItemHeading}>
                Comprehensive.
              </Typography>
              <Typography variant="body2" className={classes.descText}>
                Everything you need to start interacting with the Ethereum blockchain
              </Typography>
            </div>
            <div className={classes.aboutItem}>
              <Typography variant="body2" className={classes.aboutItemHeading}>
                Community-driven.
              </Typography>
              <Typography variant="body2" className={classes.descText}>
                Open-source and continuously updated since 2015
              </Typography>
            </div>
            <div className={classes.aboutItem}>
              <Typography variant="body2" className={classes.aboutItemHeading}>
                Modular.
              </Typography>
              <Typography variant="body2" className={classes.descText}>
                Import only the packages you need
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;