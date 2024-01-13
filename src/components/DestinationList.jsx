import React from 'react';
import {useSelector,useDispatch}from'react-redux';
import{destinationClicked}from'../redux/slice/destinationSlice';

 export const DestinationList=()=> {
  const dest=useSelector((state)=>state.destinationStore.dest);
  const dispatch=useDispatch();
 
  return (
    <>
     { dest.map((item,index)=>(<div style={{display:'flex',justifyContent:'space-between',maxWidth:'300px',margin:'10px auto'}} key={index}>{item.name}
     <button type="button" className="btn btn-success"
      onClick={()=>dispatch(destinationClicked(item))}
     >Details</button></div>))}
    </>
  
  );
}
