import { configure } from '@kadira/storybook';

const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
