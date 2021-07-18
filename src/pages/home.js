import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

const home = () => {
    return (
        <Fragment>
            <h3>This is the <strong>Home</strong> Page!</h3>
            
            <Route path='/home/new-user'>
                <p>Hi, new user!!!!</p>
            </Route>

        </Fragment>
    )
}

export default home
