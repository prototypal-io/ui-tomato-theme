export function initialize(appInstance) {
  let themeService = appInstance.lookup('service:ui-theme');

  themeService.register('ui-button', 'default', 'tomato');
  //                    ^^ base     ^^ kind    ^^ theme
}

export default {
  name: 'theme-tomato',
  initialize
};
