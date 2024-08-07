const MAX_MOBILE_WIDTH = 500
const MAX_MOBILE_HEIGHT = 875

function checkDevice() {
    if(window.innerWidth <= MAX_MOBILE_WIDTH && window.innerHeight <= MAX_MOBILE_HEIGHT){
        document.querySelector('.mobile').style.display = 'block';
        document.querySelector('.non-mobile-message').style.display = 'none';
    }
    else {
        document.querySelector('.mobile').style.display = 'none';
        document.querySelector('.non-mobile-message').style.display = 'block';
    }
}

window.onload = checkDevice
window.onresize = checkDevice