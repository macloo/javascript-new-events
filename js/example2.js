document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is


// 1. hide the element that has id="second-part"
document.querySelector('#second-part').style.display = 'none';


// 2. event handler for #clicky1 and #first-part
document.querySelector('#clicky1').onclick = () => {
    // the next line hides the element that has id="first-part"
    document.querySelector('#first-part').style.display = 'none';
    // the next line shows the element that has id="second-part"
    document.querySelector('#second-part').style.display = 'block';
}

// 3. event handler for #clicky2 and #second-part
document.querySelector('#clicky2').onclick = () => {
    // the next line hides the element that has id="second-part"
    document.querySelector('#second-part').style.display = 'none';
    // the next line shows the element that has id="first-part"
    document.querySelector('#first-part').style.display = 'block';
}


// // keep the line below exactly as it is
});
