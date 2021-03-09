/// <reference types="lodash"/>

// Typescript declarations
declare namespace _ {
    interface LoDashStatic {
        compactObject<T extends object>(object: T | null | undefined): Partial<T>;
        mergeClasses<T extends Function>(targetClass: T, ...otherClasses: Function[]): T;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
	  _: LoDashStatic;
    }
}
