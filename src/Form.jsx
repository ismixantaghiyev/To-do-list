import React, { useState } from 'react'

function Form({ data, setData }) {

    const [value, setValue] = useState({ text: "" })

    const changeValue = (e) => {
        setValue({ text: e.target.value })
    }

    const AddData = (e) => {
        e.preventDefault()
        if (value.text !== "") {
            setData([...data, { ...value, id: Date.now() }])
        }
        value.text = ""
    }

    return (
        <div>
            <h1 className='text-center'>Todo List</h1>
            <form className='d-flex gap-2'>
                <input onChange={changeValue} value={value.text} className='form-input' type="text" placeholder='Enter Task. . .' />
                <button onClick={AddData} type="button" className="btn btn-dark">Add</button>
            </form>
        </div>
    )
}

export default Form