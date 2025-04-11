function changeVisibleContribution(id) {
  const visibleContribution = document.querySelector('.contributions-content-each-contribution-wrapper:not(.display-none)');

  visibleContribution?.classList.add('display-none');

  document.querySelector(`.contributions-content-${id}-wrapper`)?.classList.remove('display-none');
};

function isContributionsResponsive() {
  return window.matchMedia('(orientation: portrait) and (max-width: 900px)').matches;
};

function getCenteredContributionId() {
  const navbarScrollWrapper = document.querySelector('.contributions-navbar-content-wrapper');

  const rect = navbarScrollWrapper.getBoundingClientRect();
  // const centerY = rect.y + rect.height / 2;
  const center = isContributionsResponsive() ? rect.x + rect.width / 2 : rect.y + rect.height / 2;

  let closestContributionId = null;
  let minDistance = Infinity;

  const contributions = navbarScrollWrapper.querySelectorAll('.contributions-navbar-content-each-contribution');

  for (let i = 0; i < contributions.length; i++) {
    const contributionRect = contributions[i].getBoundingClientRect();

    const distance = Math.abs(center - (isContributionsResponsive() ? contributionRect.x + contributionRect.width / 2 : contributionRect.y + contributionRect.height / 2));

    if (distance < minDistance) {
      minDistance = distance;
      closestContributionId = contributions[i].id.replace('contribution-', '');
    };
  };

  return closestContributionId;
};

function initalizeContributionScrollEvent() {
  const navbarScrollWrapper = document.querySelector('.contributions-navbar-content-wrapper');
  let isScrolling = false;

  if (isContributionsResponsive())
    navbarScrollWrapper.scrollLeft = (navbarScrollWrapper.scrollWidth - navbarScrollWrapper.getBoundingClientRect().width) / 2;
  else
    navbarScrollWrapper.scrollTop = (navbarScrollWrapper.scrollHeight - navbarScrollWrapper.getBoundingClientRect().height) / 2;

  navbarScrollWrapper.addEventListener('scroll', () => {
    if (isScrolling) return;

    isScrolling = true;

    changeVisibleContribution(getCenteredContributionId());

    if (isContributionsResponsive()) {
      const maxScrollLeft = navbarScrollWrapper.scrollWidth - navbarScrollWrapper.clientWidth;

      if (navbarScrollWrapper.scrollLeft >= maxScrollLeft) {
        navbarScrollWrapper.scrollLeft = 0;
      } else if (navbarScrollWrapper.scrollLeft === 0) {
        navbarScrollWrapper.scrollLeft = maxScrollLeft;
      };
    } else {
      const maxScrollTop = navbarScrollWrapper.scrollHeight - navbarScrollWrapper.clientHeight;

      if (navbarScrollWrapper.scrollTop >= maxScrollTop) {
        navbarScrollWrapper.scrollTop = 0;
      } else if (navbarScrollWrapper.scrollTop === 0) {
        navbarScrollWrapper.scrollTop = maxScrollTop;
      };
    };

    setTimeout(() => {
      isScrolling = false;
    }, 50);
  });
  navbarScrollWrapper.addEventListener('wheel', event => {
    if (isContributionsResponsive()) {
      const maxScrollLeft = navbarScrollWrapper.scrollWidth - navbarScrollWrapper.clientWidth;

      if (event.deltaX < 0 && navbarScrollWrapper.scrollLeft === 0)
        navbarScrollWrapper.scrollLeft = maxScrollLeft;
      else if (event.deltaX > 0 && navbarScrollWrapper.scrollLeft === maxScrollLeft)
        navbarScrollWrapper.scrollLeft = 0;
    } else {
      const maxScrollTop = navbarScrollWrapper.scrollHeight - navbarScrollWrapper.clientHeight;

      if (event.deltaY < 0 && navbarScrollWrapper.scrollTop === 0)
        navbarScrollWrapper.scrollTop = maxScrollTop;
      else if (event.deltaY > 0 && navbarScrollWrapper.scrollTop === maxScrollTop)
        navbarScrollWrapper.scrollTop = 0;
    };
  });
};

