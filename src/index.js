import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from "redux";
import reducer from "./reducer";
import App from "./components/App";
import {Provider} from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));



const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

{/*      <Counter
      counter={getState().value}
      inc={increment}
      dec={decrement}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        random(value);
      }}
    />*/}

/*const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
};*/





