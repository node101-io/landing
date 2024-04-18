let headerLastBackgroundAnimationPercentage = 0;
let headerIsLanguageButtonOpen = false;

const HEADER_ANIMATION_WIDTH_LIMIT = 900;
let HEADER_HEIGHT;
let WINDOW_HEIGHT;

function headerBackgroundAnimation() {
  if (typeof headerLastBackgroundAnimationPercentage != 'number' || headerLastBackgroundAnimationPercentage < 0 || headerLastBackgroundAnimationPercentage > 1)
    return;

  const headerTopLineRadiusLeftInnerCircle = document.querySelector('.header-top-line-radius-left-inner-circle');
  const headerTopLineRadiusRightInnerCircle = document.querySelector('.header-top-line-radius-right-inner-circle');

  const headerLogoWrapper = document.querySelector('.header-logo-wrapper');
  const buttonsWrapper = document.querySelector('.header-buttons-wrapper');
  const headerMenuWrapper = document.querySelector('.header-menu-wrapper');

  if (window.innerWidth > HEADER_ANIMATION_WIDTH_LIMIT) {
    headerLogoWrapper.style.borderBottomRightRadius = window.innerWidth >= 1000 ? `calc((var(--header-height) - 10px) * ${1 - headerLastBackgroundAnimationPercentage})` : `calc(30px * ${1 - headerLastBackgroundAnimationPercentage})`;
    buttonsWrapper.style.height = `calc(calc(var(--header-height) - 2 * ${1 - headerLastBackgroundAnimationPercentage} * var(--header-vertical-padding)))`;
    buttonsWrapper.style.borderBottomLeftRadius = buttonsWrapper.style.borderBottomRightRadius = `calc(((var(--header-height) - 2 * var(--header-vertical-padding)) / 2) * ${1 - headerLastBackgroundAnimationPercentage})`;
    buttonsWrapper.style.borderTopLeftRadius = buttonsWrapper.style.borderTopRightRadius = `calc(max(var(--header-vertical-padding), ((var(--header-height) - 2 * var(--header-vertical-padding)) / 2) * ${1 - headerLastBackgroundAnimationPercentage}))`;
    buttonsWrapper.style.width = `calc(100vw - 2 * var(--page-horizontal-padding) - 3 * var(--header-horizontal-padding) - 2 * ${(1 - headerLastBackgroundAnimationPercentage)} * var(--header-gap) - var(--header-logo-width) - (2 * var(--header-menu-gap) + var(--header-stake-with-node101-button-width) + var(--header-change-language-button-width)))`;
    buttonsWrapper.style.minWidth = `calc(100vw - 2 * var(--page-horizontal-padding) - 3 * var(--header-horizontal-padding) - 2 * ${(1 - headerLastBackgroundAnimationPercentage)} * var(--header-gap) - var(--header-logo-width) - (2 * var(--header-menu-gap) + var(--header-stake-with-node101-button-width) + var(--header-change-language-button-width)))`;
    buttonsWrapper.style.padding = `0 calc(var(--header-gap) * ${headerLastBackgroundAnimationPercentage})`;
    headerMenuWrapper.style.borderBottomLeftRadius = window.innerWidth >= 1000 ? `calc((var(--header-height) - 10px) * ${1 - headerLastBackgroundAnimationPercentage})` : `calc(30px * ${1 - headerLastBackgroundAnimationPercentage})`;

    if (headerLastBackgroundAnimationPercentage == 1)  {
      headerTopLineRadiusLeftInnerCircle.style.borderRadius = headerTopLineRadiusRightInnerCircle.style.borderRadius = '0';
      headerTopLineRadiusLeftInnerCircle.style.backgroundColor = headerTopLineRadiusRightInnerCircle.style.backgroundColor = 'var(--background-color)';
    } else {
      headerTopLineRadiusLeftInnerCircle.style.borderRadius = headerTopLineRadiusRightInnerCircle.style.borderRadius = '100%';
      headerTopLineRadiusLeftInnerCircle.style.backgroundColor = headerTopLineRadiusRightInnerCircle.style.backgroundColor = 'transparent';
    }
  } else {
    headerLogoWrapper.style.borderBottomRightRadius = '0';
    buttonsWrapper.style.height = 'calc(calc(var(--header-height) - 2 * var(--header-vertical-padding)))';
    buttonsWrapper.style.borderBottomLeftRadius = buttonsWrapper.style.borderBottomRightRadius = '0';
    buttonsWrapper.style.borderTopLeftRadius = buttonsWrapper.style.borderTopRightRadius = '0';
    buttonsWrapper.style.width = 'calc(100vw - 2 * var(--page-horizontal-padding) - 3 * var(--header-horizontal-padding) - 2 * var(--header-gap) - var(--header-logo-width) - (2 * var(--header-menu-gap) + var(--header-stake-with-node101-button-width) + var(--header-change-language-button-width)))';
    buttonsWrapper.style.minWidth = 'calc(100vw - 2 * var(--page-horizontal-padding) - 3 * var(--header-horizontal-padding) - 2 * var(--header-gap) - var(--header-logo-width) - (2 * var(--header-menu-gap) + var(--header-stake-with-node101-button-width) + var(--header-change-language-button-width)))';
    buttonsWrapper.style.padding = '0';
    headerMenuWrapper.style.borderBottomLeftRadius = '0';
    headerTopLineRadiusLeftInnerCircle.style.borderRadius = headerTopLineRadiusRightInnerCircle.style.borderRadius = '0';
    headerTopLineRadiusLeftInnerCircle.style.backgroundColor = headerTopLineRadiusRightInnerCircle.style.backgroundColor = 'var(--background-color)';
  }
};

