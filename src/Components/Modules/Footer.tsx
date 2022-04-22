import React from "react"
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme"
import { Grid, Typography } from "@chainsafe/common-components"
import {Trans} from "@lingui/macro";

const useStyles = makeStyles(({ palette, constants, breakpoints }: ITheme) => {
  return createStyles({
    root: {
      padding: "2rem 0 2rem 0",
      [breakpoints.up("xl")]: {
        maxWidth: "2560px",
        padding: "80px 72px",
      },
      [breakpoints.up("3800")]: {
        width: "100%",
        maxWidth: "unset",
      },
      paddingLeft: constants.generalUnit * 2,
      background: palette.additional["gray"][10],
    },
    linkWrapper: {
      display: "flex",
      flexGrow: 0,
      flexBasis: "200px",
      color: palette.additional["gray"][5],
      margin: "0 0 .5rem 0",
      "&:hover": {
        color: palette.primary.main,
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
      fontSize: "15px",
      color: palette.additional["gray"][8],
      [breakpoints.down("xl")]:{
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
        <Grid container>
          <Grid item className={classes.linkWrapper}>
            <Grid item className={classes.header}>
              <Typography variant="h5" >
                <strong><Trans>Resources</Trans></strong>
              </Typography>
            </Grid>
            <Grid item className={classes.item}>
              <a
                href="https://web3js.readthedocs.io/en/v1.5.2/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography variant="h5" className={classes.bold}>
                  <Trans>Tutorial</Trans>
                </Typography>
              </a>
            </Grid>
            <Grid item className={classes.item}>
              <a
                href="https://web3js.readthedocs.io/en/v1.5.2/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography variant="h5" className={classes.bold}>
                  Documentation
                  </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid item className={classes.linkWrapper}>
            <Grid item className={classes.header}>
              <Typography variant="h5" className={classes.bold}>
                <strong>Community</strong>
              </Typography>
            </Grid>
            <Grid item className={classes.item}>
              <a
                href="https://github.com/chainsafe/web3js"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography variant="h5" className={classes.bold}>
                  <Trans>GitHub</Trans>
                </Typography>
              </a>
            </Grid>
            <Grid item className={classes.item}>
              <a
                href="https://discord.com/invite/xSAwrnCWcg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Typography variant="h5" className={classes.bold}>
                  <Trans>Discord</Trans>
                </Typography>
              </a>
          </Grid>
          <Grid item className={classes.item}>
            <a
              href="hhttps://medium.com/chainsafe-systems/tagged/ethereum"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h5" className={classes.bold}>
                Blog
              </Typography>
            </a>
          </Grid>
          </Grid>

        </Grid>
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
              &copy; {currentYear} Maintained by ChainSafe Systems
            </Typography>
          </Grid>
        </Grid>
      </footer>
  )
}
export default Footer
