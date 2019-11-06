import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import styleClasses from './ExperienceCard.module.css';


export default function ExperienceCard(props) {
    return (
        <Card className={styleClasses.Card}>
            <CardContent>
                <center>
                    <Typography variant="h4" component="h2">
                        {props.companyName}
                    </Typography>
                    <Typography variant="h5" component="h3" className={styleClasses.duration}>
                        {props.duration}
                    </Typography>
                </center>

                <Typography variant="body1" className={styleClasses.text}>
                    {props.para1}
                </Typography>
                <Typography variant="body1" className={styleClasses.text}>
                    {props.para2}
                </Typography>
            </CardContent>
        </Card>
    )
}