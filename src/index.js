import content from './homeContentLoad.js'
import { menuContent } from './menuContent.js'
import { aboutContent } from './aboutContent.js'

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

menuBtn.onclick = function() {
    menuContent();
}


homeBtn.onclick = function() {
    content();
}

aboutBtn.onclick = function() {
    aboutContent();
}
window.onload = function() {

    content();
}

