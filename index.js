/**
 * Boilerplate for a node microservice. Replace this with your actual node server
 */

"use strict"

const express = require('express');
const morgan = require('morgan');

const host = process.env.HOST || '';
const port = process.env.PORT || '4000';

const app = express();

app.get("/node", (req, res) => {
    res.send("hello from node")
})

app.listen(port, host, () => {
    console.log(`node server listening on ${host}:${port}...`)
})