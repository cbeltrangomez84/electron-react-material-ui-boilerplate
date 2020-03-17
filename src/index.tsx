import { render } from 'react-dom'

// @ts-ignore
import App from './app/App';

import * as React from 'react';

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
//let root = document.createElement('div');

//root.id = 'root'
//document.body.appendChild(root);
console.log("MAIN RENDERER CALLED");

// Now we can render our application into it
if(document.getElementById('root')) render(<App />, document.getElementById('root'));
