import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
	typography: {
		fontSize: 10,
	},
	palette: {
		primary: {
			main: red[800],
		},
	},
});

export default theme;
