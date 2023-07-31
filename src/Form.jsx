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
            console.log(value.text);
            localStorage.setItem("data", JSON.stringify(data));
        }
        value.text = ""
    }

    
    const deleteAllItems = (e) => {
        e.preventDefault();
        setData([]); 
    };


    return (
        <div className='mb-4'>
            <h1 className='text-center'>Todo List</h1>
            <form className='d-flex salam gap-2' onSubmit={AddData}>
                <input  onChange={changeValue} value={value.text} className='form-input' type="text" placeholder='Enter Task. . .' />
                <button className="btn btn-dark">Add</button>
                <button onClick={deleteAllItems} type="button" className="btn btn-danger" style={{width:"150px"}}>Delete All</button>
            </form>
        </div>
    )
}

export default Form