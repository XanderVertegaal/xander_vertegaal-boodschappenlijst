import React from 'react'

const InputField = props => {
    return (
        <input
            className = "input-field"
            value={props.value}
            type="text"
            placeholder="Vul een artikel toe en druk op Enter"
            onKeyDown={props.keyDownHandler}
            onChange={props.changeHandler}
        >
        </input>
    )
}

export default InputField