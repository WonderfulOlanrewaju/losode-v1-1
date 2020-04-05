import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({children, ...rest}) => {
    const token = localStorage.getItem('token');
    return(
        <Route
        {...rest}
        render= {
            ({location})=> token ?(children) :(
            <Redirect to={{pathname:'/user-auth' , state: {
                from :location
            }}}></Redirect>
            )
        }
        />
    )
}