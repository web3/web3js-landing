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
        color:"#F5F5F5",
        // 
      },
      pluginsWrapper: {
        display: "flex",
        flexDirection: "column",
        fontSize: "1rem",
      },
      pluginWrapper: {
        padding: "10px 0",
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
        },
        lineHeight: "1.5rem",
      },
      name: {
        color: palette.primary.main,
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
      description: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        marginBottom: "10px",
      },
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
            <h2 className={classes.name}>{plugin.name}</h2>
            <p className={classes.description}>{plugin.description}</p>
            <a className={classes.link} target="_blank" rel="noreferrer" href={plugin.homepage}>{plugin.homepage}</a>
            <div className={classes.pluginGrid}>
              <p>Version: {plugin.version}</p>
              <p>Author: {plugin.author}</p>
              <p>Weekly Downloads: {plugin.donwloads}</p>
              <p>License: {plugin.license}</p> </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PluginsList;