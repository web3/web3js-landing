import React, { Fragment } from 'react';
import './index.scss';
import web3js from "../../../assets/images/web3js.png"
import hero from "../../../assets/images/hero.png"

export const Hero: React.FC = () => {

  return (
    <Fragment>
      <div className='hero'>
        <div className='left-column'>
          <div className='content-wrapper'>
            <img className='brand' src={web3js} alt='web3js logo' />
            <h3 className='title'>
              web3.js is a Javascript library for building on Ethereum.
            </h3>
            <div className='link-wrapper'>
              <div className='link-wrapper--item'>
                <div className='darkindicator'></div>
                <a
                  className='link'
                  href='https://www.npmjs.com/package/web3'
                  rel='noopener noreferrer'
                  target='_blank'>
                  Download on npm
                </a>
              </div>
              <div className='link-wrapper--item'>
                <div className='primDark indicator'></div>
                <a
                  className='link'
                  href='https://docs.web3js.org/'
                  rel='noopener noreferrer'
                  target='_blank'>
                  4.x Docs
                </a>
              </div>
              <div className='link-wrapper--item'>
                <div className='primDark indicator'></div>
                <a
                  className='link'
                  href='http://discord.gg/n2U6x9c'
                  rel='noopener noreferrer'
                  target='_blank'>
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='right-column'>
          <div className='content-wrapper'>
            <div className='hero-img'>
              <img src={hero} alt='' />
              <h1 className='title display-text'>
                A JavaScript library for building on Ethereum
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
