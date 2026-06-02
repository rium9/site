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
    }, 1000);
}

document.addEventListener('click', rippleClickHandler);