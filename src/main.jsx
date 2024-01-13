import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom/client';
import {Header}from'./layout/Header';
import {Footer}from'./layout/Footer';
import{store}from'./redux/store';
import{Provider}from'react-redux';
import{Counter}from'./components/Counter';
import{DestinationList}from'./components/DestinationList';
import{DestinationFact}from'./components/DestinationFact';
import{Reset}from'./components/Reset';




const App=()=>{
    return(
        <>
        <Provider store={store}>
            <Header/>
            <Reset/>
            <Counter/>
            <DestinationList/>
            <DestinationFact/>
            <Footer/>  
        </Provider>
        
        
        
        </>
    )
};
const root=ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)