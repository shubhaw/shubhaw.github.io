import React from 'react';
import styleClasses from './Footer.module.css';

import Typography from '@material-ui/core/Typography';
import Contact from '../Contact/Contact';

export default function Footer() {

    const projectList = [
        {
            title: 'Sticky Reminders',
            link: 'https://play.google.com/store/apps/details?id=com.shubhaw.stickyreminders'
        },
        {
            title: 'Reminder Your Friend',
            link: 'https://play.google.com/store/apps/details?id=com.shubhaw.remindyourfriend'
        },
        {
            title: 'Store Locator',
            link: 'https://github.com/shubhaw/store-locator'
        },
        {
            title: 'Calculator',
            link: 'https://github.com/shubhaw/calculator'
        },
        {
            title: 'Portfolio',
            link: 'https://github.com/shubhaw/shubhaw.github.io'
        },
        {
            title: 'Simple Notepad',
            link: 'https://play.google.com/store/apps/details?id=com.shubhaw.simplenotepad'
        }
    ]

    const sitemap = [
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
        },
        // {
        //     text: 'Contact',
        //     href: '#skills'
        // }
    ];

    return (
        <div className={styleClasses.Footer}>
            <div className={styleClasses.sitemap}>
                <Typography variant="h5" className={styleClasses.sectionHeader}>
                    Sitemap
                </Typography>
                {
                    sitemap.map(site => (
                        <a href={site.href} key={site.text} className={styleClasses.link}>{site.text}</a>
                    ))
                }
            </div>
            <div className={styleClasses.projects}>
                <Typography variant="h5" className={styleClasses.sectionHeader}>
                    Projects
                </Typography>
                {
                    projectList.map(project => (
                        <a href={project.link} key={project.title} className={styleClasses.link}>{project.title}</a>
                    ))
                }
            </div>
            <div className={styleClasses.contact}>
                <Contact />
            </div>
        </div>
    )
}