import {useState} from "react";

export const useAuth = () => {
    const [auth, setAuth] = useState<null | boolean>(true);

    return {auth};
};