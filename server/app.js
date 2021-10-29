const express = require('express');
const app = express();
const path = require('path');
let folder = 'docs'
const routes = require('../'+folder+'/src/pages/pages');
const scrapper = require('./Scrapper');
var fs = require('fs');


app.use(express.static(folder))
let pagasGenerationInProcess = {}
app.use((req, res, next) => {
    let originalUrl = (req.originalUrl == '/')?'/index.html':req.originalUrl
    if (routes.hasOwnProperty(originalUrl)) {
        if(!pagasGenerationInProcess[originalUrl]){
            pagasGenerationInProcess[originalUrl] = true
            scrapper(originalUrl).then(data => {
                fs.writeFile(folder+'/' + originalUrl, '<!DOCTYPE html>'+data.html, function (err) {
                    if (err) throw err;
                    console.log('File is created successfully.');
                });
            })
        } 
    }
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.sendFile(path.join(__dirname, '/index.html'));
});
module.exports = app;