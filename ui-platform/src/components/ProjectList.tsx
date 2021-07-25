import React, {FC} from "react";
import ProjectService from "../services/ProjectService";
import {RouteComponentProps} from "@reach/router";
import {ProjectCard} from "./ProjectCard";
import Grid from "@material-ui/core/Grid";

export const ProjectList: FC<RouteComponentProps> = () => {

    return (
        <div style={{paddingTop: "12px"}}>
            <Grid container spacing={3}>
                {ProjectService.getProjectList().map((item) => (
                    <Grid item key={item.id} style={{width: "100%"}}>
                        <ProjectCard project={item}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};