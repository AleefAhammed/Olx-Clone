import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Context/FirebaseContext'
import firebase from './Firebase/firebaseConfig'
import Context from './Context/FirebaseContext'

ReactDOM.render(

    <FirebaseContext.Provider value={{ firebase }}>
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>

    , document.getElementById('root'))
