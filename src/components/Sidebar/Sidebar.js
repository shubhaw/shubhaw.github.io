import React from 'react';
import { Drawer, List, ButtonBase } from '@material-ui/core';
import styleClasses from './Sidebar.module.css';

export default function Sidebar(props) {
    const links = [
        {
            text: 'Home',
            href: '#home'
        },
        {
            text: 'About',
            href: '#about'
        },
        {
            text: 'Experience',
            href: '#experience'
        },
        {
            text: 'Projects',
            href: '#projects'
        },
        {
            text: 'Skills',
            href: '#skills'
        }
    ];

    return (
        <Drawer anchor="right" open={props.show} variant="temporary" onClose={props.sidebarCloseHandler}>
            <div
                className={styleClasses.list}
                role="presentation"
            >
                <List>
                    {
                        links.map(link => (
                            <ButtonBase className={styleClasses.buttonBase} onClick={props.sidebarCloseHandler} key={link.text}>
                                <a href={link.href} className={styleClasses.link}>{link.text}</a>
                            </ButtonBase>
                            // <ListItem button key={link.text}>
                            //     <ListItemText primary={link.text} />
                            // </ListItem>
                        ))
                    }

                </List>
            </div>
        </Drawer>
    )
}