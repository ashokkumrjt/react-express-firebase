import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/app';
import getFacts from './src/facts';
import fs from 'fs';
import express from 'express';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8');

const app = express();

app.get('**', ( req, res ) => {

    getFacts().then( facts => {

        const compString = renderToString(<App facts={facts} />);

        const html = index.replace('<!-- APP HTML -->', compString);

        res.send(html);

    }).catch( err => console.log('error', err));
});

export let ssrapp = functions.https.onRequest(app);