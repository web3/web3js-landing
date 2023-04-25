import * as React from 'react';
import { motion } from 'framer-motion';
import { MobileMenuItem } from './MobileMenuItem';
import { createStyles, ITheme, makeStyles } from '@chainsafe/common-theme';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export interface NavLink {
  id?: number;
  name: string;
  linkUrl: string;
}

const navlinks: NavLink[] = [
  {
    id: 1,
    name: 'Plugins',
    linkUrl: '/plugins',
  },
  {
    id: 2,
    name: '1.x Docs',
    linkUrl: 'https://web3js.readthedocs.io/en/v1.7.5/',
  },
  {
    id: 3,
    name: '4.x Docs',
    linkUrl: 'https://docs.web3js.org/',
  },
  {
    id: 4,
    name: 'Join Discord',
    linkUrl: 'http://discord.gg/n2U6x9c',
  },
  {
    id: 5,
    name: 'Blog',
    linkUrl: 'https://medium.com/chainsafe-systems',
  },
  {
    id: 6,
    name: 'GitHub',
    linkUrl: 'https://github.com/chainsafe/web3.js',
  },
];

const useStyles = makeStyles(({ palette, constants, breakpoints }: ITheme) => {
  return createStyles({
    navMenu: {
      top: '100px',
      position: 'absolute',
      right: '0',
      padding: '25px',
      maxWidth: '80%',
    },
  });
});

export const MobileMenu = () => {
  const classes = useStyles();
  return (
    <motion.ul variants={variants} className={classes.navMenu}>
      {navlinks.map((i) => (
        <MobileMenuItem name={i.name} linkUrl={i.linkUrl} key={i.id} />
      ))}
    </motion.ul>
  );
};
