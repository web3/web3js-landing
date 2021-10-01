import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles, useMediaQuery
} from "@chainsafe/common-theme";
import { Grid, Typography, useHistory, useScrollToTop } from "@chainsafe/common-components";
import { Trans } from "@lingui/macro"

import nav from "./nav.svg";
import darknav from "./darknav.svg"

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
      [breakpoints.down('md')]: {
        alignItems: "center",
      },

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
    menuToggle: {
      [breakpoints.down(1170)]: {
        display: "block",
        cursor: "pointer",
      },
      display: "none",
      width: "40px",
      marginTop: "13px",
      zIndex: 400000,

      height: "40px",
      transition: "transform 0.4s ease-in",
    },
    wrapper: {
      background: "black",
      position: "absolute",
      margin: "-1rem 0",
      left: 0,
      width: "100%",
      height: "103vh",
      zIndex: 400000,
    },
    mobileLinkContainer: {
      zIndex: 1000,
      display: "flex",
      width: "100%",
      marginTop: "15vh",
      height: "auto",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mobileLinkWrapper: {
      marginTop: "2rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    mobileLink: {
      textDecoration: "none",
      fontSize: "2.5rem",
      color: palette.primary.main,
      transition: "0.1s ease-in-out",
      '&:hover': {
        color: palette.additional["gray"][5],
      },
      '&:active': {
        color: palette.primary.main,
      },
    },
  })
})


const NavBar2: React.FC = () => {

  const classes = useStyles();

  const [isNavVisible, setIsNavVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1170px)");

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }
  const scrollToTop = useScrollToTop();

  const { redirect } = useHistory()


  return (
    <nav className={classes.container}>
      {scrollToTop}
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid container alignItems="center">
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
          </Grid>
          {!isMobile && <Grid item alignItems="center" className={classes.linksMenu}>
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
        </Grid>
        }
        </Grid>
        <div className={classes.menuToggle} onClick={toggleNav}>
          <img src={darknav} alt="menuIcon" />
        </div>
      {(isMobile && isNavVisible) && (
        <div className={classes.wrapper}>
          <div className={classes.menuToggle} onClick={toggleNav} style={{ float: "right", margin: "1.7rem 1rem" }}>
            <img src={nav} alt="menuIcon" />
          </div>
          <ul className={classes.mobileLinkContainer}>
            <div className={classes.mobileLinkWrapper} >
              <a href="hhttps://github.com/chainsafe/web3.js" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Docs</a>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <a href="hhttps://github.com/chainsafe/web3.js" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>GitHub</a>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <a href="https://github.com/chainsafe/web3.js" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Community</a>
            </div>
            <div className={classes.mobileLinkWrapper} >
              <a href="https://medium.com/chainsafe-systems" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Blog</a>
            </div>
          </ul>
        </div>
      )}
    </nav >
  );
};

export default NavBar2
