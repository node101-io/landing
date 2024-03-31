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

function eventsSlideAnimation() {
  const firstElement = eventsHeaderInnerWrapper.childNodes[0];
  const firstElementWidth = firstElement.getBoundingClientRect().width;

  if (eventsHeaderInnerWrapperMarginLeft >= firstElementWidth) {
    const newElement = firstElement.cloneNode(true);
    firstElement.remove();
    eventsHeaderInnerWrapper.appendChild(newElement);
    eventsHeaderInnerWrapperMarginLeft =
      eventsHeaderInnerWrapperMarginLeft - firstElementWidth;
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
}

function scrollContributionsContentBy(scrollAmount, callback) {
  if (scrollAmount == 0) return callback();

  scrollAmount = Math.min(scrollAmount, CONTRIBUTIONS_MAX_SCROLL_SPEED);
  // scrollAmount = Math.max(scrollAmount, 2);

  if (scrollAmount > 0) {
    if (
      contributionsFirstItemMarginTop + scrollAmount >=
      CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT
    ) {
      const newScrollAmount = scrollAmount + contributionsFirstItemMarginTop - CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT;

      const newElement = contributionsNavbarContentInnerWrapper.childNodes[0].cloneNode(true);
      newElement.style.marginTop = "0";
      contributionsNavbarContentInnerWrapper.childNodes[0].remove();
      contributionsNavbarContentInnerWrapper.appendChild(newElement);

      contributionsFirstItemMarginTop = 0;

      setTimeout(() => {
        scrollContributionsContentBy(newScrollAmount, () => callback());
      }, 100);
    } else {
      contributionsFirstItemMarginTop += scrollAmount;
      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
      callback();
    }
  } else {
    if (contributionsFirstItemMarginTop - scrollAmount <= 0) {
      const newScrollAmount = scrollAmount - contributionsFirstItemMarginTop;

      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = 0;

      const newElement =
        contributionsNavbarContentInnerWrapper.childNodes[
          contributionsNavbarContentInnerWrapper.childNodes.length - 1
        ].cloneNode(true);
      newElement.style.marginTop = "0";
      contributionsNavbarContentInnerWrapper.insertBefore(
        newElement,
        contributionsNavbarContentInnerWrapper.childNodes[0]
      );

      contributionsFirstItemMarginTop = 0;
      scrollContributionsContentBy(newScrollAmount);
    } else {
      contributionsFirstItemMarginTop -= scrollAmount;
      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    }
  }
}

function scrollContributionsContentBySmooth(scrollAmount) {
  if (scrollAmount < 1) {
    contributionsFirstItemMarginTop = 0;
    const newElement =
      contributionsNavbarContentInnerWrapper.childNodes[0].cloneNode(true);
    newElement.style.marginTop = "0";
    contributionsNavbarContentInnerWrapper.childNodes[0].remove();
    contributionsNavbarContentInnerWrapper.appendChild(newElement);
    return;
  }

  if (scrollAmount > 0) {
    contributionsFirstItemMarginTop += scrollAmount * 0.1;
    contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    setTimeout(() => {
      scrollContributionsContentBySmooth(scrollAmount * 0.9);
    }, 20);
  }
}

function handleContributionScroll() {
  if (contributionScrollEnded) return;
  if (contributionScrollTop == contributionScrollTopLast) {
    contributionScrollEnded = true;
    contributionScrollStarted = false;
    return;
  }

  scrollContributionsContentBy(
    contributionScrollTop - contributionScrollTopLast,
    () => {
      contributionScrollTopLast = contributionScrollTop;

      handleContributionScroll();
    }
  );
}

window.addEventListener("load", (_) => {
  eventsHeaderInnerWrapper = document.querySelector(
    ".events-header-inner-wrapper"
  );
  contributionsNavbarContentInnerWrapper = document.querySelector(
    ".contributions-navbar-content-inner-wrapper"
  );
  const contributionsNavbarScrollWrapper = document.querySelector(
    ".contributions-navbar-scroll-wrapper"
  );
  // eventsSlideAnimation();

  contributionsNavbarScrollWrapper.addEventListener("scroll", (event) => {
    contributionScrollTopLast = contributionScrollTop;
    contributionScrollTop = event.target.scrollTop;

    if (!contributionScrollStarted) {
      contributionScrollStarted = true;
      contributionScrollEnded = false;
      handleContributionScroll();
    }
  });
  contributionsNavbarScrollWrapper.addEventListener("scrollend", (event) => {
    contributionScrollEnded = true;
    contributionScrollStarted = false;

    // setTimeout(() => {
    //     if (contributionScrollEnded) {
    //         scrollContributionsContentBySmooth(CONTRIBUTONS_EACH_CONTRIBUTION_HEIGHT - contributionsFirstItemMarginTop);
    //     }
    // }, 100);
  });
});
