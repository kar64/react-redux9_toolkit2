import{createSlice}from'@reduxjs/toolkit';

const initialState={dest:[
    {
        name:'Hong Kong',
        days:7,
        fact:'World`s longest covered escalator'
    },
    {
        name:'Japan',
        days:10,
        fact:'Japan is mostly mountains'
    },
    {
        name:'New Zealand',
        days:14,
        fact:'Last country in the world to be inhabited by humans'
    }

] ,
destinationSelect:null
}
export const destinationSlice=createSlice({
    name:'destination',
    initialState:initialState,
    reducers:{
        destinationClicked:(state,action)=>{
            state.destinationSelect=action.payload;
            
        },
        resetDestination:(state,action)=>{
            // console.log(action);
            state.destinationSelect=null;
        }
    }
})

export const destinationReducer=destinationSlice.reducer;
export const{destinationClicked,resetDestination}=destinationSlice.actions;