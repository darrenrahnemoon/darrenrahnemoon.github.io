import { Component, Vue } from 'vue-property-decorator';

@Component
export class BasePlayground extends Vue {
    get colors() {
        return [ 'primary', 'secondary', 'tertiary', 'light', 'dark' ];
    }

    get sizes() {
        return [ 'small', 'medium', 'large', 'x-large' ];
    }
}
