import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { add, getClient } from './store/fetchClient';
import ClientReducer from './store/fetchClient';
import thunk from 'redux-thunk';
// Create browser history to use in the Redux store
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
//const history = createBrowserHistory({ basename: baseUrl });
const composeEnhancers = compose;


let store = createStore(ClientReducer, compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()));
store.subscribe(() => { console.log(store.getState()) });
store.dispatch({type:"Add"});
console.log(store.getState());
store.dispatch(add());
store.dispatch(getClient());
//store.dispatch({ type: "Fetch_Client_Request"});



ReactDOM.render(
    <Provider store={store}>
     
            <App />
      
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

export default store;