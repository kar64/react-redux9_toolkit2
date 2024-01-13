import React from 'react';
import {  useDispatch } from "react-redux";
import{resetDestination}from'../redux/slice/destinationSlice';
import{resetCount}from'../redux/slice/counterSlice';
 export const Reset=()=> {
    const dispatch=useDispatch();
    const res=()=>{
        dispatch(resetDestination());
        // dispatch(resetCount());
    }
  return (
   <button type="button" className=" btn btn-warning"
   style={{display:'block',margin:'5px auto'}}
   onClick={()=>res()}
   >Reset</button>
  );
}
