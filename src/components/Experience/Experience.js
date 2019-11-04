import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styleClasses from './Experience.module.css';

export default function Experience() {
    return (
        <div className={styleClasses.Experience}>
            <Typography variant="h4" style={{textAlign: "center"}}>
                Experience
            </Typography>
            <div className={styleClasses.ExperienceBody}>
            <Paper className={styleClasses.Paper}>
                <Typography variant="body1">
                    I am a full stack developer, currently working as Associate Consultant at Microsoft, India.
                </Typography>
                <Typography variant="body1">
                I have done B.Tech. in Computer Science and currently I mostly work in front-end development. I have worked extensively on Java and also developed some native Android apps which you can find on play store.
                </Typography>
            </Paper>
            <Paper className={styleClasses.Paper}>
                <Typography variant="body1">
                    I am a full stack developer, currently working as Associate Consultant at Microsoft, India.
                </Typography>
                <Typography variant="body1">
                I have done B.Tech. in Computer Science and currently I mostly work in front-end development. I have worked extensively on Java and also developed some native Android apps which you can find on play store.
                </Typography>
            </Paper>
            </div>
        </div>
    )
}