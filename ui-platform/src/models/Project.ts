import {RouteComponentProps} from "@reach/router";
import React from "react";

export default class Project {

    id: string;
    title: string;
    description: string;
    url: string;
    component: React.FC<RouteComponentProps>;

    constructor(id: string, title: string, description: string, url: string, component: React.FC) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.component = component;
    }
}
