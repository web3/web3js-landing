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
        fontSize: "250px",
        lineHeight: "250px",
        display: "none",
        fontWeight: "bold",
        [breakpoints.up(599)]:{
          display: "block",
          marginRight: "4rem",
          // marginLeft: "-2rem",
        },
      },
      aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        [breakpoints.up(799)]: {
          width: "65%",
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
          <Typography variant="h3" className={clsx(classes.reduceLeading, classes.titleText)}>
            It's
          </Typography>
          <div className={classes.aboutTextWrapper}>
            <div className={classes.aboutItem}>
              <Typography variant="body2" className={classes.aboutItemHeading}>
                Comprehensive.
              </Typography>
              <Typography variant="body2" className={classes.descText}>
                Everything you need to start interacting with the Ethereum blockchain, whether you're using HTTP, IPC or websocket.
              </Typography>
            </div>
            <div className={classes.aboutItem}>
              <Typography variant="body2" className={classes.aboutItemHeading}>
                Community-driven.
              </Typography>
              <Typography variant="body2" className={classes.descText}>
                Launched as an open-source library in 2015, and frequently updated to support 200k+ downloads each week on NPM.
              </Typography>
            </div>
            <div className={classes.aboutItem}>
              <Typography variant="body2" className={classes.aboutItemHeading}>
                Modular.
              </Typography>
              <Typography variant="body2" className={classes.descText}>
                Import only the packages you require; interact with smart contracts, query the blockchain, and more.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;