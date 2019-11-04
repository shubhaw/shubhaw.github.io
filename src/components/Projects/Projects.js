import React from 'react';
import { Typography } from '@material-ui/core';
import styleClasses from './Projects.module.css';
import Image from '../../assets/images/bg.jpg';
import CustomCard from '../CustomCard/CustomCard';
export default function Projects() {

    const projectList = [
        {
            title: 'Sticky Reminders',
            image: Image,
            para1: 'Sticky Reminders is an Android App',
            para2: 'Sticky Reminders is an Android App. Sticky Reminders is an Android App. Sticky Reminders is an Android App.',
            button1: 'View',
            button2: 'Share'
        },
        {
            title: 'Reminder Your Friend',
            image: Image,
            para1: 'Sticky Reminders is an Android App',
            para2: 'Sticky Reminders is an Android App. Sticky Reminders is an Android App. Sticky Reminders is an Android App.',
            button1: 'View',
            button2: 'Share'
        },
        {
            title: 'Store Locator',
            image: Image,
            para1: 'Sticky Reminders is an Android App',
            para2: 'Sticky Reminders is an Android App. Sticky Reminders is an Android App. Sticky Reminders is an Android App.',
            button1: 'View',
            button2: 'Share'
        },
        {
            title: 'Calculator',
            image: Image,
            para1: 'Sticky Reminders is an Android App',
            para2: 'Sticky Reminders is an Android App. Sticky Reminders is an Android App. Sticky Reminders is an Android App.',
            button1: 'View',
            button2: 'Share'
        },
        {
            title: 'Portfolio',
            image: Image,
            para1: 'Sticky Reminders is an Android App',
            para2: 'Sticky Reminders is an Android App. Sticky Reminders is an Android App. Sticky Reminders is an Android App.',
            button1: 'View',
            button2: 'Share'
        }
    ]

    return (
        <div className={styleClasses.Projects}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
                Projects
            </Typography>
            <div className={styleClasses.ProjectsBody}>
                {
                    projectList.map(project => (
                        <CustomCard key={project.title}
                            title={project.title}
                            image={project.image}
                            para1={project.para1}
                            para2={project.para2}
                            button1={project.button1}
                            button2={project.button2}
                        />
                    ))
                }
            </div>
        </div>
    )
}