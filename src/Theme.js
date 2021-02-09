import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: yellow[700],
    }
  }
})

export default theme

/*
Dark-Tan: #946941
Tan: #E0AB79
Light-Tan: #FFD0A3
Dark-Blue: #4E8A99
Light-Blue: #6ACEE7
*/
