//Needed to detect when button clicks and menu appearences are made
const button = document.getElementsByClassName('hamburgerContainer')[0];
const menu = document.getElementsByTagName('nav')[0];
const footButton = document.getElementsByClassName('footerButton')[0];
const footer = document.getElementsByTagName('footer')[0];

//Method to open a webpage
function navigateToPage(url){
    window.location.href = url;
}

//Event Listener to make a menu appear or disappear based on when a button has been clicked and wherever the menu is visible or not
button.addEventListener('click', () => {
    menu.classList.toggle('nav-visible')
});

//Event Listener to make a menu appear or disappear based on when a button has been clicked and wherever the menu is visible or not
footButton.addEventListener('click', () => {
    footer.classList.toggle('footer-hidden')
    footButton.classList.toggle('spin')
});