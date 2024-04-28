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
          scrollContributionsContentBy(newScrollAmount, callback);
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
          scrollContributionsContentBy(newScrollAmount, callback);
        else
          callback();
      }, 80);
    } else {
      contributionsFirstItemMarginTop += scrollAmount;
      contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
      callback();
    };
  };
};

function scrollContributionsContentBySmooth(scrollAmount) {
  if (scrollAmount == 0) return;
  if (contributionScrollStarted) return;

  if (scrollAmount > 0) {
    contributionsFirstItemMarginTop += 1;
    contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    setTimeout(() => scrollContributionsContentBySmooth(scrollAmount - 1), 3);
  } else {
    contributionsFirstItemMarginTop -= 1;
    contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    setTimeout(() => scrollContributionsContentBySmooth(scrollAmount + 1), 3);
  }
};

function handleContributionScroll() {
  if (contributionScrollEnded) return;
  if (contributionScrollTop == contributionScrollTopLast) {
    setTimeout(handleContributionScroll, 10);
    return;
  };

  scrollContributionsContentBy(contributionScrollTop - contributionScrollTopLast, _ => {
      contributionScrollTopLast = contributionScrollTop;

      handleContributionScroll();
  });
};

const addToSubscriberList = _ => {
  const email = document.querySelector('.footer-top-left-input').value.trim();

  if (!email) return;

  serverRequest('/subscribe', 'POST', {
    email
  }, res => {
    console.log(res);
    // if (res.error && res.error != 'duplicated_unique_field') {
    //   // unknownError.style.display = 'block';
    //   console.error(res.error);
    // };

    // if (res.error) {
    //   // alreadyRegisteredMessage.style.display = 'block';
    //   console.error(res.error);
    // };

    // // successMessage.style.display = 'block';
    // console.log(res.data);
  });
};

window.addEventListener('load', _ => {
  eventsHeaderInnerWrapper = document.querySelector('.events-header-inner-wrapper');
  contributionsNavbarContentInnerWrapper = document.querySelector('.contributions-navbar-content-inner-wrapper');
  const contributionsNavbarScrollWrapper = document.querySelector('.contributions-navbar-scroll-wrapper');

  contributionsNavbarScrollWrapper.addEventListener('scroll', event => {
    contributionScrollTop = event.target.scrollTop;

    if (!contributionScrollStarted) {
      contributionScrollStarted = true;
      contributionScrollEnded = false;
      handleContributionScroll();
    };
  });
  contributionsNavbarScrollWrapper.addEventListener('scrollend', event => {
    contributionScrollEnded = true;
    contributionScrollStarted = false;

    if (contributionsFirstItemMarginTop != 0)
      scrollContributionsContentBySmooth(-contributionsFirstItemMarginTop);
  });

  document.addEventListener('click', event => {
    if (event.target.closest('.events-content-navbar-header-wrapper')) {
      document.querySelector('.events-content-navbar-events-wrapper').classList.toggle('events-content-navbar-events-wrapper-closed');
      document.querySelector('.events-content-navbar-header-icon-line-left').classList.toggle('events-content-navbar-header-icon-line-left-reversed');
      document.querySelector('.events-content-navbar-header-icon-line-right').classList.toggle('events-content-navbar-header-icon-line-right-reversed');
    };

    if (event.target.closest('.events-content-navbar-each-event')) {
      const target = event.target.closest('.events-content-navbar-each-event');
      const eventId = target.id.replace('event-', '');

      document.querySelector('.events-content-navbar-each-event-selected').classList.remove('events-content-navbar-each-event-selected');
      target.classList.add('events-content-navbar-each-event-selected');

      document.querySelectorAll('.events-content-each-event-wrapper').forEach(eachEvent => {
        if (!eachEvent.classList.contains(`events-content-${eventId}-wrapper`))
          eachEvent.classList.add('display-none');
      });
      document.querySelector(`.events-content-${eventId}-wrapper`).classList.remove('display-none');
    };

    if (event.target.closest('.footer-top-left-input-button')) {
      addToSubscriberList();
    };
  });

  document.addEventListener('keyup', event => {
    if (event.target.classList.contains('footer-top-left-input') && event.key == 'Enter') {
      addToSubscriberList();
    };
  });

  // const pointer = document.querySelector('.pointer');

  // document.addEventListener('mousemove', event => {
  //   pointer.style.setProperty('--pointer-x', `${event.clientX - 5}px`);
  //   pointer.style.setProperty('--pointer-y', `${event.clientY}px`);
  // });
});
