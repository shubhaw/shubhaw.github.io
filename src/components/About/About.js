import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import styleClasses from './About.module.css';

export default function About() {
    return (
        <div id="about" className={styleClasses.About}>
            <Typography variant="h3" style={{textAlign: "center"}}>
                About
            </Typography>
            <Paper className={styleClasses.paper}>
                <Typography variant="body1" className={styleClasses.p}>
                    I am a full stack developer, currently working as Software Engineer at Microsoft, India. I have done B.Tech. in Computer Science and currently I mostly work in front-end development. I have also worked extensively on Java and developed some native Android apps too which you can find on play store.
                </Typography>
                <Typography variant="body1" className={styleClasses.p}>
                    I love to code and help people in tech related issues they face. My next target is to attend few conferences on frontend development - mainly on React and Javascript to gain a deeper understanding and help people by sharing my knowledge through blogging.
                </Typography>
            </Paper>
        </div>
    )
}