export default class Project {

    id: string;
    title: string;
    description: string;
    url: string;
    path: string;
    module: string;

    constructor(id: string, title: string, description: string, url: string, path: string, module: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
        this.path = path;
        this.module = module;
    }
}
