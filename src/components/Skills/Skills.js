import React from 'react';
import { Typography, Paper, Card } from '@material-ui/core';
import styleClasses from './Skills.module.css';

export default function Skills() {
    const skills = [
        'HTML', 'Javascript', 'React', 'Redux', 'Angular', 'Jest', 'CSS', 'SCSS',
        'Java', 'C#', 'Android App Development', 'Powershell',
        'Azure SQL', 'Firebase Firestore', 'Firebase Realtime Databse',
        'Firebase Cloud Functions', 'Azure Data Factory', 'Azure Devops',
        'GIT', 'Agile Development',
        'Photoshop', 'Figma'
    ]
    return (
        <div id="skills" className={styleClasses.Skills}>
            <Typography variant="h3" style={{textAlign: "center"}}>
                Skills
            </Typography>
            <Paper className={styleClasses.SkillsBody}>
                {
                    skills.map(skill => (
                        <Card className={styleClasses.Skill} key={skill}>
                            {skill}
                        </Card>
                    ))
                }
            </Paper>
        </div>
    )
}