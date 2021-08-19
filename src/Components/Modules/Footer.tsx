import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Grid, Typography } from "@chainsafe/common-components"
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(({ palette, constants, breakpoints }: ITheme) => {
  return createStyles({
    root: {
      padding: "2rem 0 2rem 0",
      [breakpoints.up("xl")]: {
        maxWidth: "2560px",
        padding: `80px 72px 80px 72px`,
      },
      [breakpoints.up("3800")]: {
        maxWidth: "2560px",
      },
      paddingLeft: constants.generalUnit * 2,
    },
    linkWrapper: {
      display: "flex",
      flexGrow: 0,
      flexBasis: "200px",
      color: palette.additional["gray"][5],
      margin: "0 0 .5rem 0",
      "&:hover": {
        color: palette.additional["gray"][8],
        transition: "ease-in 0.2s",
      },
      "& a": {
        color: palette.additional["gray"][7],
        textDecoration: "none",
        "&:hover": {
          color: palette.additional["gray"][3],
          transition: "ease-in 0.2s",
        },
      },
      [breakpoints.down("sm")]: {
        flexGrow: 1,
        flexBasis: "100%",
      },
      [breakpoints.down("xl")]: {
        margin: "1rem",
      },
      [breakpoints.up("xl")]: {
        flexBasis: "400px",
      },
    },
    bold: {
      fontWeight: 600,
    },
    header: {
      display: "block",
      paddingBottom: constants.generalUnit,
      flex: 0,
    },
    gray8: {
      color: palette.additional["gray"][8],
    },
    item: {
      display: "block",
      flex: 0,
      paddingBottom: constants.generalUnit,
    },
    smalltextContainer: {
      [breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        marginBottom: constants.generalUnit,
      },
    },
    copyright: {
      position: "absolute",
      color: palette.additional["gray"][8],
      [breakpoints.down("xl")]: {
        marginLeft: constants.generalUnit * 2,
      },
      [breakpoints.up("xl")]: {
        textAlign: "left",
        fontSize: "1rem",
        color: palette.additional["gray"][7],
      },
    },
  })
})

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Grid
        container
        xs={12}
        md={4}
        xl={4}
        justifyContent="flex-start"
        className={classes.smalltextContainer}
      >
        <Grid item>
          <Typography component="p" variant="body1" className={classes.copyright}>
            &copy; {currentYear} ChainSafe Systems, <Trans>All Rights Reserved.</Trans>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}
export default Footer
