import React, { useState } from 'react'
import ShoppingCart from './ShoppingCart'
import GroceryList from './GroceryList'

const Container = () => {
    const [inputValue, setInputValue] = useState("")

    const handleChange = event => {
        setInputValue(event.target.value)
    }

    const [GroceryItems, setGroceryItems] = useState(
        [
            { id: 1, title: 'Brood'}, 
            { id: 2, title: 'Yoghurt'}, 
            { id: 3, title: 'Kattenvoer'}, 
            { id: 4, title: 'Chocolade'}
        ]
    )
    
    const [shoppingListItems, setShoppingListItems] = useState(
        [
            { id: 1, title: 'Melk', amount: 1}, 
        ]
    )

    const handleClickGroceryItem = event => {
        const newShoppingList = [...shoppingListItems]
        const itemTitle = event.target.innerText

        if (newShoppingList.some(x => x.title === itemTitle)) {
            addAmountToItem(itemTitle, newShoppingList)
        } else {
            createNewItem(itemTitle, newShoppingList)
        }
    }

    const addAmountToItem = (newItem, shoppingList) => {
        const existingItem = shoppingList.find(x => x.title === newItem)
        existingItem.amount++
        setShoppingListItems(shoppingList)
    }

    const createNewItem = (newTitle, shoppingList) => {
        const newId = shoppingListItems.length + 1
        const newObj = { id: newId, title: newTitle, amount: 1 }
        shoppingList.push(newObj)
        setShoppingListItems(shoppingList)
    }


    const emptyCart = () => {
        setShoppingListItems([])
    }

    const handleKeyDown = event => {
        if (event.key === 'Enter' && inputValue.replace(/\s/g,'') !== "") {
            const newTitle = inputValue
            const newId = GroceryItems.length + 1
            const newObj = { id: newId, title: newTitle, amount: 1}
            setGroceryItems(
                [
                    ...GroceryItems,
                    newObj
                ]
            )
            setInputValue("")
        }
    }

    return (
        <div className="container">
            <GroceryList
                productData = {GroceryItems} 
                clickHandler = {handleClickGroceryItem}
                handleKeyDown = {handleKeyDown}
                handleChange = {handleChange}
                inputValue = {inputValue}
            />

            <ShoppingCart 
                productData = {shoppingListItems}
                btnClickHandler = {emptyCart}
            />
        </div>
    )
}

export default Container