window.addEventListener('load', _ => {
  HEADER_HEIGHT = Number(getComputedStyle(document.documentElement).getPropertyValue('--header-height').replace('px', ''));
  WINDOW_HEIGHT = window.innerHeight;

  const headerWrapperResponsiveMenu = document.querySelector('.header-wrapper-responsive-menu');

  document.addEventListener('click', event => {
    if (event.target.closest('.header-change-language-button')) {
      const headerChangeLanguageButtonMenuWrapper = event.target.closest('.header-change-language-button').childNodes[1];

      if (headerIsLanguageButtonOpen) {
        headerIsLanguageButtonOpen = false;
        headerChangeLanguageButtonMenuWrapper.classList.remove('header-change-language-button-menu-wrapper-open-animation');
        headerChangeLanguageButtonMenuWrapper.classList.add('header-change-language-button-menu-wrapper-close-animation');
      } else {
        headerIsLanguageButtonOpen = true;
        headerChangeLanguageButtonMenuWrapper.classList.add('header-change-language-button-menu-wrapper-open-animation');
        headerChangeLanguageButtonMenuWrapper.classList.remove('header-change-language-button-menu-wrapper-close-animation');
      };

    } else if (headerIsLanguageButtonOpen) {
      headerIsLanguageButtonOpen = false;
      headerChangeLanguageButtonMenuWrapper.classList.remove('header-change-language-button-menu-wrapper-open-animation');
      headerChangeLanguageButtonMenuWrapper.classList.add('header-change-language-button-menu-wrapper-close-animation');
    };

    if (event.target.closest('.each-header-change-language-button-menu-text')) {
      const language = event.target.closest('.each-header-change-language-button-menu-text').innerText.toLowerCase();

      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);

      window.location.href = url;
    };

    if (event.target.closest('.header-responsive-menu-button')) {
      const target = event.target.closest('.header-responsive-menu-button');

      if (target.childNodes[0].classList.contains('header-responsive-menu-button-each-icon-top-opened')) {
        headerWrapperResponsiveMenu.classList.remove('header-wrapper-responsive-menu-opened');
        target.childNodes[0].classList.remove('header-responsive-menu-button-each-icon-top-opened');
        target.childNodes[1].classList.remove('header-responsive-menu-button-each-icon-middle-opened');
        target.childNodes[2].classList.remove('header-responsive-menu-button-each-icon-bottom-opened');
      } else {
        headerWrapperResponsiveMenu.classList.add('header-wrapper-responsive-menu-opened');
        target.childNodes[0].classList.add('header-responsive-menu-button-each-icon-top-opened');
        target.childNodes[1].classList.add('header-responsive-menu-button-each-icon-middle-opened');
        target.childNodes[2].classList.add('header-responsive-menu-button-each-icon-bottom-opened');
      };
    };

    if (event.target.closest('.header-stake-with-node101-button')) {
      const portfolioWrapperTop = document.querySelector('.portfolio-wrapper').getBoundingClientRect().top;

      const cssRoot = getComputedStyle(document.documentElement);
      const headerHeight =
        parseInt(cssRoot.getPropertyValue('--header-height')) +
        parseInt(cssRoot.getPropertyValue('--page-vertical-padding'));

      document.querySelector('.content-wrapper').scrollBy({
        top: portfolioWrapperTop - headerHeight,
        behavior: 'smooth'
      });
    };
  });

  document.querySelector('.content-wrapper').addEventListener('scroll', event => {
    headerLastBackgroundAnimationPercentage = Math.min(1, event.target.scrollTop / HEADER_HEIGHT);
    headerBackgroundAnimation();
  });
});

window.addEventListener('resize', _ => {
  headerBackgroundAnimation();
});