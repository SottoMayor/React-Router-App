import React from 'react'
import classes from './MainHeader.module.css'

const mainHeader = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                </ul>
            </nav>

            <h3>React-Router-app</h3>

        </header>
    )
}

export default mainHeader
