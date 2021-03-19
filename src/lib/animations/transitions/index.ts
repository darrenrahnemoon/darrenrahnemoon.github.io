import Fade from './Fade.vue';
import SlideFade from './SlideFade.vue';
import SlideScale from './SlideScale.vue';

export default {
    Fade,
    SlideFade,
    SlideScale,
};

export enum TransitionVariant {
    Fade       = 'fade',
    SlideFade  = 'slideFade',
    SlideScale = 'slideScale',
}
