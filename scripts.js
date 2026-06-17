function rippleClickHandler(event) {
    const CIRCLE_RADIUS = 10;
    const CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;

    const main = document.getElementsByTagName("main")[0];
    const div = document.createElement("div");

    div.className = "circle";
    div.style.position = "absolute";

    div.style.width  = `${CIRCLE_DIAMETER}px`;
    div.style.height = `${CIRCLE_DIAMETER}px`;

    div.style.top = `${event.clientY - CIRCLE_RADIUS}px`;
    div.style.left = `${event.clientX - CIRCLE_RADIUS}px`;

    main.appendChild(div);

    setTimeout(() => {
        main.removeChild(div);
        modifier -= step;
    }, 1000);
}

function setTheme1(e) {
    e.stopPropagation();
    document.documentElement.style.setProperty('--primary-bg-color', '#ffffff');
    document.documentElement.style.setProperty('--primary-font-color', '#000000');
}

function setTheme2(e) {
    e.stopPropagation();
    document.documentElement.style.setProperty('--primary-bg-color', '#000000');
    document.documentElement.style.setProperty('--primary-font-color', '#ffffff');
}

document.addEventListener('click', rippleClickHandler);

const theme1Button = document.getElementById("theme-1");
theme1Button.addEventListener('click', setTheme1);

const theme2Button = document.getElementById("theme-2");
theme2Button.addEventListener('click', setTheme2);