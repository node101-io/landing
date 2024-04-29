let CONTRIBUTIONS_EACH_CONTRIBUTION_FONT_SIZE = 35;
let CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT = 75;
const CONTRIBUTIONS_MAX_SCROLL_SPEED = 10;
const CONTRIBUTIONS_NAVBAR_CONTENT_ITEM_COUNT = 9;
const CONTRIBUTIONS_SCROLL_SPEED_MS_DELAY = 40;
const CONTRIBUTIONS_SCROLL_SMOOT_SPEED_MS_DELAY = 3;
const CONTRIBUTIONS_SCROLL_RESET_DISTANCE = 500;

let contributionsFirstItemMarginTop = 0;
let contributionsNavbarContentInnerWrapper;
let contributionsNavbarScrollWrapper
let contributionScrollEnded = false;
let contributionScrollStarted = false;
let contributionScrollTop = 0;
let contributionScrollTopLast = 0;

function changeContributionsContentInnerWrapperContent(id) {
  const allContributions = document.querySelectorAll('.contributions-content-each-contribution-wrapper');

  allContributions.forEach(contribution => {
    contribution.classList.add('display-none');
  });

  document.querySelector(`.contributions-content-${id}-wrapper`).classList.remove('display-none');
};

function handleContributionNavbarContentItemsAnimation() {
  const contributionsNavbarContentItems = document.querySelectorAll('.contributions-navbar-content-each-contribution');

  const middleIndex = parseInt(CONTRIBUTIONS_NAVBAR_CONTENT_ITEM_COUNT / 2);

  const startOpacity = 0.55;
  const endOpacity = 1;
  const opacityChange = (endOpacity - startOpacity) / (middleIndex + 1);

  const startFontSize = CONTRIBUTIONS_EACH_CONTRIBUTION_FONT_SIZE * 0.82;
  const endFontSize = CONTRIBUTIONS_EACH_CONTRIBUTION_FONT_SIZE;
  const fontSizeChange = (endFontSize - startFontSize) / (middleIndex + 1);

  for (let i = 0; i < middleIndex; i++) {
    const currentOpacity = startOpacity + opacityChange * i;
    const animatedOpacity = currentOpacity + opacityChange * (CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT - contributionsFirstItemMarginTop) / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;

    const currentFontSize = startFontSize + fontSizeChange * i;
    const animatedFontSize = currentFontSize + fontSizeChange * (CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT - contributionsFirstItemMarginTop) / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;

    contributionsNavbarContentItems[i].style.opacity = animatedOpacity;
    contributionsNavbarContentItems[i].style.fontSize = `${animatedFontSize}px`;
  };

  contributionsNavbarContentItems[middleIndex].style.opacity = endOpacity - opacityChange * contributionsFirstItemMarginTop / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;
  contributionsNavbarContentItems[middleIndex].style.fontSize = `${endFontSize - fontSizeChange * contributionsFirstItemMarginTop / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT}px`;

  for (let i = middleIndex + 1; i < CONTRIBUTIONS_NAVBAR_CONTENT_ITEM_COUNT; i++) {
    const currentOpacity = endOpacity - opacityChange * (i - middleIndex);
    const animatedOpacity = currentOpacity + opacityChange * contributionsFirstItemMarginTop / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;

    const currentFontSize = endFontSize - fontSizeChange * (i - middleIndex);
    const animatedFontSize = currentFontSize + fontSizeChange * contributionsFirstItemMarginTop / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;

    contributionsNavbarContentItems[i].style.opacity = animatedOpacity;
    contributionsNavbarContentItems[i].style.fontSize = `${animatedFontSize}px`;
  };

  contributionsNavbarContentItems[CONTRIBUTIONS_NAVBAR_CONTENT_ITEM_COUNT].style.opacity = startOpacity + opacityChange - opacityChange * (CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT - contributionsFirstItemMarginTop) / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;
  contributionsNavbarContentItems[CONTRIBUTIONS_NAVBAR_CONTENT_ITEM_COUNT].style.fontSize = `${startFontSize + fontSizeChange - fontSizeChange * (CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT - contributionsFirstItemMarginTop) / CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT}px`;

  return setTimeout(() => handleContributionNavbarContentItemsAnimation(), 2);
};

