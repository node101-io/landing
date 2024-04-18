const EVENTS_HEADER_ANIMATION_INTERVAL = 20;
let CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT = 75;
const CONTRIBUTIONS_MAX_SCROLL_SPEED = 10;

let eventsHeaderInnerWrapper;
let eventsHeaderInnerWrapperMarginLeft = 0;

let contributionsNavbarContentInnerWrapper;

let contributionsFirstItemMarginTop = 0;

let contributionScrollStarted = false;
let contributionScrollTop = 0;
let contributionScrollTopLast = 0;
let contributionScrollEnded = false;

// function eventsSlideAnimation() {
//   const firstElement = eventsHeaderInnerWrapper.childNodes[0];
//   // const firstElementWidth = Math.cos(parseFloat(window.getComputedStyle(firstElement).getPropertyValue('transform').split(',')[1])) * firstElement.getBoundingClientRect().width;
//   const firstElementWidth = firstElement.getBoundingClientRect().width;

//   if (eventsHeaderInnerWrapperMarginLeft >= firstElementWidth) {
//     const newElement = firstElement.cloneNode(true);
//     firstElement.remove();
//     eventsHeaderInnerWrapper.appendChild(newElement);
//     eventsHeaderInnerWrapperMarginLeft =
//       eventsHeaderInnerWrapperMarginLeft - firstElementWidth;
//   } else {
//     eventsHeaderInnerWrapperMarginLeft += 0.5;
//   }

//   eventsHeaderInnerWrapper.style.marginLeft = `-${eventsHeaderInnerWrapperMarginLeft}px`;

//   for (let i = 0; i < eventsHeaderInnerWrapper.childNodes.length; i++) {
//     const element = eventsHeaderInnerWrapper.childNodes[i];
//     element.style.marginBottom = `${firstElementWidth}px`;
//   }

//   setTimeout(() => {
//     eventsSlideAnimation();
//   }, EVENTS_HEADER_ANIMATION_INTERVAL);
// }

function scrollContributionsContentBy(scrollAmount, callback) {
  if (scrollAmount == 0) return callback();

  if (scrollAmount > 0) {
    scrollAmount = Math.min(scrollAmount, CONTRIBUTIONS_MAX_SCROLL_SPEED);

    if (contributionsFirstItemMarginTop + scrollAmount >= CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT) {
      const newScrollAmount = scrollAmount + contributionsFirstItemMarginTop - CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT;

      const newElement = contributionsNavbarContentInnerWrapper.childNodes[0].cloneNode(true);
      newElement.style.marginTop = '0';
      contributionsNavbarContentInnerWrapper.childNodes[0].remove();
      contributionsNavbarContentInnerWrapper.appendChild(newElement);

      contributionsFirstItemMarginTop = 0;

      setTimeout(() => {
        if (contributionScrollTop - contributionScrollTopLast >= CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT)
          scrollContributionsContentBy(newScrollAmount, () => callback());
        else
          callback();
      }, 80);
    } else {
      contributionsFirstItemMarginTop += scrollAmount;
      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
      callback();
    }
  } else {
    scrollAmount = Math.max(scrollAmount, -CONTRIBUTIONS_MAX_SCROLL_SPEED);

    if (contributionsFirstItemMarginTop - scrollAmount <= 0) {
      const newScrollAmount = contributionsFirstItemMarginTop - scrollAmount;

      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = 0;

      const newElement = contributionsNavbarContentInnerWrapper.childNodes[contributionsNavbarContentInnerWrapper.childNodes.length - 1].cloneNode(true);
      newElement.style.marginTop = `-${CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT}px`;
      contributionsNavbarContentInnerWrapper.insertBefore(newElement, contributionsNavbarContentInnerWrapper.childNodes[0]);

      contributionsNavbarContentInnerWrapper.childNodes[contributionsNavbarContentInnerWrapper.childNodes.length - 1].remove();

      contributionsFirstItemMarginTop = CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT;

      setTimeout(() => {
        if (contributionScrollTopLast - contributionScrollTop <= -CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT)
          scrollContributionsContentBy(newScrollAmount, () => callback());
        else
          callback();
      }, 80);
    } else {
      contributionsFirstItemMarginTop += scrollAmount;
      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
      callback();
    }
  }
}

function scrollContributionsContentBySmooth(scrollAmount) {
  if (scrollAmount == 0) return;
  if (contributionScrollStarted) return;

  if (scrollAmount > 0) {
    contributionsFirstItemMarginTop += 1;
    contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    setTimeout(() => {
      scrollContributionsContentBySmooth(scrollAmount - 1);
    }, 3);
  } else {
    contributionsFirstItemMarginTop -= 1;
    contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    setTimeout(() => {
      scrollContributionsContentBySmooth(scrollAmount + 1);
    }, 3);
  }
}

function handleContributionScroll() {
  if (contributionScrollEnded) return;
  if (contributionScrollTop == contributionScrollTopLast) {
    setTimeout(() => {
      handleContributionScroll();
    }, 10);
    return;
  }

  scrollContributionsContentBy(contributionScrollTop - contributionScrollTopLast, () => {
    // if (Math.abs(contributionScrollTop - contributionScrollTopLast) >= CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT) {
      contributionScrollTopLast = contributionScrollTop;

      handleContributionScroll();
    // } else {
    //   contributionScrollTopLast = contributionScrollTop;
    //   contributionScrollEnded = true;
    //   contributionScrollStarted = false;
    // }
  });
}

window.addEventListener('load', (_) => {
  eventsHeaderInnerWrapper = document.querySelector('.events-header-inner-wrapper');
  contributionsNavbarContentInnerWrapper = document.querySelector('.contributions-navbar-content-inner-wrapper');
  const contributionsNavbarScrollWrapper = document.querySelector('.contributions-navbar-scroll-wrapper');
  // eventsSlideAnimation();

  contributionsNavbarScrollWrapper.addEventListener('scroll', (event) => {
    contributionScrollTop = event.target.scrollTop;

    if (!contributionScrollStarted) {
      contributionScrollStarted = true;
      contributionScrollEnded = false;
      handleContributionScroll();
    }
  });
  contributionsNavbarScrollWrapper.addEventListener('scrollend', (event) => {
    contributionScrollEnded = true;
    contributionScrollStarted = false;

    if (contributionsFirstItemMarginTop != 0)
      scrollContributionsContentBySmooth(-contributionsFirstItemMarginTop);
  });
});
