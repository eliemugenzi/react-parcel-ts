import * as React from 'react';
import * as ReactDom from 'react-dom';

import './App.scss';

const App = () => {
    return (
        <div>
            <p>Hello world</p>
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('app'));
