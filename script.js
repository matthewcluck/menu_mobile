let about = document.querySelector('#about');

let popout = document.querySelector('#popout');

about.addEventListener('click', () => {
    if (popout.style.display == "block"){
        popout.style.display = "none";
    } else {
        popout.style.display = "block"
    }
})