import React, { useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
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

const useStyles = makeStyles(theme => ({
    nonTransparent: {
        backgroundColor: '#111111 !important',
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    }
}));

function App() {
    const classes = useStyles();
    useEffect(() => {
        const header = document.querySelector("header");
        const home = document.querySelector(".home");

        const homeOptions = {
            rootMargin: "-70px 0px 0px 0px"
        };

        const homeObserver = new IntersectionObserver((entries, homeObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add(classes.nonTransparent);
                } else {
                    header.classList.remove(classes.nonTransparent)
                }
            })
        }, homeOptions);

        homeObserver.observe(home);
    })


    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Skills />
            </div>
        </ThemeProvider>
    );
}

// class App extends React.Component {

//     componentDidMount() {
//         const header = document.querySelector("header");
//         const home = document.querySelector(".home");

//         const homeOptions = {
//             rootMargin: "-60px 0px 0px 0px"
//         };

//         const homeObserver = new IntersectionObserver((entries, homeObserver) => {
//             entries.forEach(entry => {
//                 if (!entry.isIntersecting) {
//                     header.classList.add('non-transparent')
//                 } else {
//                     header.classList.remove('non-transparent')
//                 }
//                 console.log(header)
//             })
//         }, homeOptions);

//         console.log(home)
//         homeObserver.observe(home);
//     }

//     render() {
//         return (
//             <ThemeProvider theme={theme}>
//                 <div>
//                     <Header transparent />
//                     <Home />
//                     <About />
//                     <Experience />
//                     <Projects />
//                     <Skills />
//                 </div>
//             </ThemeProvider>
//         );
//     }
// }

export default App;
