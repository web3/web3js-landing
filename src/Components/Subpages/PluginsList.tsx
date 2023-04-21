import React, { ReactNode, useEffect, useMemo } from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { PluginMetadata, PluginsData } from "../../hooks/usePlugins";

const useStyles = makeStyles(
  ({ constants, palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        display: "flex",
        maxWidth: "1200px",
        flexDirection: "column",
        [breakpoints.up(800)]: {
          padding: "20px 0",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        color: palette.primary.main,
      },
      pluginsWrapper: {
        display: "flex",
        flexDirection: "column",
        fontSize: "1rem",
      },
      pluginWrapper: {
        padding: "10px",
      },
      pluginGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "10px",
        paddingTop: "10px",
      },
      link: {
        color: palette.primary.light,
        "&:hover": {
          color: palette.primary.dark,
        }
      }
    })
  })

interface IPluginsList {
  pluginData: PluginsData;
}

const PluginsList: React.FC<IPluginsList> = ({ pluginData }) => {
  const classes = useStyles();
  const { loading, error, pluginsList } = pluginData;

  const memoizedPluginsList = useMemo(() => pluginsList, [pluginsList]);

  if (loading) return (<div>loading...</div>)
  if (error) return (<div>{error}</div>)

  return (
    <div className={classes.container}>

      {memoizedPluginsList.map((plugin) =>
        <div className={classes.pluginsWrapper}>
          <div className={classes.pluginWrapper} >
            <h2>{plugin.name}</h2>
            <p>{plugin.description}</p>
            <a className={classes.link} target="_blank" rel="noreferrer" href={plugin.homepage}>{plugin.homepage}</a>
            <div className={classes.pluginGrid}>
              <p>Version: {plugin.version}</p>
              <p>Author: {plugin.author}</p>
              <p>Downloads: {plugin.donwloads}</p>
              <p>License: {plugin.license}</p> </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PluginsList;