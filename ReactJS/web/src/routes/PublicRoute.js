import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../service/AuthService';

const PublicRoute = ({ element: Component, ...rest }) => {

    return (
        <Route {...rest} render={props => (
            !getToken() ? <Component {...props} /> 
            :
             <Navigate to="/premium-content" />
            
            
                
        )} />
    );
}

export default PublicRoute;