import React, { useContext } from 'react'
import '../styles/OrderItem.scss'
import icon from '@icons/icon_close.png'
import { AppContext } from './../context/AppContext';

export const OrderItem = ({ product }) => {
    const { removeFromCart } = useContext(AppContext)

    const handleRemove = product => {
        removeFromCart(product)
    }
    return (
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={icon} alt="close" onClick={() => {
                handleRemove(product)
            }} />
        </div>
    )
}
