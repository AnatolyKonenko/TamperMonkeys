// ==UserScript==
// @name         Badoo top banner remove
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blocking top ads
// @author       Konenko Anatoly
// @match        https://badoo.com/*
// @grant        none
// ==/UserScript==
(function() {
    setInterval(function(){
        test();
    },3000);
})();

function test(){
    document.getElementById('page').classList.remove("has-surprise");
}
