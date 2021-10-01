import React, {useState} from "react"
import { createStyles, ITheme, makeStyles, useMediaQuery } from "@chainsafe/common-theme"
import { Grid, Typography, useScrollToTop } from "@chainsafe/common-components"
import { Trans } from "@lingui/macro"
import nav from "./nav.svg";

// import LanguageSelection from "../LanguageSelector"

const useStyles = makeStyles(
  ({ breakpoints, palette, zIndex, constants }: ITheme) => {
    return createStyles({
      container: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        height: `${constants.headerHeight}px`,
        position: "fixed",
        padding: "1rem",
        zIndex: zIndex?.layer4,
        background: "#fafafa",
        [breakpoints.down("sm")]: {
          padding: "none",
        },
        [breakpoints.up("xl")]: {
          height: constants.generalUnit * 9,
          width: "100vw",
          left: "50%",
          transform: "translateX(-50%)",
        },
      },
      logo: {
        width: constants.generalUnit * 4,
        height: constants.generalUnit * 4,
        margin: constants.generalUnit,
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

    })
  },
)

const NavBar: React.FC = () => {
  const classes = useStyles()
  const [isNavVisible, setIsNavVisible] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1170px)");

  return (
    <div className={classes.container}>
      <Grid container xs={12}>
        <Grid item justifyContent="flex-start" alignItems="center" flexDirection="row">
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
        <Grid item justifyContent="flex-end" alignItems="center" flexDirection="row">
          <Typography variant="h5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/chainsafe/web3.js"
              className={classes.navlink}
            >
              <Trans>GitHub</Trans>
            </a>
          </Typography>
          {/* <LanguageSelection/> */}
        </Grid>
      </Grid>
    </div>
  )
}

export default NavBar
