import React, { Fragment } from 'react';
import './index.scss';

export const About2: React.FC = () => {
  return (
    <Fragment>
      <div className='about'>
        <div className='left-column'></div>
        <div className='right-column'>
          <div className='content-wrapper'>
            <h1 className='title'>web3.js is</h1>
          </div>
          <div className='about-items'>
            <div className='about-item'>
              <p className='about-item--heading'>Comprehensive</p>
              <p className='about-item--desc'>
                Everything you need to start interacting with the Ethereum
                blockchain
              </p>
            </div>
            <div className='about-item'>
              <p className='about-item--heading'>Community-driven</p>
              <p className='about-item--desc'>
                Open-source and continuously updated since 2015
              </p>
            </div>
            <div className='about-item'>
              <p className='about-item--heading'>Modular</p>
              <p className='about-item--desc'>
                Import only the packages you need
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
