'use strict';

const $ = require("jquery");

window.jQuery = $;

if ($) {
    require('bootstrap');
    require("./js/header.js");
    require("./js/index.js");
    require("./scss/required.scss");
}