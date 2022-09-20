import React, { Fragment } from 'react';
import './index.scss';

export const Features2: React.FC = () => {
  return (
    <Fragment>
      <div className='features'>
        <div className='content-wrapper'>
          <h1 className='title'>With web3.js, you can:</h1>
          <div className='features-container'>
            <div className='features-container--item'>
              <span className='square'>
                <p>Interact with smart contracts as JS objects.</p>
              </span>
            </div>
            <div className='features-container--item'>
              <span className='square'>
                <p>Subscribe to specific on-chain events.</p>
              </span>
            </div>
            <div className='features-container--item'>
              <span className='square'>
                <p>Interact with the Ethereum Name Service.</p>
              </span>
            </div>
            <div className='features-container--item'>
              <span className='square'>
                <p>
                  Utilities with built-in helpers for Ethereum dapps and web3
                  packages.
                </p>
              </span>
            </div>
            <div className='features-container--item'>
              <span className='square'>
                <p>Get block and state information from Ethereum nodes.</p>
              </span>
            </div>
            <div className='features-container--item'>
              <span className='square'>
                <p>Create accounts, process and sign transactions.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