function scrollContributionsContentBy(scrollAmount, callback) {
  if (scrollAmount == 0) return callback();

  if (scrollAmount > 0) {
    scrollAmount = Math.min(scrollAmount, CONTRIBUTIONS_MAX_SCROLL_SPEED);

    if (contributionsFirstItemMarginTop + scrollAmount >= CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT) {
      const newScrollAmount = scrollAmount + contributionsFirstItemMarginTop - CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;

      const newElement = contributionsNavbarContentInnerWrapper.childNodes[0].cloneNode(true);
      newElement.style.marginTop = '0';
      newElement.style.opacity = 0.55;
      contributionsNavbarContentInnerWrapper.childNodes[0].remove();
      contributionsNavbarContentInnerWrapper.appendChild(newElement);

      contributionsFirstItemMarginTop = 0;

      setTimeout(() => {
        if (contributionScrollTop - contributionScrollTopLast >= CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT)
          scrollContributionsContentBy(newScrollAmount, callback);
        else
          callback();
      }, CONTRIBUTIONS_SCROLL_SPEED_MS_DELAY);
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
      newElement.style.marginTop = `-${CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT}px`;
      contributionsNavbarContentInnerWrapper.insertBefore(newElement, contributionsNavbarContentInnerWrapper.childNodes[0]);

      contributionsNavbarContentInnerWrapper.childNodes[contributionsNavbarContentInnerWrapper.childNodes.length - 1].remove();

      contributionsFirstItemMarginTop = CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT;

      setTimeout(() => {
        if (contributionScrollTopLast - contributionScrollTop <= -CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT)
          scrollContributionsContentBy(newScrollAmount, callback);
        else
          callback();
      }, CONTRIBUTIONS_SCROLL_SPEED_MS_DELAY);
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
    setTimeout(() => scrollContributionsContentBySmooth(scrollAmount - 1), CONTRIBUTIONS_SCROLL_SMOOT_SPEED_MS_DELAY);
  } else {
    contributionsFirstItemMarginTop -= 1;
    contributionsNavbarContentInnerWrapper.childNodes[0].style.marginTop = `-${contributionsFirstItemMarginTop}px`;
    setTimeout(() => scrollContributionsContentBySmooth(scrollAmount + 1), CONTRIBUTIONS_SCROLL_SMOOT_SPEED_MS_DELAY);
  };
};

function handleContributionScroll() {
  if (contributionScrollEnded) return;
  if (contributionScrollTop == contributionScrollTopLast)
    return setTimeout(handleContributionScroll, 10);

  scrollContributionsContentBy(contributionScrollTop - contributionScrollTopLast, _ => {
    contributionScrollTopLast = contributionScrollTop;

    if (contributionsNavbarScrollWrapper.scrollTop < CONTRIBUTIONS_SCROLL_RESET_DISTANCE || contributionsNavbarScrollWrapper.scrollTop + contributionsNavbarScrollWrapper.getBoundingClientRect().height > contributionsNavbarScrollWrapper.scrollHeight - CONTRIBUTIONS_SCROLL_RESET_DISTANCE)
      contributionsNavbarScrollWrapper.scrollTo(0, contributionsNavbarScrollWrapper.scrollHeight / 2);

    handleContributionScroll();
  });
};

function initalizeContributionScrollEvent() {
  CONTRIBUTIONS_EACH_CONTRIBUTION_FONT_SIZE = Number(getComputedStyle(document.documentElement).getPropertyValue('--contributions-navbar-content-each-contribution-font-size').replace('px', ''));
  CONTRIBUTIONS_EACH_CONTRIBUTION_HEIGHT = document.querySelector('.contributions-navbar-content-each-contribution').getBoundingClientRect().height;

  contributionsNavbarContentInnerWrapper = document.querySelector('.contributions-navbar-content-inner-wrapper');
  contributionsNavbarScrollWrapper = document.querySelector('.contributions-navbar-scroll-wrapper');

  contributionsNavbarScrollWrapper.addEventListener('scroll', event => {
    contributionScrollTop = event.target.scrollTop;

    if (!contributionScrollStarted) {
      contributionScrollStarted = true;
      contributionScrollEnded = false;
      handleContributionScroll();
    };
  });
  contributionsNavbarScrollWrapper.addEventListener('scrollend', _ => {
    contributionScrollEnded = true;
    contributionScrollStarted = false;

    if (contributionsFirstItemMarginTop != 0)
      scrollContributionsContentBySmooth(-contributionsFirstItemMarginTop);
  });

  contributionsNavbarScrollWrapper.scrollTo(0, contributionsNavbarScrollWrapper.scrollHeight / 2);
  handleContributionNavbarContentItemsAnimation();
};

function addToSubscriberList() {
  const email = document.querySelector('.footer-top-left-input').value.trim();

  const successMessage = document.querySelector('.footer-top-left-success-message');
  const alreadyRegisteredMessage = document.querySelector('.footer-top-left-error-duplicated-field-message');
  const unknownError = document.querySelector('.footer-top-left-error-bad-request-message');

  if (!email) return;

  serverRequest('/subscribe', 'POST', {
    email: email,
    type: 'general'
  }, (err, res) => {
    if (err && err != 'duplicated_unique_field') {
      successMessage.classList.add('display-none');
      alreadyRegisteredMessage.classList.add('display-none');
      unknownError.classList.remove('display-none');
      return;
    };

    if (err) {
      successMessage.classList.add('display-none');
      unknownError.classList.add('display-none');
      alreadyRegisteredMessage.classList.remove('display-none');
      return;
    };

    unknownError.classList.add('display-none');
    alreadyRegisteredMessage.classList.add('display-none');
    successMessage.classList.remove('display-none');
  });
};

window.addEventListener('load', _ => {
  initalizeContributionScrollEvent();

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
