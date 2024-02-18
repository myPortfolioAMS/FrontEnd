import React from 'react';
import { getToken, getUser, resetUserSession} from '../../service/AuthService'; 




const abrigodegases = (props) => {

    const token = getToken();

    const user = getUser();
    

    const name = user !== 'undefined' && user ? user.username : '';
    console.log ('nome:', name);
    console.log ('token:', token);
    
    const logoutHandler = () => {
        resetUserSession();
        props.history.push('/login');

    }


    return (
        <div>
            <h1> Hello {name}! you have been loggined in!!! Welcome to the premium content. </h1>
            <input type = "button" value = "Logout" onClick = {logoutHandler}/>
        </div>

    )
}

export default abrigodegases;