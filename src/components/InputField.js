import React from 'react'

const InputField = props => {
    return (
        <input
            value={props.value}
            type="text"
            placeholder="Vul een boodschap in"
            onKeyDown={props.keyDownHandler}
            onChange={props.changeHandler}
        >
        </input>
    )
}

export default InputField