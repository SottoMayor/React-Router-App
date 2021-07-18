import React from 'react'
import { Link } from 'react-router-dom'

const products = () => {
    return (
        <section>
            <h3>This is the <strong>Products</strong> Page!</h3>

            <ul>
                <li>
                    <Link to='/products/Book'>Book</Link>
                </li>
                <li>
                    <Link to='/products/Notebook'>Notebook</Link>
                </li>
                <li>
                    <Link to='/products/Pen'>Pen</Link>
                </li>
            </ul>

        </section>
    )
}

export default products
