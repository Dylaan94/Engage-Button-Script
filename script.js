// ==UserScript==
// @name         Done button to bottom of screen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://engage.bath.ac.uk/learn/mod/page/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bath.ac.uk
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const buttonDiv = document.querySelector('.completion-info')
    const regionDiv = document.querySelector('#region-main')

    regionDiv.appendChild(buttonDiv)

    // Your code here...
})();
