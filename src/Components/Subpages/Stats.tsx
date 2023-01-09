import React from 'react';
import { createStyles, ITheme, makeStyles } from '@chainsafe/common-theme';
import graphic from "../../assets/images/graphic.png"

const useStyles = makeStyles(
  ({ constants, palette, breakpoints, typography }: ITheme) => {
    return createStyles({
      container: {
        [breakpoints.up(799)]: {
          marginTop: '2rem',
          flexDirection: 'row',
        },
        flexDirection: 'column',
        padding: '2rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      columnContentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        [breakpoints.up(599)]: {
          padding: '0 2rem',
        },
      },
      bold: {
        fontWeight: 600,
      },
      reduceLeading: {
        letterSpacing: '-.85px',
      },
      white: {
        color: palette.common.white.main,
      },
      highlightText: {
        color: palette.primary.main,
      },
      titleText: {
        textAlign: 'left',
        fontSize: '34px',
        lineHeight: '44px',
      },
      featureContainer: {
        display: 'flex',
        flexDirection: 'column',
        [breakpoints.up(599)]: {
          flexDirection: 'row',
        },
        '& > img': {
          maxWidth: '200px',
          maxHeight: '200px',
          [breakpoints.up(599)]: {
            marginRight: '2rem',
          },
        },
      },
      spec: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '1rem 1rem 1rem 0',
        [breakpoints.up(799)]: {
          padding: '2.5rem 1rem 0 0',
        },
        '& > p': {
          color: palette.additional['gray'][3],
          fontSize: '34px',
          lineHeight: '40px',
          fontWeight: 600,
          maxWidth: '85%',
        },
      },
      statsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '16px',
        [breakpoints.up(599)]: {
          flexDirection: 'row',
        },
        '& > p': {
          color: palette.additional['gray'][5],
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 600,
          maxWidth: '50%',
          '&:first-of-type': {
            marginBottom: '1rem',
            [breakpoints.up(599)]: {
              marginRight: '2rem',
            },
          },
        },
      },
    });
  }
);

const Stats: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.columnContentWrapper}>
        <div className={classes.featureContainer}>
          <img src={graphic} alt='' />
          <div className={classes.spec}>
            <p>A proud cornerstone of the ecosystem.</p>
            <div className={classes.statsWrapper}>
              <p>
                <div className={classes.highlightText}>500,000+ </div>
                weekly downloads.
              </p>
              <p>
                <div className={classes.highlightText}>3000+ </div>
                dependent projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
