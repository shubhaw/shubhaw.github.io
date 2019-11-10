import React, { useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    }
})

const useStyles = makeStyles(theme => ({
    nonTransparent: {
        backgroundColor: '#111111 !important',
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    active: {
        fontWeight: 'bold'
    }
}));

function App() {
    const classes = useStyles();
    useEffect(() => {
        const header = document.querySelector("header");
        const home = document.querySelector("#home");
        const homeNav = document.querySelector(".homeNav");

        const homeOptions = {
            rootMargin: "-10% 0px 0px 0px"
        };

        const homeObserver = new IntersectionObserver((entries, homeObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    header.classList.add(classes.nonTransparent);
                    homeNav.classList.remove(classes.active);
                } else {
                    header.classList.remove(classes.nonTransparent);
                    homeNav.classList.add(classes.active);
                }
            })
        }, homeOptions);

        homeObserver.observe(home);
    })

    useEffect(() => {
        const about = document.querySelector("#about");
        const aboutNav = document.querySelector(".aboutNav");

        const aboutOptions = {
            rootMargin: "-70px 0px -90% 0px"
        };

        const aboutObserver = new IntersectionObserver((entries, aboutObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    aboutNav.classList.remove(classes.active);
                } else {
                    aboutNav.classList.add(classes.active);
                }
            })
        }, aboutOptions);

        aboutObserver.observe(about);
    })

    useEffect(() => {
        const experience = document.querySelector("#experience");
        const experienceNav = document.querySelector(".experienceNav");

        const experienceOptions = {
            rootMargin: "-70px 0px -90% 0px"
        };

        const experienceObserver = new IntersectionObserver((entries, experienceObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    experienceNav.classList.remove(classes.active);
                } else {
                    experienceNav.classList.add(classes.active);
                }
            })
        }, experienceOptions);

        experienceObserver.observe(experience);
    })


    useEffect(() => {
        const projects = document.querySelector("#projects");
        const projectsNav = document.querySelector(".projectsNav");

        const projectsOptions = {
            rootMargin: "-70px 0px -90% 0px"
        };

        const projectsObserver = new IntersectionObserver((entries, projectsObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    projectsNav.classList.remove(classes.active);
                } else {
                    projectsNav.classList.add(classes.active);
                }
            })
        }, projectsOptions);

        projectsObserver.observe(projects);
    })

    useEffect(() => {
        const skills = document.querySelector("#skills");
        const skillsNav = document.querySelector(".skillsNav");

        const skillsOptions = {
            rootMargin: "-70px 0px -90% 0px"
        };

        const skillsObserver = new IntersectionObserver((entries, skillsObserver) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    skillsNav.classList.remove(classes.active);
                } else {
                    skillsNav.classList.add(classes.active);
                }
            })
        }, skillsOptions);

        skillsObserver.observe(skills);
    })

    const [isSidebarVisible, setSidebarVisibility] = useState(false);

    const closeSidebar = () => {
        setSidebarVisibility(false);
    }

    const openSidebar = () => {
        setSidebarVisibility(true);
    }

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Sidebar show={isSidebarVisible} sidebarCloseHandler={closeSidebar} />
                <Header sidebarOpenHandler={openSidebar} sidebarCloseHandler={closeSidebar} />
                <Home />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Footer />
            </React.Fragment>
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
