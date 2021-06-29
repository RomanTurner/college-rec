import React from "react";
import AppBar from "@material-ui/core/AppBar";
import imgSrc from "./img/collegereco-logo.png";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import FaceBookShare from "./Social-Share-Buttons/FaceBookShare"
import LinkedInShare from "./Social-Share-Buttons/LinkedInShare";
import TwitterShare from "./Social-Share-Buttons/TwitterShare";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100vw",
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-center",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "100%",
    maxWidth: "45%",
  },
  share: {
    alignSelf: "flex-end",
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <div></div>
        <div></div>
        <img src={imgSrc} alt='logo' className={classes.logo} />
        <div className={classes.share}>
          <FaceBookShare />
          <LinkedInShare />
          <TwitterShare />
        </div>
      </Toolbar>
    </AppBar>
  );
}
