import Vue from 'vue';
import { VueScrollAnimationMixin } from '$/lib/animations/scroll';
import { VueLodashMixin } from '$/lib/extensions/lodash';

Vue.mixin(VueScrollAnimationMixin);
Vue.mixin(VueLodashMixin);
