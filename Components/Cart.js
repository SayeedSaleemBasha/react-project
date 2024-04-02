import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove } from '../redux/CartSlice'





const Cart=()=>{

    const cartData=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
    console.log(cartData)

    const handleRemove =(id)=>{
        dispatch(Remove(id))


    }
        return(
        <div>
            <h2>cart</h2>
            {
                cartData && cartData.length> 0 ? (
                    cartData.map((item)=>(
                        <div className='row'>
                            <div className='col-md-4'>
                                <img  src={item.image} className='img-fluid'  style={{height:"200px"}}/>
                            </div>
                            <div className='col-md-4'>
                                <h4 className='mt-3'>{item.title}</h4>
                                <h4>{item.categery}</h4>
                            </div>
                            <div className='col-md-4'>
                            <p>$:price{item.price}</p>
                                <button className='btn btn-danger'
                                onClick={()=>{handleRemove(item.id)}}
                                >Remove</button>
                            </div>
                        </div>
                    ))
                ) : <p> please add some product</p>
            }
        </div>
    )
}
export default Cart