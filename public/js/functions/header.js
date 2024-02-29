let headerIsLanguageButtonOpen = false;

let HEADER_HEIGHT;

function headerBackgroundAnimation(percentage) {
  if (typeof percentage != 'number' || percentage < 0 || percentage > 1)
    return;

  const headerLogoWrapper = document.querySelector('.header-logo-wrapper');
  const buttonsWrapper = document.querySelector('.header-buttons-wrapper');
  const headerMenuWrapper = document.querySelector('.header-menu-wrapper');

  headerLogoWrapper.style.borderBottomRightRadius = `calc((var(--header-height) - 10px) * ${1 - percentage})`;
  buttonsWrapper.style.height = `calc(calc(var(--header-height) - 2 * ${1 - percentage} * var(--header-vertical-padding)))`;
  buttonsWrapper.style.borderRadius = `calc(((var(--header-height) - 2 * var(--header-vertical-padding)) / 2) * ${1 - percentage})`;
  buttonsWrapper.style.width = `calc(100vw - 2 * var(--page-horizontal-padding) - 3 * var(--header-horizontal-padding) - 2 * ${(1 - percentage)} * var(--header-gap) - var(--header-logo-width) - (2 * var(--header-menu-gap) + var(--header-stake-with-node101-button-width) + var(--header-change-language-button-width)))`;
  buttonsWrapper.style.minWidth = `calc(100vw - 2 * var(--page-horizontal-padding) - 3 * var(--header-horizontal-padding) - 2 * ${(1 - percentage)} * var(--header-gap) - var(--header-logo-width) - (2 * var(--header-menu-gap) + var(--header-stake-with-node101-button-width) + var(--header-change-language-button-width)))`;
  headerMenuWrapper.style.borderBottomLeftRadius = `calc((var(--header-height) - 10px) * ${1 - percentage})`;
};

window.addEventListener('load', _ => {
  HEADER_HEIGHT = Number(getComputedStyle(document.documentElement).getPropertyValue('--header-height').replace('px', ''));

  const headerChangeLanguageButtonMenuWrapper = document.querySelector('.header-change-language-button-menu-wrapper');

  document.addEventListener('click', event => {
    if (event.target.closest('.header-change-language-button')) {
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
  });

  document.querySelector('.content-wrapper').addEventListener('scroll', event => {
    const percentage = Math.min(1, event.target.scrollTop / HEADER_HEIGHT);
    headerBackgroundAnimation(percentage);
  });
});