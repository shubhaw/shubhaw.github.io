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
                </Toolbar>
            </AppBar>
        </div>
    );
}
