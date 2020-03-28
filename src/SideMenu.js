import React, { useEffect, useState } from "react";
import { summary as chapters, getMainAndSubIndex } from "./summary";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary,
    marginRight: theme.spacing(2)
  },
  mainTitle: {
    marginBottom: theme.spacing(1)
  },
  subTiTlesRoot: {
    paddingLeft: theme.spacing(2)
  },
  linkStyle: {
    textDecoration: "none",
    color: "grey"
  },
  selectedSublink: {
    color: theme.palette.primary.main
  }
}));
const SideMenu = props => {
  const classes = useStyles();
  const location = useLocation();
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  useEffect(() => {
    let currentPath = location.pathname;
    const subTitle = getMainAndSubIndex(currentPath)[1];
    setCurrentSubtitle(subTitle);
  }, [location]);

  return (
    <Grid container direction="column" className={classes.root}>
      {chapters.map((chapter, index) => {
        return (
          <Grid item key={index}>
            <Typography variant="subtitle2">
              {chapter.mainTitle.name}
            </Typography>
            <Grid
              container
              direction="column"
              className={classes.subTiTlesRoot}
            >
              {chapter.subTitles.map((subtile, index) => {
                return (
                  <Grid item key={index}>
                    <Link
                      to={`/${chapter.mainTitle.url}/${subtile.url}`}
                      className={classes.linkStyle}
                    >
                      <Typography
                        className={
                          currentSubtitle === subtile.url
                            ? classes.selectedSublink
                            : ""
                          // classes.selectedSublink
                        }
                        variant="caption"
                      >
                        {subtile.name}
                      </Typography>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SideMenu;
