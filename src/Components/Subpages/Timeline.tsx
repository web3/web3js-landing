import React from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import clsx from "clsx";
import { Button, Typography } from "@chainsafe/common-components";

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
      itemsContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
      },
      item:{
        margin: ".5rem 0",
        padding: "1.5rem 1rem",
        background: "#292929",
        borderRadius: "12px",
        width: "100%",
        "& > p": {
          fontSize: "20px",
          color: palette.additional["gray"][5],
        }
      },
      button: {
        fontSize: "18px",
        fontWeight: 600,
        borderRadius: "8px",
        padding: "2rem .5rem",
        color: palette.common.black.main,
        transition: "ease-in 0.25s",
        "&:hover": {
          opacity: "60%",
        }
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
            Latest Updates
          </Typography>
          <br></br>
          <Button className={classes.button} size="large">View full timeline</Button>
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.columnContentWrapper}>
          <div className={classes.itemsContainer}>
            <div className={classes.item}>
              <p>Update text goes here</p>
            </div>
            <div className={classes.item}>
              <p>Update text goes here</p>
            </div>
            <div className={classes.item}>
              <p>Update text goes here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;