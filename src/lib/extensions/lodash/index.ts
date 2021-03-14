import _ from 'lodash';

_.mixin(_, {
    compactObject : function(obj: any) {
        return _.pickBy(obj, value => !_.isUndefined(value));
    },
}, { chain : true });

_.mixin(_, {
    mergeClasses(targetClass: Function, ...otherClasses: Function[]) {
        otherClasses.forEach(otherClass => {
            // copy over prototype properties (instance members)
            Object.getOwnPropertyNames(otherClass.prototype).forEach(name => {
                if (!targetClass.prototype.hasOwnProperty(name)) {
                    Object.defineProperty(targetClass.prototype, name, Object.getOwnPropertyDescriptor(otherClass.prototype, name));
                }
            });

            // copy over class properties (static members)
            Object.getOwnPropertyNames(otherClass).forEach(name => {
                if (!targetClass.hasOwnProperty(name)) {
                    Object.defineProperty(targetClass, name, Object.getOwnPropertyDescriptor(otherClass, name));
                }
            });
        });

        return targetClass;
    },
});

export default _;

export const VueLodashMixin = {
    filters : _.pick(_, [
        'capitalize',
        'startCase',
        'camelCase',
        'kebabCase',
        'snakeCase',
        'upperCase',
        'lowerCase',
    ]),
    computed : {
        _ : () => _,
    },
};
