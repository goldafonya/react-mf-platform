import {RouteComponentProps, Link} from "@reach/router";
import React, {FC} from "react";
import {ROUTES} from "../constants/ROUTES";

export const Foo: FC<RouteComponentProps> = () => {
    return (
        <div>
            <div>
                <Link to={ROUTES.ROOT}>Назад</Link>
            </div>
            foo
        </div>
    )
};