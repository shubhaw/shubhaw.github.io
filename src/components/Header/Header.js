import React from 'react';
import styleClasses from './Header.module.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        border: '2px solid white'
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

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.transparent}>
                <Toolbar>
                    <a href="#home" className={styleClasses.link + ' ' + classes.title} onClick={props.click} >
                        <Typography variant="h6">SHUBHAW KUMAR</Typography>
                    </a>

                    <div className={styleClasses.desktopOnly}>
                        <ButtonBase className={styleClasses.buttonBase}>
                            <a href="#home" className={styleClasses.link} onClick={props.click} >Home</a>
                        </ButtonBase>
                        <ButtonBase className={styleClasses.buttonBase}>
                            <a href="#about" className={styleClasses.link}>About</a>
                        </ButtonBase>
                        <ButtonBase className={styleClasses.buttonBase}>
                            <a href="#experience" className={styleClasses.link}>Experience</a>
                        </ButtonBase>
                        <ButtonBase className={styleClasses.buttonBase}>
                            <a href="#projects" className={styleClasses.link}>Projects</a>
                        </ButtonBase>
                        <ButtonBase className={styleClasses.buttonBase}>
                            <a href="#skills" className={styleClasses.link}>Skills</a>
                        </ButtonBase>
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
