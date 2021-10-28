import React from 'react'

const ListItem = props => {
    return (
        <>
            <li 
                className="list-item"
                onClick = {props.clickHandler}
            >
                {props.title} 
                {props.displayAmount && 
                <span>
                    Aantal: {props.amount}
                </span>}
            </li>

        </>
    )
}

export default ListItem