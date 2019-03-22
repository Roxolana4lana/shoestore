import React from 'react'

export default ({item:{
    type,gender,color,url,qty,size,_id
},onDelete})=>{
    return(
        <div>
        <div>
            <ul key={_id}>
                    <img src={url} alt="name" style={{ height: '27rem' }} />
                    <li>Type: {type}</li>
                    <li>Color: {color}</li>
                    <li>Gender: {gender}</li>
                    <li>Quantity: {qty}</li>
                    <li>Sizes: {size}</li>
            </ul>
                <i className="fas fa-trash"
                onClick={()=>onDelete(_id)}>delete</i>
        </div>
        </div>
    )
}