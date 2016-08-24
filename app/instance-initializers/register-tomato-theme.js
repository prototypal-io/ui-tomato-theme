export function initialize(appInstance) {
  let themeService = appInstance.lookup('service:ui-theme');

  themeService.register('ui-button', 'default', 'tomato');
  themeService.register('ui-button', 'primary', 'tomato');
  themeService.register('ui-button', 'simple', 'tomato');
  //                    ^^ base      ^^ kind   ^^ theme

  themeService.register('ui-checkbox', 'default', 'tomato');

  themeService.register('ui-field', 'default', 'tomato');

  themeService.register('ui-icon', 'default', 'tomato');

  themeService.register('ui-input', 'default', 'tomato');

  themeService.register('ui-list', 'default', 'tomato');
  themeService.register('ui-list---item', 'default', 'tomato');
  themeService.register('ui-list', 'dropbutton', 'tomato');
  themeService.register('ui-list---item', 'dropbutton', 'tomato');

  themeService.register('ui-loading', 'default', 'tomato');

  themeService.register('ui-message', 'default', 'tomato');
  themeService.register('ui-message', 'input-error', 'tomato');

  themeService.register('ui-pagination', 'default', 'tomato');
  themeService.register('ui-pagination---pages', 'default', 'tomato');

  themeService.register('ui-popup', 'tooltip', 'tomato');
  themeService.register('ui-popup', 'dropbutton', 'tomato');
  themeService.register('ui-panel', 'default', 'tomato');
  themeService.register('ui-panel---content', 'default', 'tomato');
  themeService.register('ui-panel---titlebar', 'default', 'tomato');
  themeService.register('ui-tabs', 'default', 'tomato');

  themeService.register('ui-textarea', 'default', 'tomato');
  themeService.register('ui-tooltip', 'default', 'tomato');
  themeService.register('ui-tooltip---target', 'default', 'tomato');
}

export default {
  name: 'theme-tomato',
  initialize
};
