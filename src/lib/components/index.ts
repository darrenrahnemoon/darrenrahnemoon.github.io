import Vue from 'vue';

import Row from './layout/Row.vue';
import Column from './layout/Column.vue';
import Container from './layout/Container.vue';

import InputButton from './input/Button.vue';
import InputCheckbox from './input/Checkbox.vue';
import InputRadio from './input/Radio.vue';
import InputText from './input/Text.vue';
import InputSwitch from './input/Switch.vue';

import Accordion from './Accordion.vue';
import AccordionItem from './AccordionItem.vue';
import AlertBox from './AlertBox.vue';

import Overlay from './Overlay.vue';
import Modal from './Modal.vue';
import ProgressBar from './ProgressBar.vue';
import Icon from './Icon.vue';

import Loaders from '$/lib/components/loaders';
import Transitions from '$/lib/animations/transitions';

const prefix = '';

// Layouts
Vue.component(`${prefix}row`, Row);
Vue.component(`${prefix}column`, Column);
Vue.component(`${prefix}container`, Container);

// Forms
Vue.component(`${prefix}input-button`, InputButton);
Vue.component(`${prefix}input-checkbox`, InputCheckbox);
Vue.component(`${prefix}input-radio`, InputRadio);
Vue.component(`${prefix}input-text`, InputText);
Vue.component(`${prefix}input-switch`, InputSwitch);

// Misc
Vue.component(`${prefix}accordion`, Accordion);
Vue.component(`${prefix}accordion-item`, AccordionItem);
Vue.component(`${prefix}alert-box`, AlertBox);
Vue.component(`${prefix}overlay`, Overlay);
Vue.component(`${prefix}modal`, Modal);
Vue.component(`${prefix}progress-bar`, ProgressBar);
Vue.component(`${prefix}icon`, Icon);

Object.keys(Loaders).forEach(name => {
    Vue.component(`${prefix}loader-${_.kebabCase(name)}`, Loaders[name]);
});

Object.keys(Transitions).forEach(name => {
    Vue.component(`${prefix}transition-${_.kebabCase(name)}`, Transitions[name]);
});
