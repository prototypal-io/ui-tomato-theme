export function initialize(appInstance) {
  let themeService = appInstance.lookup('service:ui-theme');

  themeService.register('ui-button', 'default', 'tomato');
  themeService.register('ui-button', 'primary', 'tomato');
  themeService.register('ui-button', 'simple', 'tomato');

  themeService.register('ui-input', 'default', 'tomato');
  themeService.register('ui-field', 'default', 'tomato');
  themeService.register('ui-tooltip', 'default', 'tomato');
  //                    ^^ base     ^^ kind    ^^ theme

  themeService.register('ui-panel', 'default', 'tomato');
  themeService.register('ui-panel---content', 'default', 'tomato');
  themeService.register('ui-panel---titlebar', 'default', 'tomato');
}

export default {
  name: 'theme-tomato',
  initialize
};
