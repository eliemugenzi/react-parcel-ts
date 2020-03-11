import * as React from 'react';
import { hot } from 'react-hot-loader';

import './App.scss';

const App = () => {
    return (
        <div>
            <p>Hello world from Elie</p>
        </div>
    )
}

declare const module:any;

export default hot(module)(App);
