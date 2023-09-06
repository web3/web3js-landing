import React, { useState } from "react";
import {
  createStyles, ITheme, makeStyles, useMediaQuery
} from "@chainsafe/common-theme";
import { Grid, Link, Typography, useScrollToTop } from "@chainsafe/common-components";
import { Trans } from "@lingui/macro"
import { MobileNav } from "./MobileNav";
import web3js from "../../assets/images/web3js.png"
import { discordUrl, docsUrl } from "../../urls";

const useStyles = makeStyles(({ breakpoints, palette, zIndex, constants }: ITheme) => {
  return createStyles({
    container: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: constants.generalUnit * 9,
      position: "absolute",
      padding: "2.4rem",
      background: palette.background.default,
      zIndex: zIndex?.layer4,
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
      color: palette.common.white.main,
      marginLeft: constants.generalUnit,
      textDecoration: "none",
    },
    link: {
      textDecoration: "none",
      fontSize: "20px",
      cursor: "pointer",
      padding: "1rem",
      color: palette.common.white.main,
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
      color: palette.common.white.main,
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
    },
    mobileNav: {
      display: "flex",
      justifyContent: "space-between",
    },
    mobileLogo: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: "1rem"
    }
  })
})


const NavBar: React.FC = () => {

  const classes = useStyles();

  const [isNavVisible] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1170px)");


  const scrollToTop = useScrollToTop();

  if (isMobile && !isNavVisible)
    return (
      <nav className={classes.mobileNav}>
        {scrollToTop}
        <div className={classes.mobileLogo}>
          <img className={classes.logo} src={web3js} alt='web3js logo' />
          <Typography variant='h5'>
            <a href='/' className={classes.navlink}>
              Web3.js
            </a>
          </Typography>
        </div>
        <MobileNav />
      </nav>
    );

  return (
    <>
      <nav className={classes.container}>
        {scrollToTop}
        <Grid item alignItems='center' className={classes.linksMenu}>
          <Grid container justifyContent='flex-start' alignItems='center'>
            <Grid item alignItems='flex-start'>
              <div className={classes.flex}>
                <img className={classes.logo} src={web3js} alt='web3js logo' />
                <Typography variant='h5'>
                  <Link to='/' className={classes.navlink}>
                    Web3.js
                  </Link>
                </Typography>
              </div>
            </Grid>
            <Typography variant='h5'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={docsUrl}
                className={classes.navlink}>
                <Trans>Docs</Trans>
              </a>
            </Typography>
            <Typography variant="h5">
              <a
                href="/plugins"
                className={classes.navlink}
              >
                <Trans>Plugins</Trans>
              </a>
            </Typography>
            <Typography variant='h5'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={discordUrl}
                className={classes.navlink}>
                <Trans>Community</Trans>
              </a>
            </Typography>
            <Typography variant='h5'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://medium.com/chainsafe-systems/tagged/ethereum'
                className={classes.navlink}>
                <Trans>Blog</Trans>
              </a>
            </Typography>
            <Typography variant='h5'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/web3/web3.js'
                className={classes.navlink}>
                <Trans>GitHub</Trans>
              </a>
            </Typography>
          </Grid>
        </Grid>
      </nav>
    </>
  );
};

export default NavBar
