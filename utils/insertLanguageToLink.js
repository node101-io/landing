module.exports = (link, language) => {
  if (!link || typeof link != 'string')
    return '/';

  let link_clean = link.split('/').join('/');

  if (!link_clean.length)
    link_clean = '/';

  if (!language || typeof language != 'string' || !language.trim().length)
    return link_clean;

  if (link_clean.includes('?')) {
    if (link_clean.split('?').length < 2)
      return link_clean.split('?')[0] + '?lang=' + language

    const params = link.split('?')[1].split('&').filter(each => !each.includes('lang=')).join('&');

    return link_clean.split('?')[0] + '?lang=' + language + (params.length ? '&' + params : '');
  } else
    return link_clean + '?lang=' + language;
};