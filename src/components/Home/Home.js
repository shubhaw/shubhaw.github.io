import React from 'react';
import styleClasses from './Home.module.css';
import Header from '../Header/Header';
import { Typography } from '@material-ui/core';

export default function Home() {
    return (
        <div className={styleClasses.Home}>
            <Header transparent />
            <div className={styleClasses.Main}>
                <div className={styleClasses.MainText}>
                    <Typography variant="h1" className={styleClasses.h1}>
                        Shubhaw Kumar
                    </Typography>
                    <Typography variant="h4" className={styleClasses.h4}>
                        Full Stack Developer
                    </Typography>
                </div>
            </div>
        </div>
    )
}