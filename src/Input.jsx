import React, { useRef, useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';


function Input({ id, text, data, setData }) {
    const [newValue, setNewValue] = useState(text)
    const [status, setStatus] = useState(true)
    const inputRef = useRef()
    const change = (e) => {
        setNewValue(e.target.value)
    }

    const changeInput = () => {
        setStatus(!status)
        inputRef.current.focus()
        const findData = data.find(item => item.id == id)
        findData.text = newValue
        localStorage.setItem("data", JSON.stringify(data));
    }
    const deleteData = () => {
        const isi = data.filter(item => item.id !== id)
        setData(isi)
    }
    return (
        <div className='editDelete d-flex'>
            <input ref={inputRef} readOnly={status} value={newValue} onChange={change} type="text" className={`${!status && "border border-success"}`} />
            <button onClick={changeInput}>{status ? <BiSolidEdit style={{ fontSize: "25px", color: "green" }} /> : <div style={{ color: "green", fontWeight: "500" }}>Save</div>}</button>
            <button onClick={deleteData}><AiOutlineDelete style={{ fontSize: "25px", color: "red" }} /></button>
        </div>
    )
}

export default Input