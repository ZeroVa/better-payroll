import React from 'react';
import ReactDom from 'react-dom';
import FirstComponent from './components/firstcomponent.jsx';

ReactDom.render(
    <FirstComponent></FirstComponent>,
    document.getElementById('root')
)

console.log("This works!?");