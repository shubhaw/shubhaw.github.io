import React from 'react';
import { Typography } from '@material-ui/core';
import styleClasses from './Projects.module.css';
import PortfolioImage from '../../assets/images/bg.jpg';
import CalculatorImage from '../../assets/images/Calculator.jpg';
import StickyRemindersImage from '../../assets/images/StickyReminders.png';
import RemindYourFriendImage from '../../assets/images/RemindYourFriend.png';
import SimpleNotepadImage from '../../assets/images/SimpleNotepad.png';
import StoreLocatorImage from '../../assets/images/StoreLocator.png';
import PictionaryImage from '../../assets/images/Pictionary.jpg';
import ProjectCard from './ProjectCard/ProjectCard';

export default function Projects() {

    const projectList = [
        {
            title: 'Sticky Reminders',
            image: StickyRemindersImage,
            label: 'Android',
            para1: 'This is an android app which puts the reminders on your phone\'s notification area (which will also be visible on lock-screen) and those notifications are persistent. They don\'t go off on swiping or even when you clear all notifications.',
            para2: 'The reminders can be scheduled for one-time, daily, weekly, monthly or after n days.',
            button1: 'View',
            button2: 'Share',
            link: 'https://play.google.com/store/apps/details?id=com.shubhaw.stickyreminders'
        },
        {
            title: 'Reminder Your Friend',
            image: RemindYourFriendImage,
            label: 'Android',
            para1: 'This app puts the reminders on your friend\'s phone\'s notification bar and they are persistent. They don\'t go off on swiping or even on click of "Clear All" button on thenotification bar. It will go off only when they mark it as Done by pressing the "Done" button on the notification. This will also notify you that the task you reminded your friend for, is completed.',
            para2: '',
            button1: 'View',
            button2: 'Share',
            link: 'https://play.google.com/store/apps/details?id=com.shubhaw.remindyourfriend'
        },
        {
            title: 'Store Locator',
            image: StoreLocatorImage,
            label: 'Web, React',
            para1: 'Store Locator is a responsive web app which is used to store details and location of stores in an area. It is built using React, Redux, Firestore and material-ui.',
            para2: 'It has functionalities like Phone Number Authentication, Role Based Access Control, Excel Report download, etc.',
            button1: 'View',
            button2: 'Share',
            link: 'https://github.com/shubhaw/store-locator'
        },
        {
            title: 'Pictionary',
            image: PictionaryImage,
            label: 'Web, React',
            para1: 'Pictionary is a fun guessing game in which you need to draw/sketch the word which you are given and the other players need to guess that word. At the end of stipulated time, it shows your score and gives you choice to download the images which you had drawn during the game.',
            para2: 'It uses Canvas API for drawing and has touch support as well, making it possible to play on mobile devices using fingers or stylus. It is built using React and has Redux for store mamagement.',
            button1: 'View',
            button2: 'Share',
            link: 'https://github.com/shubhaw/pictionary'
        },
        {
            title: 'Calculator',
            image: CalculatorImage,
            label: 'Web, React',
            para1: 'This is a simple web app completely built using React and Redux. It currently has two types of calculators: Standard Calculator & Currency Converter',
            para2: 'A sidebar is there which has the navigation links to both the calculators. The button panel of the calculator has been designed using CSS Grid Layout. The currency converter fetches the current conversion rates from https://api.exchangeratesapi.io/ using axios.',
            button1: 'View',
            button2: 'Share',
            link: 'https://github.com/shubhaw/calculator'
        },
        {
            title: 'Portfolio',
            image: PortfolioImage,
            label: 'Web, React',
            para1: 'This portfolio web app itself is built using React and Material UI. Intersection observer has been used to make the top bar transparent and non-transparent based on the page scrolled. Flex and Grid layouts have also been used to make this website responsive.',
            para2: '',
            button1: 'View',
            button2: 'Share',
            link: 'https://github.com/shubhaw/shubhaw.github.io'
        },
        {
            title: 'Simple Notepad',
            image: SimpleNotepadImage,
            label: 'Android',
            para1: 'Simple Notepad is my first android app. It\'s a convenient and simple app with just few basic functionalities like auto-save (using the lifecycle methods of android), mark as favourite, etc.',
            para2: '',
            button1: 'View',
            button2: 'Share',
            link: 'https://play.google.com/store/apps/details?id=com.shubhaw.simplenotepad'
        }
    ]

    return (
        <div id="projects" className={styleClasses.Projects}>
            <Typography variant="h3" style={{ textAlign: "center" }}>
                Projects
            </Typography>
            <div className={styleClasses.ProjectsBody}>
                {
                    projectList.map(project => (
                        <ProjectCard key={project.title}
                            title={project.title}
                            image={project.image}
                            label={project.label}
                            para1={project.para1}
                            para2={project.para2}
                            button1={project.button1}
                            button2={project.button2}
                            link={project.link}
                        />
                    ))
                }
            </div>
        </div>
    )
}