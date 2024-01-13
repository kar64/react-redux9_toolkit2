import React,{useState} from 'react';
import {useSelector,useDispatch}from'react-redux';
import{increment,decrement,mincrement,mdecrement}from'../redux/slice/counterSlice';

 export const Counter=()=> {

    const count=useSelector((state)=>state.counterStore.count)
    const dispatch=useDispatch();
    const[userValue,setVal]=useState(1);

  return (
    <>
     <h1 style={{textAlign:'center'}}>{count}</h1>
     <div style={{display:'flex',justifyContent:'space-around'}}>
      <div >
      <button type="button" className="btn btn-success"
        onClick={()=>dispatch(increment())}
        >+</button>&nbsp;
        <button type="button" className="btn btn-danger"
        onClick={()=>dispatch(decrement())}
        >-</button>
      </div>
      <div style={{display:'flex',gap:'10px'}}>
        <input type="text" placeholder='multiplayer' className="form-control"
        value={userValue}
        onChange={(e)=>{setVal(Number(e.target.value)?Number(e.target.value):1
          )}}
        
        />
      <button type="button" className="btn btn-success"
        onClick={()=>dispatch(mincrement(userValue))}
        >+</button>
        <button type="button" className="btn btn-danger"
        onClick={()=>dispatch(mdecrement(userValue))}
        >-</button>
     
      </div>
      
     </div>
     

    </>
  

  );
}