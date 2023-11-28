import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Landing } from './components/Landing';
import { AboutMe } from './components/AboutMe';
import { Project } from './components/Projects';
import { Contact } from './components/Contact';
import { MyNavbar } from './components/navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { Template } from './allProjects/Template';
import { Meta } from './allProjects/MetaProj';
import { Amazon } from './allProjects/Amazon';
import { Cerebro } from './allProjects/Cerebro';
import { FlappyPhone } from './allProjects/FlappyPhone';
import { DoorDash } from './allProjects/DoorDash';
import { TikTok } from './allProjects/TikTok';
import { CreativeCoding } from './allProjects/CreativeCoding';
import { Photography } from './allProjects/Photography';
import { MyFooter } from './components/myFooter';


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
    },
    warning: {
      main: '#F4EAE6',
      contrastText: '#603C1F'
    }
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: 'Work Sans, sans-serif',
  }
});

function Home () {
  return (
    <div>
      <MyNavbar/>
      <Landing />
      <AboutMe />
      <Project />
      <Contact />
      <MyFooter />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/meta" element={<Meta/>} />
        <Route path="/amazon" element={<Amazon/>} />
        <Route path="/cerebro" element={<Cerebro/>} />
        <Route path="/flappy-phone" element={<FlappyPhone/>} />
        <Route path="/doordash" element={<DoorDash/>} />
        <Route path="/tiktok" element={<TikTok/>} />
        <Route path="/creative-coding" element={<CreativeCoding/>} />
        <Route path="/photography" element={<Photography/>} />

      </Routes>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
