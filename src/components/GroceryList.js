import React from 'react'
import List from './List'
import InputField from './InputField'

const GroceryList = props => {
    return (
        <>
            <h2 className="grocery-list-title">
                Boodschappenlijst
            </h2>
            <InputField 
                keyDownHandler = {props.handleKeyDown}
                changeHandler = {props.handleChange}
                value={props.inputValue}
            />
            <List 
                className = "grocery-list-list"
                productData = {props.productData} 
                clickHandler = {props.clickHandler}
                displayAmount = {false} 
            />
        </>
    )
}

export default GroceryList