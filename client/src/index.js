import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import  thunk  from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
         document.getElementById("root"));

// Overview. The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. 
// Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level,
//   with the entire app's component tree inside of it.

// although we used the root element id , we do not have an index.html file in which we are specifiying that there is a root div id.