import React from 'react'
import {connect} from 'react-redux'
import Item from '../components/Item'
import ItemMan from '../components/ItemMan'
import { deleteItem } from '../actions'

function ShoeList({items,onDelete}){
   
    if(!items.length){
        return(
            <div>
            no
            </div>
        )
    }
    const filtered = items.filter(item =>item.gender!=="man")
    const filteredW = items.filter(item => item.gender !== "woman")
    return(
        <div>
        <div>
        {filtered.map(item=>{
           
            return(
                <Item item={item} onDelete={onDelete} key={item.id}/>
                
            )
        })}
            </div>
            <h1>Man</h1>
            <div>
                {filteredW.map(item => {

                    return (
                        <ItemMan item={item} onDelete={onDelete} key={item.id} />

                    )
                })}
            </div>
        </div>
    )
}
const mapStateToProps = state=>{
    return{
        items:state.items
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        onDelete:id=>{
            dispatch(deleteItem(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoeList)