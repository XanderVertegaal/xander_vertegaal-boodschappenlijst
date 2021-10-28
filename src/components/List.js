import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
    render() {
        const listItems = this.props.productData.map(item => 
            <ListItem 
                key={item.id}
                title={item.title}
                value={item.title}
                amount={item.amount}
                clickHandler = {this.props.clickHandler}
                displayAmount = {this.props.displayAmount}
            />
        )
        return (
            <ul
            className={this.props.className}>
                {listItems}   
            </ul>
        )
    }
}

export default List