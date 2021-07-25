import React, {FC, useCallback, useState} from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import Project from "../models/Project";

interface IProjectCard {
    project: Project;
}

export const ProjectCard: FC<IProjectCard> = ({ project }) => {
    const [isHover, setHover] = useState(false);

    const onMouseEnter = useCallback(() => setHover(true), []);
    const onMouseLeave = useCallback(() => setHover(false), []);

    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to={project.url}>
                <Paper elevation={isHover ? 4 : 1}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {project.title}
                            </Typography>
                            <Typography>
                                {project.description}
                            </Typography>
                            <Typography>{project.url}</Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </Link>
        </div>

    )
}