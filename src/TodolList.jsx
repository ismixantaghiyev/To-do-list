import React from 'react'
import Input from './Input'

function TodolList({data, setData}) {
    return (
        <div className='todolistAll'>
            {data.map(item=><Input key={item.id} {...item} data={data} setData={setData}/> )}
        </div>
    )
}

export default TodolList