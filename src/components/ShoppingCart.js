import React from 'react'
import EmptyCartButton from './EmptyCartButton'
import List from './List'

const ShoppingCart = props => {
    return (
        <>
            <h2 className="shopping-cart-title">
                Winkelwagen
            </h2>

            <EmptyCartButton
                className = "empty-card-button"
                btnClickHandler = {props.btnClickHandler}
            />
            
            <List 
                className = {(props.productData.length === 0 ? "hidden" : "shopping-cart-list")}
                productData = {props.productData} 
                clickHandler = {props.clickHandler}
                displayAmount = {true}
            />
        </>
    )
}

export default ShoppingCart
