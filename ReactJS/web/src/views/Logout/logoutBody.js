import React from 'react';
import * as S from './styles';
import { resetUserSession} from '../../service/AuthService'; 


const logoutBody = (props) => {

    const logoutHandler = () => {
        resetUserSession();
        props.history.push("./Login");

    }

    return (

        <div> 
            <S.Container>
            <input type = "button" value = "Logout" onClick = {logoutHandler}/>
            </S.Container>
        </div>
    );
}

export default logoutBody;