function initalizeDragEvent() {
  const draggableElementsSelectors = [
    '.team-content-images-wrapper',
    '.contributions-content-videos-thumbnails-wrapper',
    '.events-content-workshops-bottom-wrapper',
    '.events-content-gatherings-bottom-wrapper',
    '.events-content-hacker-houses-bottom-wrapper',
    '.events-content-hacker-tours-bottom-wrapper'
  ];

  for (let i = 0; i < draggableElementsSelectors.length; i++) {
    let isDown = false;
    let isDragging = false;
    let startX;
    let scrollLeft;

    const element = document.querySelector(draggableElementsSelectors[i]);

    document.addEventListener('click', event => {
      if (isDragging && event.target.closest(draggableElementsSelectors[i]))
        event.preventDefault();
    });

    element.addEventListener('mousedown', event => {
      if (isDragging)
        event.preventDefault();

      isDown = true;
      startX = event.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
    });
    element.addEventListener('mouseleave', _ => {
      isDown = false;
    });
    element.addEventListener('mouseup', _ => {
      isDown = false;
      setTimeout(() => {
        isDragging = false;
      }, 100);
    });
    element.addEventListener('mousemove', event => {
      if (!isDown) return;

      event.preventDefault();
      isDragging = true;
      const x = event.pageX - element.offsetLeft;
      const walk = x - startX;
      element.scrollLeft = scrollLeft - walk;
    });
  };
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

document.cookie = 'isHelloShown=true; path=/';

window.addEventListener('load', _ => {
  initalizeContributionScrollEvent();
  initalizeDragEvent();

  document.addEventListener('click', event => {
    if (event.target.closest('.events-content-navbar-header-wrapper')) {
      document.querySelector('.events-content-navbar-events-wrapper').classList.toggle('events-content-navbar-events-wrapper-closed');
      document.querySelector('.events-content-navbar-header-icon-line-left').classList.toggle('events-content-navbar-header-icon-line-left-reversed');
      document.querySelector('.events-content-navbar-header-icon-line-right').classList.toggle('events-content-navbar-header-icon-line-right-reversed');
    };

    if (event.target.closest('.events-content-navbar-each-event') || event.target.closest('.events-content-navbar-each-event-responsive')) {
      const target = event.target.closest('.events-content-navbar-each-event');
      const targetResponsive = event.target.closest('.events-content-navbar-each-event-responsive');

      const eventId = target ? target.id.replace('event-', '') : targetResponsive.id.replace('event-', '').replace('-responsive', '');

      document.querySelector('.events-content-navbar-each-event-selected').classList.remove('events-content-navbar-each-event-selected');
      document.querySelector('.events-content-navbar-each-event-selected-responsive').classList.remove('events-content-navbar-each-event-selected-responsive');

      document.getElementById(`event-${eventId}`).classList.add('events-content-navbar-each-event-selected');
      document.getElementById(`event-${eventId}-responsive`).classList.add('events-content-navbar-each-event-selected-responsive');

      document.querySelectorAll('.events-content-each-event-wrapper').forEach(eachEvent => {
        if (!eachEvent.classList.contains(`events-content-${eventId}-wrapper`))
          eachEvent.classList.add('display-none');
      });
      document.querySelector(`.events-content-${eventId}-wrapper`).classList.remove('display-none');
    };

    if (event.target.closest('.contributions-navbar-each-contribution-responsive')) {
      const target = event.target.closest('.contributions-navbar-each-contribution-responsive');

      const contributionId = target.id.replace('contribution-', '').replace('-responsive', '');

      document.querySelector('.contributions-navbar-each-contribution-selected-responsive').classList.remove('contributions-navbar-each-contribution-selected-responsive');

      document.getElementById(`contribution-${contributionId}-responsive`).classList.add('contributions-navbar-each-contribution-selected-responsive');

      changeVisibleContribution(contributionId);
    };

    if (event.target.closest('.footer-top-left-input-button')) {
      addToSubscriberList();
    };

    if (event.target.closest('.contributions-content-open-source-each-project-wrapper') && !event.target.closest('.contributions-content-open-source-each-project-wrapper-open')) {
      document.querySelector('.contributions-content-open-source-each-project-wrapper-open').classList.remove('contributions-content-open-source-each-project-wrapper-open');

      event.target.closest('.contributions-content-open-source-each-project-wrapper').classList.add('contributions-content-open-source-each-project-wrapper-open');
    };

    if (event.target.closest('.contributions-content-rpcs-json-foldable')) {
      const target = event.target.closest('.contributions-content-rpcs-json-foldable');

      target.classList.toggle('contributions-content-rpcs-json-folded');
    };

    if (event.target.closest('.contributions-navbar-content-each-contribution')) {
      const navbarScrollWrapper = document.querySelector('.contributions-navbar-content-wrapper');
      const targetItem = event.target.closest('.contributions-navbar-content-each-contribution');

      navbarScrollWrapper.scrollTo(isContributionsResponsive() ? {
        left: targetItem.offsetLeft - navbarScrollWrapper.getBoundingClientRect().width / 2 + targetItem.getBoundingClientRect().width / 2,
        behavior: 'smooth'
      } : {
        top: targetItem.offsetTop - navbarScrollWrapper.getBoundingClientRect().height / 2 + targetItem.getBoundingClientRect().height / 2,
        behavior: 'smooth'
      });
    };

    if (event.target.closest('.portfolio-content-project-wrapper-responsive-more-button')) {
      const allRepsonsiveProjects = document.querySelectorAll('.portfolio-content-each-project-wrapper-responsive.display-none');

      for (let i = 0; i < 5; i++)
        allRepsonsiveProjects[i]?.classList.remove('display-none');
    };
  });

  document.addEventListener('keyup', event => {
    if (event.target.classList.contains('footer-top-left-input') && event.key == 'Enter') {
      addToSubscriberList();
    };
  });
});
