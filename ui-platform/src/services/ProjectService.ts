import Project from "../models/Project";
import {Foo} from "../components/Foo";
import {Bar} from "../components/Bar";

export default class ProjectService {
    static getProjectList = () => {

        return (
            [
                new Project(
                        "1",
                    "foo",
                    "description descriptiondescription descriptiondescription description",
                    "/foo",
                    Foo
                ),
                new Project(
                        "2",
                    "bar",
                    "description descriptiondescription descriptiondescription description",
                    "/bar",
                    Bar
                ),
            ]
        )
    }
}