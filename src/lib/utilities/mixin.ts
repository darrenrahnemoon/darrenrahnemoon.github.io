/**
 * Mixin decorator for classes
 * Merges static and non-static members into the decorated class
 * @param mixinClasses classes to mix into the decorated class
 */
export function Mixin(...mixinClasses: Class[]) {
    return function(targetClass: Class) {
        mixinClasses.forEach(mixinClass => {
            // merge prototype properties (instance members)
            Object.getOwnPropertyNames(mixinClass.prototype).forEach(name => {
                if (!targetClass.prototype.hasOwnProperty(name)) {
                    Object.defineProperty(targetClass.prototype, name, Object.getOwnPropertyDescriptor(mixinClass.prototype, name));
                }
            });

            // merge class properties (static members)
            Object.getOwnPropertyNames(mixinClass).forEach(name => {
                if (!targetClass.hasOwnProperty(name)) {
                    Object.defineProperty(targetClass, name, Object.getOwnPropertyDescriptor(mixinClass, name));
                }
            });
        });
    };
}
