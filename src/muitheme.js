import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
export const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] },
    secondary: {
      main: "#3f51b5"
    }
  }
});
