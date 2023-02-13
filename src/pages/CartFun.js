import React,{useReducer} from 'react'
import './CartFun.css';

const CartFun = ({getVal}) => {
    const reducer=(state,action)=>{
        if(action.type==='INCREASE')
        {
            return state+1;
        }
        else if(action.type==='DECREASE')
        {
            if(state===0)
                return 0;
            return state-1;
        }
    }
    const [state,dispatch]=useReducer(reducer,0);

    return (
    <>
        <div className='btns'>
            <button className='cartBtn add' onClick={()=>dispatch({type:'INCREASE'})}>+</button>
            <div className='cartVal' onChange={()=>getVal({state})}>{state}</div>
            <button className='cartBtn sub' onClick={()=>dispatch({type:'DECREASE'})}>-</button>
        </div>
    </>
  )
}

export default CartFun;