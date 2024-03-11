import React from 'react'

const ToggleBtn = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen(prev => !prev)}>
            button
        </button>
    )
}

export default ToggleBtn