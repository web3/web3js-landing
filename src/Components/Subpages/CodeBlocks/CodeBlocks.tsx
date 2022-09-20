import React, { Fragment } from 'react';
import './index.scss';
import { CopyBlock, monokaiSublime } from 'react-code-blocks';
import sample from './snippets';

export const CodeBlocks2: React.FC = () => {
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
    <Fragment>
      <div className='code-blocks'>
        <div className='demo-wrapper'>
          <div className='demo'>
            <CopyBlock
              text={sample['interact']}
              language='javascript'
              theme={monokaiSublime}
              wrapLines={true}
              customStyle={codeCSS}
            />
            <h1 className='demo--header'>Interact with smart contracts.</h1>
            <p className='demo--desc'>
              Examine recent transfer events by querying or subscribing to their
              events.
            </p>
          </div>
          <div className='demo'>
            <CopyBlock
              text={sample['listen']}
              language='javascript'
              theme={monokaiSublime}
              wrapLines={true}
              customStyle={codeCSS}
            />
            <h1 className='demo--header'>Listen for on-chain envents.</h1>
            <p className='demo--desc'>
              Subscribe to changes on smart contracts and more.
            </p>
          </div>
          <div className='demo'>
            <CopyBlock
              text={sample['fetch']}
              language='javascript'
              theme={monokaiSublime}
              wrapLines={true}
              customStyle={codeCSS}
            />
            <h1 className='demo--header'>Fetch data from the blockchain.</h1>
            <p className='demo--desc'>
              Get an Ethereum account balance with a simple query to a node
              provider via JSON-RPC.
            </p>
          </div>
          <div className='demo'>
            <CopyBlock
              text={sample['simplify']}
              language='javascript'
              theme={monokaiSublime}
              wrapLines={true}
              customStyle={codeCSS}
            />
            <h1 className='demo--header'>
              Simplify your code with built-in utilities.
            </h1>
            <p className='demo--desc'>
              Calculate the sha3 hash of your input data, convert your Ether
              values in wei, and more.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
