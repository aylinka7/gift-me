import React from 'react';
import {Redirect, Route} from "react-router-dom";

export function PrivateRoute({Component, path, isAuth, exact, ...props}) {
    return (
        <Route exact={exact} path={path}>
            {
                isAuth ? <Component {...props} /> : <Redirect to="/auth" />
            }
        </Route>
    );
}






// import {Redirect, Route} from "react-router-dom";
//
//
// export const PrivateRoute = ({Component, path}) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user)
//     if(user === null) return <Redirect to="/auth"/>
//     return <Route path={path}><Component /></Route>
// }