import React from 'react';
import { Typography } from '@material-ui/core';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import styleClasses from './Experience.module.css';

export default function Experience() {
    const experienceList = [
        {
            companyName: 'Microsoft',
            duration: 'Dec 2016 - Present',
            para1: 'I work as an Associate Consultant at Microsoft Global Delivery in Hyderabad, India. Here, I have worked on variety of things like Microsoft Bot Framework, Web development using React and Angular, Powershell, Azure SQL, Azure Data Factory, etc. I also have been using Azure DevOps for Continuous Integration/Continous Deployment (CI/CD) of the solutions.',
            para2: ''
        },
        {
            companyName: 'Infosys',
            duration: 'Jul 2015 - Oct 2016',
            para1: 'I worked in Infosys for around an year as a Systems Engineer. I was actually working for EdgeVerve, a product based subsidiary of Infosys, where was developing a tool that captures and analyses data by retailers of a Consumer Product company.',
            para2: 'For outstanding performance during the internship at Infosys Global Education Center, Mysore, my name is there at Infosys Hall of Fame.'
        }
    ]
    return (
        <div id="experience" className={styleClasses.Experience}>
            <Typography variant="h3" style={{ textAlign: "center" }}>
                Experience
            </Typography>
            <div className={styleClasses.ExperienceBody}>
            {
                experienceList.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        companyName={experience.companyName}
                        duration={experience.duration}
                        para1={experience.para1}
                        para2={experience.para2}
                    />
                ))
            }
            </div>
        </div>
    )
}