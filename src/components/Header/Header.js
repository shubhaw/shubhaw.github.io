import React from 'react';
import styleClasses from './Header.module.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    transparent: {
        boxShadow: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}));

export default function Header(props) {
    const classes = useStyles();

    const links = [
        {
            text: 'Home',
            href: '#home',
            class: 'homeNav'
        },
        {
            text: 'About',
            href: '#about',
            class: 'aboutNav'
        },
        {
            text: 'Experience',
            href: '#experience',
            class: 'experienceNav'
        },
        {
            text: 'Projects',
            href: '#projects',
            class: 'projectsNav'
        },
        {
            text: 'Skills',
            href: '#skills',
            class: 'skillsNav'
        },
        // {
        //     text: 'Contact',
        //     href: '#skills',
        //     class: 'skillsNav'
        // }
    ];

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.transparent}>
                <Toolbar>
                    <a href="#home" className={styleClasses.link + ' ' + classes.title} onClick={props.click} >
                        <Typography variant="h6">SHUBHAW KUMAR</Typography>
                    </a>

                    <div className={styleClasses.desktopOnly}>
                        {
                            links.map(link => (
                                <ButtonBase className={styleClasses.buttonBase} key={link.text}>
                                    <a href={link.href} className={styleClasses.link + ' ' + link.class}>{link.text}</a>
                                </ButtonBase>
                            ))
                        }
                    </div>
                    <div className={styleClasses.mobileOnly} onClick={props.sidebarOpenHandler}>
                        <svg width="30" height="22" className={styleClasses.menuIcon}>
                            <line x1="0" y1="4" x2="30" y2="4" stroke="#dddddd" strokeWidth="2" />
                            <line x1="0" y1="12" x2="30" y2="12" stroke="#dddddd" strokeWidth="2" />
                            <line x1="0" y1="20" x2="30" y2="20" stroke="#dddddd" strokeWidth="2" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
