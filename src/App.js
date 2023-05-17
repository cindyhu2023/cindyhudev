import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Landing } from './Landing';
import { AboutMe } from './AboutMe';
import { Project } from './Projects';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4297A0',
    },
    secondary: {
      main: '#E57F84',
      contrastText: '#ffffff',
    },
    info: {
      main: '#7879F1',
    }
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Landing />
      <AboutMe />
      <Project />
    </div>
    </ThemeProvider>
  );
}

export default App;
