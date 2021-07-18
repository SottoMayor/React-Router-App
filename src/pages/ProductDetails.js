import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    // Initializing the useParams hook
    const params = useParams();
    //console.log(params)

    return (
        <div>
            <h3>This is the <strong>Product Details</strong> Page!</h3>
            <p>The productId is <strong>{params.productId}</strong></p>
        </div>
    )
}

export default ProductDetails
