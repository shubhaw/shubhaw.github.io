import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styleClasses from './About.module.css';

export default function About() {
    return (
        <div className={styleClasses.About}>
            <Typography variant="h4" style={{textAlign: "center"}}>
                About
            </Typography>
            <Paper className={styleClasses.paper}>
                <Typography variant="body1" className={styleClasses.p}>
                    I am a full stack developer, currently working as Associate Consultant at Microsoft, India.
                </Typography>
                <Typography variant="body1" className={styleClasses.p}>
                I have done B.Tech. in Computer Science and currently I mostly work in front-end development. I have worked extensively on Java and also developed some native Android apps which you can find on play store.
                </Typography>
            </Paper>
        </div>
    )
}