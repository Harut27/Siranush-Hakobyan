import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App  from './App';

import "./i-18-Next";
import { Suspense } from 'react';


ReactDOM.render(
    <Suspense fallback={(<div>Loading ~~~</div>)}>
        <App /> 
        </Suspense>,
    document.getElementById('root')
);
