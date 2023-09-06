import React, { useMemo } from "react";
import { createStyles, ITheme, makeStyles } from "@chainsafe/common-theme";
import { PluginsData } from "../../hooks/usePlugins";

const useStyles = makeStyles(
  ({ palette, breakpoints }: ITheme) => {
    return createStyles({
      container: {
        maxWidth: "1200px",
        flexDirection: "column",
        [breakpoints.up(800)]: {
          padding: "20px 0",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
        color: "#F5F5F5",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "20px",
      },
      pluginsWrapper: {
        display: "grid",
        fontSize: "1rem",
        height: "100%",
      },
      pluginWrapper: {
        "&.featured": {
          border: "1px solid #F5F5F5",
          backgroundColor: "#383838",
        },
        padding: "20px",
        border: "1px solid #F5F5F5",
        backgroundColor: "#212121",
        borderRadius: "0 20px 0 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
        "&:hover": {
          color: palette.primary.light,
          textDecoration: "underline",
        },
        "&:active": {
          color: palette.primary.dark,
        },
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
      description: {
        fontSize: "1rem",
        lineHeight: "1.75rem",
        marginBottom: "10px",
      },
      loading: {
        color: palette.primary.main,
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
        marginBottom: "250px",
      },
      error: {
        color: palette.primary.dark,
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "2.25rem",
      },
    })
  })

interface IPluginsList {
  pluginData: PluginsData;
}

const PluginsList: React.FC<IPluginsList> = ({ pluginData }) => {
  const classes = useStyles();
  const { loading, error, pluginsList } = pluginData;

  const memoizedPluginsList = useMemo(() => {
    return pluginsList.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured))
  }, [pluginsList]);

  if (loading) return (<div className={classes.loading}>loading plugin details...</div>)

  return (
    <>
      {error && <div className={classes.error}>{error}</div>}
      <div className={classes.container}>
        {memoizedPluginsList.map((plugin) =>
          <div className={classes.pluginsWrapper}>
            <div className={`${classes.pluginWrapper} ${plugin.isFeatured ? "featured" : ""}`}>
              <div>
                {plugin.isFeatured && <p>Featured</p>}
                <a target="_blank" href={"https://npmjs.com/package/" + plugin.name} rel="noreferrer"><h2 className={classes.name}>{plugin.name}</h2></a>
                <p className={classes.description}>{plugin.description}</p>
                <a className={classes.link} target="_blank" rel="noreferrer" href={plugin.homepage}>{plugin.homepage}</a>
              </div>
              {!error && (<div className={classes.pluginGrid}>
                <p>Version: {plugin.version}</p>
                <p>Author: {plugin.author}</p>
                <p>Weekly Downloads: {plugin.donwloads}</p>
                <p>License: {plugin.license}</p>
              </div>)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default PluginsList;