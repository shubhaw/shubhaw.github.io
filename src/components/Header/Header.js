import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
}));

export default function Header(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={props.transparent? classes.transparent : null}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SHUBHAW KUMAR
                    </Typography>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Experience</Button>
                    <Button color="inherit">Projects</Button>
                    <Button color="inherit">Skills</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
