import React from 'react';
import { createStyles, ITheme, makeStyles } from '@chainsafe/common-theme';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';
import sample from './snippets';

const useStyles = makeStyles(({ constants, palette, breakpoints }: ITheme) => {
  return createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      [breakpoints.up(599)]: {
        padding: '2rem 2rem 0 2rem',
      },
      [breakpoints.up(799)]: {
        flexDirection: 'row',
      },
    },
    demo: {
      maxWidth: '90%',
      width: '100%',
      marginBottom: '2rem',
      [breakpoints.up(899)]: {
        maxWidth: '48%',
        '&:nth-of-type(1n)': {
          marginRight: '1rem',
        },
      },
    },
    header: {
      fontWeight: 600,
      color: palette.additional['gray'][4],
      lineHeight: '20px',
    },
    desc: {
      fontSize: '22px',
      lineHeight: '28px',
      minHeight: '4rem',
      color: palette.additional['gray'][7],
    },
    demosWrapper: {
      display: 'flex',
      flexDirection: 'column',
      [breakpoints.up(799)]: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    },
  });
});

const CodeBlocks: React.FC = () => {
  const classes = useStyles();

  const codeCSS = {
    fontSize: '16px',
    fontWeight: 600,
    padding: '16px',
    minHeight: '400px',
    maxHeight: '400px',
    overflowWrap: 'break-word',
    overflowY: 'scroll',
    borderRadius: '20px',
  };
  return (
    <div className={classes.container}>
      <div className={classes.demosWrapper}>
        <div className={classes.demo}>
          <h1 className={classes.header}>Interact with smart contracts.</h1>
          <p className={classes.desc}>
            Examine recent transfer events by querying or subscribing to their
            events.
          </p>
          <CopyBlock
            text={sample['interact']}
            language='javascript'
            theme={monokaiSublime}
            wrapLines={true}
            customStyle={codeCSS}
          />
        </div>
        <div className={classes.demo}>
          <h1 className={classes.header}>Listen for on-chain events.</h1>
          <p className={classes.desc}>
            Subscribe to changes on smart contracts and more.
          </p>
          <CopyBlock
            text={sample['listen']}
            language='javascript'
            theme={monokaiSublime}
            wrapLines={true}
            customStyle={codeCSS}
          />
        </div>
        <div className={classes.demo}>
          <h1 className={classes.header}>Fetch data from the blockchain.</h1>
          <p className={classes.desc}>
            Get an Ethereum account balance with a simple query to a node
            provider via JSON-RPC.
          </p>
          <CopyBlock
            text={sample['fetch']}
            language='javascript'
            theme={monokaiSublime}
            wrapLines={true}
            customStyle={codeCSS}
          />
        </div>
        <div className={classes.demo}>
          <h1 className={classes.header}>
            Simplify your code with built-in utilities.
          </h1>
          <p className={classes.desc}>
            Calculate the sha3 hash of your input data, convert your Ether
            values in wei, and more.
          </p>
          <CopyBlock
            text={sample['simplify']}
            language='javascript'
            theme={monokaiSublime}
            wrapLines={true}
            customStyle={codeCSS}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
