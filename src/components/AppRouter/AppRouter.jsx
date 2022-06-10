import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../../routes";


const AppRouter = () => {
    const user = false;

    return user ?
        (
            <Routes>
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} element={Component} exact={true}/>
                )}
                <Route path={"*"} element={<Navigate to="/" replace />}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} element={Component} exact={true}/>
                )}
                {/*<Route path={"*"} element={<Navigate to="/" replace />}/>*/}

            </Routes>
        )
};

export default AppRouter;