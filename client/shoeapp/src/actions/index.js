import { ADD_ITEM, DELETE_ITEM, FETCH_ITEM } from './types'
import axios from 'axios'

const apiUrl = 'http://localhost:3001/api/shoes'

export const getItems = items =>{
    return{
        type: FETCH_ITEM,
        items
    }
}

export const getItemsAll = () =>{
    return(dispatch)=>{
        return axios.get(apiUrl)
        .then(res=>{
            dispatch(getItems(res.data))
        })
        .catch(error=>{
            throw(error)
        })
    }
}

export const createItem = ({type,gender,color,url,size,qty})=>{
return(dispatch)=>{
    return axios.post( `${apiUrl}`, { type, gender, color, url, size, qty})
    .then(res=>{
        dispatch(createItemNew(res.data))
    })
    .catch(error=>{
        throw(error)
    })
}
}
export const createItemNew = data =>{
    return{
        type: ADD_ITEM,
        payload:{
            type:data.type,
            gender:data.gender,
            color:data.color,
            url:data.url,
            size:data.size,
            qty:data.qty
        }
    }
}

export const deleteItemNew = _id =>{
    return{
        type: DELETE_ITEM,
        payload:{
            _id
        }
    }
}

export const deleteItem = _id =>{
    return (dispatch) =>{
        return axios.delete(`${apiUrl}/${_id}`)
        .then(res=>{
            dispatch(deleteItemNew(res.data))
        })
        .catch(error=>{
            throw(error)
        })
    }
}