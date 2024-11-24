import { modalToggler } from '/lib/lib.js';

const toggleNav = document.getElementById('js-nav');
const navContents = document.getElementById('js-nav-content');
const toggleNavBtn = document.getElementById('js-nav-btn');

const links = document.querySelectorAll('#js-nav ul > li > a');
const linkButton = document.querySelector('#js-nav ul > li > button');



modalToggler(toggleNavBtn, toggleNav, navContents, [...links, linkButton], '-translate-y-40', null, null);
