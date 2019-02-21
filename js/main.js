document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is



// event handler for #clicky and .brown
document.querySelector('#clicky').onclick = () => {
    // the next line hides any element that has class="brown"
    document.querySelector('.brown').style.display = 'none';
    // the next line changes the bg of any element that has class="second"
    document.querySelector('.second').style.background = '#fcd08d';
}



// // keep the line below exactly as it is
});
