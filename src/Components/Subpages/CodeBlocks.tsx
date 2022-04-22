import React, {useState} from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { Button, Typography } from "@chainsafe/common-components";
import clsx from "clsx";
import { CopyBlock, atomOneDark } from "react-code-blocks";
import sample from "./snippets";


const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        display: "flex",
        padding: "2rem",
        flexDirection: "column",
        [breakpoints.up(799)]: {
          flexDirection: "row",
        }
      },
      demo: {
        maxWidth: "100%",
        marginBottom: 20,
        "&:first-of-type":{
          marginRight: 10,
        },
        [breakpoints.up(799)]: {
          maxWidth: "50%",
        }
      },
      header: {
        fontWeight: 600,
        color: palette.additional["gray"][4],
      },
      desc: {
        fontSize: "20px",
        lineWeight: "28px",
        maxWidth: "85%",
        color: palette.additional["gray"][7],
      }
    })
  })

const CodeBlocks: React.FC = () => {
  const classes = useStyles();

  const codeCSS = {
    fontSize: "16px", fontWeight: 600, padding: "16px", minHeight: "400px", maxHeight: "400px", overflowWrap: "break-word", overflowY: "scroll", borderRadius: "20px"
  }
  return (
    <div className={classes.container}>
      <div className={classes.demo}>
        <CopyBlock
          text={sample["interact"]}
          language="javascript"
          theme={atomOneDark}
          wrapLines={true}
          customStyle={codeCSS}
        />
        <h1 className={classes.header}>Interact with smart contracts.</h1>
        <p className={classes.desc}>Examine recent transfer events by querying or subscribing to their events.</p>
      </div>
      <div className={classes.demo}>
        <CopyBlock
          text={sample["fetch"]}
          language="javascript"
          theme={atomOneDark}
          wrapLines={true}
          customStyle={codeCSS}
          />
          <h1 className={classes.header}>Fetch data from the blockchain.</h1>
          <p className={classes.desc}>Get an Ethereum account balance with a simple query to a node provider via JSON-RPC.</p>
      </div>
    </div>
  )
}

export default CodeBlocks;