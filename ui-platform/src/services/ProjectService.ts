import Project from "../models/Project";

export default class ProjectService {
    static getProjectList = () => {

        return (
            [
                new Project(
                    "reactMobxApp",
                    "reactMobxApp",
                    "Description",
                    "https://goldafonya.github.io/react-mobx-todo-list/reactMobxEntry.js",
                    "/reactMobxApp",
                    "./ToDoList",
                ),
            ]
        )
    }
}