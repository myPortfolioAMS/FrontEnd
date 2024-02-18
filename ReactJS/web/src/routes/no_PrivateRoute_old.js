import React from 'react';
import {Redirect, Outlet,Navigate} from 'react-router-dom';
import {getToken} from '../service/AuthService';

const PrivateRoutes = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                return getToken() ? <Component {...props} /> 
                : <Redirect to={{pathname: '/login'}} />
            }}
        />
    )

}

export default PrivateRoutes;