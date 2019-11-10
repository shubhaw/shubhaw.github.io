import React from 'react';
import styleClasses from './Contact.module.css';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShopIcon from '@material-ui/icons/Shop';
import MailIcon from '@material-ui/icons/Mail';

export default function Contact() {
    return (
        <div>
            <Typography variant="h5">
                Contact
            </Typography>
            <div className={styleClasses.Contact}>
                <a href="mailto:shubhawkumar@gmail.com?cc=dev.shubhaw@gmail.com" className={styleClasses.contactLinks}>
                    <MailIcon fontSize="large" className={styleClasses.icon} />
                    <span className={styleClasses.iconText}>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/shubhaw/" className={styleClasses.contactLinks}>
                    <LinkedInIcon fontSize="large" className={styleClasses.icon} />
                    <span className={styleClasses.iconText}>LinkedIn</span>
                </a>
                <a href="https://github.com/shubhaw" className={styleClasses.contactLinks}>
                    <GitHubIcon fontSize="large" className={styleClasses.github} />
                    <span className={styleClasses.iconText}>Github</span>
                </a>
                <a href="https://play.google.com/store/apps/developer?id=Shubhaw+Kumar" className={styleClasses.contactLinks}>
                    <ShopIcon fontSize="large" className={styleClasses.icon} />
                    <span className={styleClasses.iconText}>Play Store</span>
                </a>
            </div>
        </div>
    )
}