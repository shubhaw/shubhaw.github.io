import React from 'react';
import { Card, Typography, CardMedia, CardContent, Chip, ButtonBase } from '@material-ui/core';
import styleClasses from './ProjectCard.module.css';
import LaunchIcon from '@material-ui/icons/Launch';

export default function ProjectCard(props) {

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
                <div className={styleClasses.descriptionBody}>
                    <Typography variant="body1" className={styleClasses.text}>
                        {props.para1}
                        {
                            props.para2 ? null : (
                                <ButtonBase>
                                    <a href={props.link} className={styleClasses.link}>
                                        {/* {props.button1} */}
                                        <LaunchIcon />
                                    </a>
                                </ButtonBase>
                            )
                        }
                    </Typography>
                    <Typography variant="body1" className={styleClasses.text}>
                        {props.para2}
                        {
                            props.para2 ? (
                                <ButtonBase>
                                    <a href={props.link} className={styleClasses.link}>
                                        {/* {props.button1} */}
                                        <LaunchIcon />
                                    </a>
                                </ButtonBase>
                            ) : null
                        }
                    </Typography>
                    {/* <SimpleBar>
                        <Typography variant="body1" className={styleClasses.text}>
                            {props.para1}
                        </Typography>
                        <Typography variant="body1" className={styleClasses.text}>
                            {props.para2}
                        </Typography>
                    </SimpleBar> */}
                </div>
            </CardContent>
            {/* <CardActions className={styleClasses.cardActions}>
                <Button size="small" color="primary" onClick={setOnClick}>
                    {props.button1}
                </Button>
                <Button size="small" color="primary">
                    {props.button2}
                </Button>
            </CardActions> */}
        </Card>
    )
}