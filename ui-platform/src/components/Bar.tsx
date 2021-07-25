import {Link, RouteComponentProps} from "@reach/router";
import React, {FC} from "react";
import {ROUTES} from "../constants/ROUTES";

export const Bar: FC<RouteComponentProps> = () => {
    return (
        <div>
            <div>
                <Link to={ROUTES.ROOT}>Назад</Link>
            </div>
            bar
        </div>
    )
};