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

import Loader from './Loader.vue';
import Modal from './Modal.vue';
import ProgressBar from './ProgressBar.vue';
import Icon from './Icon.vue';

// Layouts
Vue.component('row', Row);
Vue.component('column', Column);
Vue.component('container', Container);

// Forms
Vue.component('input-button', InputButton);
Vue.component('input-checkbox', InputCheckbox);
Vue.component('input-radio', InputRadio);
Vue.component('input-text', InputText);
Vue.component('input-switch', InputSwitch);

// Misc
Vue.component('accordion', Accordion);
Vue.component('accordion-item', AccordionItem);
Vue.component('alert-box', AlertBox);
Vue.component('loader', Loader);
Vue.component('modal', Modal);
Vue.component('progress-bar', ProgressBar);
Vue.component('icon', Icon);
