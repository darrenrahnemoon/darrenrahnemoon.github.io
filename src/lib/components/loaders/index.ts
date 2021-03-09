import Spinner from './Spinner.vue';
import Ripple from './Ripple.vue';
import Ellipsis from './Ellipsis.vue';
import Grid from './Grid.vue';

export default {
    Spinner,
    Ripple,
    Ellipsis,
    Grid,
};

export enum LoaderVariant {
    Spinner  = 'spinner',
    Ripple   = 'ripple',
    Ellipsis = 'ellipsis',
    Grid     = 'grid',
}
