import fetch from 'isomorphic-fetch';

export default function getFacts() {

    return fetch('https://reactssr-b1cb1.firebaseapp.com/facts.json').then( res => res.json() );
}