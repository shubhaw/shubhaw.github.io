import React from 'react';
import { Card, Typography, CardMedia, CardContent, CardActions, Button, Chip } from '@material-ui/core';
import styleClasses from './ProjectCard.module.css';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';


export default function ProjectCard(props) {
    const setOnClick = () => {
        window.location.href = props.link
    }


    return (
        <Card className={styleClasses.Card}>

            <div className={styleClasses.tagBox}>
                <CardMedia
                    component="img"
                    alt={props.title}
                    height="200"
                    image={props.image}
                    title={props.title}
                />
                <Chip label={props.label} variant="outlined" size="small" className={styleClasses.tag} />
            </div>
            <CardContent className={styleClasses.cardContent}>
                <Typography variant="h6" component="h2" className={styleClasses.projectName}>
                    {props.title}
                </Typography>
                <div className={styleClasses.descriptionBody} >
                    <SimpleBar>
                        <Typography variant="body1" className={styleClasses.text}>
                            {props.para1}
                        </Typography>
                        <Typography variant="body1" className={styleClasses.text}>
                            {props.para2}
                        </Typography>
                    </SimpleBar>
                </div>
            </CardContent>
            <CardActions className={styleClasses.cardActions}>
                <Button size="small" color="primary" onClick={setOnClick}>
                    {props.button1}
                </Button>
                {/* <Button size="small" color="primary">
                    {props.button2}
                </Button> */}
            </CardActions>
        </Card>
    )
}