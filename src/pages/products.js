import React from 'react'
import { Link } from 'react-router-dom'

const products = () => {
    return (
        <section>
            <h3>This is the <strong>Products</strong> Page!</h3>

            <ul>
                <li>
                    <Link to='Product-details/Book'>Book</Link>
                </li>
                <li>
                    <Link to='Product-details/Notebook'>Notebook</Link>
                </li>
                <li>
                    <Link to='Product-details/Pen'>Pen</Link>
                </li>
            </ul>

        </section>
    )
}

export default products
