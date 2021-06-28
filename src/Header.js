import React from "react";
import AppBar from "@material-ui/core/AppBar";
import imgSrc from "./img/collegereco-logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw'
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-center",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  logo: {
    height: "100%",
    maxWidth: "45%",
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
      <AppBar className={classes.root} position='static'>
        <Toolbar className={classes.toolbar}>
          <img src={imgSrc} alt='logo' className={classes.logo} />
        </Toolbar>
      </AppBar>
  );
}
