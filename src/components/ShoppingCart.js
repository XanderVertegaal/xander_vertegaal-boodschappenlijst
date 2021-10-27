import React from 'react'
import List from './List'

const ShoppingCart = props => <List 
                                productData = {props.productData} 
                                clickHandler = {props.clickHandler}
                                displayAmount = {true}
                            />

export default ShoppingCart
