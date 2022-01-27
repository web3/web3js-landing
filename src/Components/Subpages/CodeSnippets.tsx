import React from "react";
import { ITheme, makeStyles, createStyles } from "@chainsafe/common-theme";
import { Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { Trans } from "@lingui/macro";
import ReactEmbedGist from "react-embed-gist";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        overflowX: "hidden",
        minHeight: "30vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        [breakpoints.down(1099)]: {
          alignItems: "flex-start",
          padding: "0 40px",
        },
        [breakpoints.down(767)]: {
          padding: "0 20px",
        },
      },
      gridContainer: {
        width: "calc(100% - 16px)",
        display: "block",
        maxWidth: "1200px",
      },
      bold: {
        fontWeight: 800,
      },
      reduceLeading: {
        letterSpacing: "-1px",
      },
      white: {
        color: palette.common.white.main,
      },
      singleColText: {
        textAlign: "left",
        maxWidth: 420,
      },
      titleText: {
        textAlign: "center",
        marginBottom: constants.generalUnit * 4,
        [breakpoints.down("md")]: {
          fontSize: "48px",
          lineHeight: "55px",
          maxWidth: "90%",
          textAlign: "left",
          marginBottom: constants.generalUnit * 2,
        }
      },
      marginTop: {
        marginTop: "1.25rem",
        [breakpoints.down(767)]: {
          marginTop: "1rem",
        },
      },
      contentContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        float: "left",
        [breakpoints.down(599)]: {
          marginBottom: "20px",
        }
      },
      bodyTextContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: "400px",
      },
      snippetsContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "2.5rem 0",
        padding: "0 32px",
        [breakpoints.down('md')]: {
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "1rem 0",
        }
      },
      snippetRow: {
        minHeight: "200px",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        [breakpoints.down('md')]: {
          margin: ".5rem 0 .5rem 0",
          flexDirection: "column",
          minHeight: "auto",
          alignItems: "flex-start",
          justifyContent: "flex-start",

        },
      },
      bodyText: {
        fontSize: "19px",
        lineHeight: "28px",
        maxWidth: "90%",
      },
      noUnderline: {
        textDecoration: "none",
      },
      syntaxSection: {
        marginTop: "2rem",
        width: "50%",
        [breakpoints.down('md')]: {
          margin: "1rem 0",
          width: "100%",
        }
      },
      scrollable: {
        maxHeight: "320px",
        height: "320px",
        overflowY: "scroll",
      },
    })
  })

const CodeSnippets: React.FC = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <div className={classes.gridContainer}>
        <article className={classes.contentContainer}>
          <div className={clsx(classes.snippetsContainer)}>
            <article className={classes.snippetRow}>
              <div className={classes.bodyTextContainer}>
                <Typography variant="h4" className={clsx(classes.bold)}>Fetch data from the Ethereum blockchain.</Typography>
                <br/>
                <Typography variant="body1" className={clsx( classes.singleColText, classes.bodyText)}>Get an Ethereum account balance with a simple query to a node provider via JSON-RPC.</Typography>
              </div>
              <div className={classes.syntaxSection}>
                <ReactEmbedGist 
                gist="luu-alex/a0ef27f3bfa5d6920ca960e95a73dc6b"
                />
              </div>
            </article>
            <article className={classes.snippetRow}>
              <div className={classes.bodyTextContainer}>
                <Typography variant="h4" className={clsx(classes.bold)}>Interact with smart contracts.</Typography>
                <br/>
                <Typography variant="body1" className={clsx( classes.singleColText, classes.bodyText)}>Examine recent transfer events by querying or subscribing to their events.</Typography>
              </div>
              <div className={classes.syntaxSection}>
                <div className={classes.scrollable}>
                  <ReactEmbedGist 
                  gist="luu-alex/8685a331330454a16c5aadd7b24e637c"
                  />
                </div>
              </div>
            </article>
            <article className={classes.snippetRow}>
              <div className={classes.bodyTextContainer}>
                <Typography variant="h4" className={clsx(classes.bold)}>Simplify your code with built-in utilities.</Typography>
                <br/>
                <Typography variant="body1" className={clsx( classes.singleColText, classes.bodyText)}>Calculate the sha3 hash of your input data, convert your Ether values in wei, and more.</Typography>
              </div>
              <div className={classes.syntaxSection}>
                <ReactEmbedGist 
                gist="luu-alex/bea638fb1cec2d3b6e61fc16b6a8eed5"
                />
              </div>
            </article>
          </div>
        </article>
      </div >
    </section >
  )
}

export default CodeSnippets;