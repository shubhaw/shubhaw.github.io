import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div>
        {/* <Header></Header> */}
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
    </div>
    </ThemeProvider>
  );
}

export default App;
