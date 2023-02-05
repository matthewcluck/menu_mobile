let about = document.querySelector('#about');

let popout = document.querySelector('#popout');

about.addEventListener('mouseover', () => {
    popout.style.display = "block";
})

about.addEventListener('mouseleave', () => {
    popout.style.display = "none";
})