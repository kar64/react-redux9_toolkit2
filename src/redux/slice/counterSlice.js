import{createSlice}from '@reduxjs/toolkit';

const initialState={count:10};

export const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        // actions
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        mincrement:(state,action)=>{
            state.count+=action.payload;
        },
        mdecrement:(state,action)=>{
            state.count-=action.payload;
        },
        // resetCount:(state)=>{
        //     state.count=10;
        // }

    },
    extraReducers:(builder)=>{
        builder.addCase('destination/resetDestination',(state)=>{
            state.count=10;
        })
    }
})

export const {increment,decrement,mincrement,mdecrement,resetCount}=counterSlice.actions;
export const counterReducer=counterSlice.reducer;