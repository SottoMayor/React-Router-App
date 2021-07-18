import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'

const mainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>

            <h3>React-Router-app</h3>

        </header>
    )
}

export default mainHeader
