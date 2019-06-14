import React from 'react';
import { render } from 'react-dom';
import App from './app';
import getFacts from './facts';

getFacts().then( facts => {

    render(<App facts={facts} />, document.querySelector('#root'));
})
