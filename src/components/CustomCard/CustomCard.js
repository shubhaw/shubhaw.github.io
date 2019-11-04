import React from 'react';
import { Card, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';
import styleClasses from './CustomCard.module.css';


export default function CustomCard(props) {
    return (
        <Card className={styleClasses.Card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={props.title}
                            height="200"
                            // image="../../assets/images/bg.jpg"
                            image={props.image}
                            title={props.title}
                        />
                    </CardActionArea>
                    <CardContent>
                        <Typography variant="h6" component="h2">
                            {props.title}
                        </Typography>
                        <Typography variant="body1">
                            {props.para1}
                        </Typography>
                        <Typography variant="body1">
                            {props.para2}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            {props.button1}
                        </Button>
                        <Button size="small" color="primary">
                            {props.button2}
                        </Button>
                    </CardActions>
                </Card>
    )
}