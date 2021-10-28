import React from 'react'

const EmptyCartButton = props => {
    return (
        <button 
            onClick={props.btnClickHandler}
            className = "empty-cart-button"
        >
            Winkelwagen legen
        </button>
    )
}

export default EmptyCartButton