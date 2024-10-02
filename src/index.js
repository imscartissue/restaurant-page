import "./style.css";
import { pageLoad } from "./page-load.js";

window.addEventListener('load', () => {
    const content = document.querySelector('body'); // You can change this selector to target a specific element
    content.classList.add('zoom-animation');
});

pageLoad();