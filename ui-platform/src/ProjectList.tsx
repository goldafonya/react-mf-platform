import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Project from "./Project";

const projectList: Project[] = [
    new Project("1", "title", "description descriptiondescription descriptiondescription description"),
];


export const ProjectList = () => {

    return (
        <>
            {projectList.map((item) => (
                <Paper elevation={3} key={item.id}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            {item.description}
                        </CardContent>
                    </Card>
                </Paper>
            ))}
        </>
    )
};