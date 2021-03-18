import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Notes />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
