import React from 'react'
import CartItem from './CartItem'
import RecommendedProducts from './RecommendedProducts'
const Cart = ()=> {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <CartItem />
                </div>
                <RecommendedProducts />
            </div>
        </>
    )
}

export default Cart