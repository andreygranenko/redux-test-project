import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

  const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1
      };
    case "RANDOM":
      return {
        ...state,
        value: state.value + action.payload

      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').innerText = String(store.getState().value);
};
store.subscribe(update);

const increment = () => ({ type: 'INCREMENT' });

const decrement = () => ({type: 'DECREMENT'});
const random = (value) => ({type: 'RANDOM', payload: value})


document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

document.getElementById('decrement').addEventListener('click', () => {
  store.dispatch(decrement());
});

document.getElementById('random').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(random(value));
});

console.log(store.getState()); // 0

// let state = reducer(initialState, { type: 'INCREMENT' });
// state = reducer(state, { type: 'INCREMENT' });
// state = reducer(state, { type: 'INCREMENT' });



root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);

