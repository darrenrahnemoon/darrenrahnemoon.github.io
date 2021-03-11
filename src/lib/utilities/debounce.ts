import _ from 'lodash';

/**
 * Decorate a class method so that it is debounced but the specified wait period
 * @param wait duration to wait before making actual call
 */
export function Debounce(wait = 500) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        return {
            configurable : true,
            enumerable   : descriptor.enumerable,
            get          : function getter() {
                // Attach this function to the instance (not the class)
                Object.defineProperty(this, key, {
                    configurable : true,
                    enumerable   : descriptor.enumerable,
                    value        : _.debounce(descriptor.value.bind(this), wait),
                });

                return this[key];
            },
        };
    };
}
