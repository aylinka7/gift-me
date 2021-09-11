import React from 'react';
import {Redirect, Route} from "react-router-dom";

export function RegistrRoute({Component, path, isAuth, exact, ...props}) {
    return (
        <Route exact={exact} path={path}>
            {
                !isAuth ? <Component {...props} /> : <Redirect to="/profilesettings"/>
            }
        </Route>
    );
}


// import {Redirect, Route} from "react-router-dom";
//
//
// export const OpenRoute = ({Component, path}) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user)
//     if(user !== null) return <Redirect to="/dashboard"/>
//     return <Route path={path}><Component /></Route>
// }
