import React from 'react';

function InputField(props) {
    return (
        <div>
            <input onChange={(e) => props.changeEvent(e, props.unique)} type='text' value={props.val} />
            <button onClick={() => props.delete(props.unique)}> Delete </button>
            { props.showPlus ? <button onClick={() => props.add()}>Add</button> : '' }
        </div>
    );
}

export default InputField;