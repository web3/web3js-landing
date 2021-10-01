import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles, useMediaQuery
} from "@chainsafe/common-theme";
import { Grid, Typography, useScrollToTop } from "@chainsafe/common-components";
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
      width: "30px",
      marginTop: "13px",
      zIndex: 400000,
      height: "30px",
      transition: "transform 0.4s ease-in",
    },
    wrapper: {
      background: palette.additional["gray"][9],
      position: "absolute",
      marginTop: "-3rem",
      left: 0,
      width: "100%",
      height: "33vh",
      zIndex: 400000,
    },
    mobileLinkContainer: {
      zIndex: 1000,
      display: "flex",
      width: "100%",
      height: "auto",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginLeft: "2rem",
    },
    mobileLinkWrapper: {
      marginTop: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    mobileLink: {
      textDecoration: "none",
      fontSize: "1rem",
      color: palette.primary.main,
      transition: "0.1s ease-in-out",
      '&:hover': {
        color: palette.additional["gray"][5],
      },
      '&:active': {
        color: palette.primary.main,
      },
    },
    flex: {
      display: "flex",
      alignItems: "center",
    }
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
          <div className={classes.menuToggle} onClick={toggleNav}>
          < img src={darknav} alt="menuIcon" />
          </div>
        </Grid>
        </Grid>
      )}
      {(isMobile && isNavVisible) && (
      <Grid item alignItems="center" className={classes.linksMenu}>
         <Grid item alignItems="flex-start">
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
          <div className={classes.wrapper}>
            <div className={classes.menuToggle} onClick={toggleNav} style={{ float: "right", margin: "1.5rem .5rem" }}>
              <img src={nav} alt="menuIcon" />
            </div>
            <ul className={classes.mobileLinkContainer}>
              <div className={classes.mobileLinkWrapper} >
                <a href="https://web3js.readthedocs.io/en/v1.5.2/" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Docs</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a href="https://github.com/chainsafe/web3.js" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>GitHub</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a href="https://github.com/chainsafe/web3.js" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Community</a>
              </div>
              <div className={classes.mobileLinkWrapper} >
                <a href="https://medium.com/chainsafe-systems" target="_blank" rel="noopener noreferrer" className={classes.mobileLink}>Blog</a>
              </div>
            </ul>
          </div>
        </Grid>
        </Grid>
      )}
    </nav >
  );
};

export default NavBar2
