import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles, useMediaQuery
} from "@chainsafe/common-theme";
import { Grid, Typography, useScrollToTop } from "@chainsafe/common-components";
import { Trans } from "@lingui/macro"
import { MobileNav } from "./MobileNav";


const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: constants.generalUnit * 9,
      position: "fixed",
      padding: "0.7rem",
      zIndex: zIndex?.layer4,
      background: "#fafafa",
      [breakpoints.down('1170px')]: {
        justifyContent: "flex-end",
      },
      [breakpoints.down('sm')]: {
        padding: "none",
      }
    },
    linksMenu: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    logo: {
      width: constants.generalUnit * 4,
      height: constants.generalUnit * 4,
      margin: constants.generalUnit,
    },
    brandName: {
      color: palette.common.black.main,
      marginLeft: constants.generalUnit,
      textDecoration: "none",
    },
    link: {
      textDecoration: "none",
      fontSize: "20px",
      cursor: "pointer",
      padding: "1rem",
      color: palette.common.black.main,
      transition: "all .2s ease-out",
      '&:hover': {
        transform: "translateY(-2px)",
      },
      "&:first-of-type": {
        marginRight: constants.generalUnit * 2,
      },
      "& > span": {
        color: "red",
        fontSize: "12px",
        position: "absolute",
        marginLeft: constants.generalUnit / 2,
      }
    },
    navlink: {
        color: palette.common.black.main,
        textDecoration: "none",
        fontWeight: "bold",
        "&:hover": {
          color: palette.primary.main,
          transition: "ease-in 0.2s",
        },
        [breakpoints.up('sm')]: {
          marginRight: `${constants.generalUnit * 2}px`
        }
      },
    flex: {
      display: "flex",
      alignItems: "center",
    }
  })
})


const NavBar: React.FC = () => {

  const classes = useStyles();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1170px)");

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const scrollToTop = useScrollToTop();

  return (
    <nav className={classes.container}>
      {scrollToTop}
      {!isMobile && 
      <Grid item alignItems="center" className={classes.linksMenu}>
        <Grid container justifyContent="flex-start" alignItems="center">
          <Grid item alignItems="flex-start">
            <div className={classes.flex}>
              <img
                className={classes.logo}
                src="/web3js.png"
                alt="web3js logo"
              />
              <Typography variant="h5">
                <a href="/" className={classes.navlink}>
                  Web3.js
                </a>
              </Typography>
            </div>
          </Grid>
            <Typography variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://web3js.readthedocs.io/en/v1.5.2/"
                className={classes.navlink}
              >
                <Trans>Tutorial</Trans>
              </a>
            </Typography>
            <Typography variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://web3js.readthedocs.io/en/v1.5.2/"
                className={classes.navlink}
              >
                <Trans>API</Trans>
              </a>
            </Typography>
            <Typography variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://web3js.readthedocs.io/en/v1.5.2/"
                className={classes.navlink}
              >
                <Trans>Docs</Trans>
              </a>
            </Typography>
            <Typography variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/xSAwrnCWcg"
                className={classes.navlink}
              >
                <Trans>Community</Trans>
              </a>
            </Typography>
            <Typography variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/chainsafe-systems"
                className={classes.navlink}
              >
                <Trans>Blog</Trans>
              </a>
            </Typography>
            <Typography variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/chainsafe/web3.js"
                className={classes.navlink}
              >
                <Trans>Github</Trans>
              </a>
            </Typography>
          </Grid>
        </Grid>}
      {(isMobile && !isNavVisible) && (
      <Grid container justifyContent="flex-start" alignItems="center" className={classes.linksMenu}>
        <Grid item >
            <div style={{display: "flex", alignItems: "center"}}>
              <img
                className={classes.logo}
                src="/web3js.png"
                alt="web3js logo"
              />
              <Typography variant="h5">
                <a href="/" className={classes.navlink}>
                  Web3.js
                </a>
              </Typography>
            </div>
          </Grid>
          <Grid item alignItems="flex-end">
            <MobileNav/>
          </Grid>
        </Grid>
      )}
   
    </nav >
  );
};

export default NavBar
