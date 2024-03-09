const EVENTS_HEADER_ANIMATION_INTERVAL = 20;
let CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT = 75;
const CONTRIBUTIONS_MAX_SCROLL_SPEED = 10;

let eventsHeaderInnerWrapper;
let eventsHeaderInnerWrapperMarginLeft = 0;

let contributionsNavbarContentWrapper;

let contributionsFirstEventMarginTop = 0;

let contributionScrollStarted = false;
let contributionScrollTop = 0;
let contributionScrollTopLast = 0;
let contributionScrollEnded = false;

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

function handleContributionScroll() {
    if (contributionScrollEnded)
        return;
    if (contributionScrollTop == contributionScrollTopLast) {
        contributionScrollEnded = true;
        contributionScrollStarted = false;
        return;
    }

    const contributionsScrollDifference = contributionScrollTop - contributionScrollTopLast;
    contributionScrollTopLast = contributionScrollTop;

    const firstElement = contributionsNavbarContentWrapper.childNodes[0];
    
    if (contributionsFirstEventMarginTop >= CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT) {
        const newElement = firstElement.cloneNode(true);
        newElement.style.marginTop = '0';
        firstElement.remove();
        contributionsNavbarContentWrapper.appendChild(newElement);
        contributionsFirstEventMarginTop = 0;
    } else {
        contributionsFirstEventMarginTop += Math.min(CONTRIBUTIONS_MAX_SCROLL_SPEED, contributionsScrollDifference);
        firstElement.style.marginTop = `-${contributionsFirstEventMarginTop}px`;
    }

    setTimeout(() => {
        handleContributionScroll();   
    }, 10);
};

window.addEventListener('load', _ => {
    eventsHeaderInnerWrapper = document.querySelector('.events-header-inner-wrapper');
    contributionsNavbarContentWrapper = document.querySelector('.contributions-navbar-content-inner-wrapper');
    eventsSlideAnimation();

    // document.querySelector('.contributions-navbar-scroll-wrapper').addEventListener('scroll', event => {
    //     contributionScrollTop = event.target.scrollTop;
    //     if (!contributionScrollStarted) {
    //         contributionScrollTopLast = 0;
    //         contributionScrollStarted = true;
    //         contributionScrollEnded = false;
    //         handleContributionScroll();
    //     }
    // });
    // document.querySelector('.contributions-navbar-scroll-wrapper').addEventListener('scrollend', event => {
    //     contributionScrollEnded = true;
    //     contributionScrollStarted = false;
    // });
});