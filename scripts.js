document.addEventListener('click', (event) => {
    const main = document.getElementById('main');
    const div = document.createElement('button');

    div.className = "circle";
    div.style.position = 'absolute';
    div.style.top = (event.clientY - 10) + "px";
    div.style.left = (event.clientX - 10) + "px";

    main.appendChild(div);

    setTimeout(() => {
        main.removeChild(div);
    }, 2000);

})