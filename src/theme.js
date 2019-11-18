import { createMuiTheme, createStyles } from "@material-ui/core";

const myTheme = createMuiTheme({
  overrides: {
    MuiAppBar: createStyles({
      colorPrimary: {
        backgroundColor: "white"
      },
      root: {
        height: "5em",
        display: "flex",
        justifyContent: "center"
      }
    })
  }
});

export default myTheme;
