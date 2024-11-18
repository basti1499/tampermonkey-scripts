// ==UserScript==
// @name         Reddit untranslate
// @namespace    https://bastih.dev/
// @version      1.0
// @description  Automatically untranslate reddit posts
// @author       Bastian Hartenstein
// @match        https://www.reddit.com/*tl=*
// @icon         http://www.google.com/s2/favicons?domain=www.reddit.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const url = new URL(window.location.href);
    url.searchParams.delete('tl');
    window.location.href = url.href;
})();
