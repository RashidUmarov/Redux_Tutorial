import React from "react";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";

import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './redux/reducers';
import {logging} from "./redux/midllewares/logging";

import ReduxApp from "./components/App_redux";

const store = createStore(reducer,
    compose(applyMiddleware(logging),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


//
// console.log('store',store);
// console.log('2',store.getState());
//
// const testButton=document.querySelector(".testButton");
// const items=document.querySelector(".testUL");
// const inputValue=document.querySelector(".testInput");
//
// store.subscribe(()=>{
//     console.log('subscribe',store.getState());
//
//     items.innerHTML='';
//     inputValue.value='';
//     store.getState().map(item=>{
//         const li=document.createElement('li');
//         li.textContent=item;
//         items.append(li);
//     })
// })

//
// store.dispatch({type:'WRITE',payload:'OYEEE'})


// testButton.addEventListener('click',()=>{
//     console.log('INPUT',inputValue.value);
//     store.dispatch({type:'WRITE',payload:inputValue.value});
// })

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ReduxApp/>,
    </Provider>);

// ReactDOM.render(
//     <Provider store={store}>
//         <ReduxApp/>,
//     </Provider>,
//     document.getElementById('root'));
