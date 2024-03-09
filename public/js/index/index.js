const EVENTS_HEADER_ANIMATION_INTERVAL = 20;

let eventsHeaderInnerWrapper;
let eventsHeaderInnerWrapperMarginLeft = 0;

function eventsSlideAnimation() {
    const firstElement = eventsHeaderInnerWrapper.childNodes[0];
    const firstElementWidth = firstElement.getBoundingClientRect().width;
    
    if (eventsHeaderInnerWrapperMarginLeft >= firstElementWidth) {
        const newElement = firstElement.cloneNode(true);
        firstElement.remove();
        eventsHeaderInnerWrapper.appendChild(newElement);
        eventsHeaderInnerWrapperMarginLeft = eventsHeaderInnerWrapperMarginLeft - firstElementWidth;
    } else {
        eventsHeaderInnerWrapperMarginLeft += 0.5;
    }

    eventsHeaderInnerWrapper.style.marginLeft = `-${eventsHeaderInnerWrapperMarginLeft}px`;

    for (let i = 0; i < eventsHeaderInnerWrapper.childNodes.length; i++) {
        const element = eventsHeaderInnerWrapper.childNodes[i];
        element.style.marginBottom = `${firstElementWidth}px`;
    }

    setTimeout(() => {
        eventsSlideAnimation();
    }, EVENTS_HEADER_ANIMATION_INTERVAL);
};

window.addEventListener('load', _ => {
    eventsHeaderInnerWrapper = document.querySelector('.events-header-inner-wrapper');
    eventsSlideAnimation();
});