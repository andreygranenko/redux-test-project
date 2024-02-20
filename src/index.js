import React from 'react';
import ReactDOM from 'react-dom/client';
import {bindActionCreators, legacy_createStore as createStore} from "redux";
import * as actions from "./actions";
import reducer from "./reducer";

const root = ReactDOM.createRoot(document.getElementById('root'));



const store = createStore(reducer);
const {dispatch, subscribe, getState} = store;

const update = () => {
  document.getElementById('counter').innerText = String(getState().value);
};

subscribe(update);

/*const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};*/

const {increment, decrement, random} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(decrement, dispatch);
// const rndDispatch = bindActionCreators(random, dispatch);

document.getElementById('increment').addEventListener('click', increment);

document.getElementById('decrement').addEventListener('click', decrement);

document.getElementById('random').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  random(value);
});




root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);

