import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  toolbar:{
    backgroundColor:'Black'
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logo}>
          Walkin Clinic
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;