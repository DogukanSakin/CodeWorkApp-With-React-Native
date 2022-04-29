import React from 'react';
import { Provider } from 'react-redux';
import {legacy_createStore} from 'redux';
import reducers from './reducers';
import initialValues from './store';
const AuthProvider=({children})=>{
    const store=legacy_createStore(reducers,initialValues);
    return <Provider store={store}>{children}</Provider>
}

export default AuthProvider;