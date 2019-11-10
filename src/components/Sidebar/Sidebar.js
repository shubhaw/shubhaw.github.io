import React from 'react';
import { Drawer, List, ButtonBase } from '@material-ui/core';
import styleClasses from './Sidebar.module.css';

export default function Sidebar(props) {
    const links = [
        {
            text: 'Home',
            href: '#home',
            class: 'homeSideNav'
        },
        {
            text: 'About',
            href: '#about',
            class: 'aboutSideNav'
        },
        {
            text: 'Experience',
            href: '#experience',
            class: 'experienceSideNav'
        },
        {
            text: 'Projects',
            href: '#projects',
            class: 'projectsSideNav'
        },
        {
            text: 'Skills',
            href: '#skills',
            class: 'skillsSideNav'
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
                                <a href={link.href} className={styleClasses.link + ' ' + link.class}>{link.text}</a>
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