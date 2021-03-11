/* eslint-disable @typescript-eslint/no-var-requires */
const _ = require('lodash');

// Colors
const colors = {
    primary   : { value : '#D1AF62', compliment : 'dark' },
    secondary : { value : '#749C45', compliment : 'light' },
    dark      : { value : '#1E1E1E', compliment : 'light' },
    darker    : { value : '#111',    compliment : 'light' },
    light     : { value : '#EFEFEF', compliment : 'dark' },
    lighter   : { value : '#EEE',    compliment : 'darker' },
};

// Fonts
const fonts = {
    'primary'   : '(Jura, sans-serif)', // Wrapped in brackets to make it compatible with sass maps
    'secondary' : '(Jura, sans-serif)',
    'x-small'   : '0.67rem',
    'small'     : '0.83rem',
    'medium'    : '1rem',
    'large'     : '1.17rem',
    'x-large'   : '1.5rem',
    'xx-large'  : '2rem',
};

// Spacing
const spacing = {
    'thickness-primary' : { value : '2px',   shortened : 'thickness' },
    'none'              : { value : '0',     shortened : 'none' },
    'x-small'           : { value : '5px',   shortened : 'xs' },
    'small'             : { value : '10px',  shortened : 'sm' },
    'medium'            : { value : '20px',  shortened : 'md' },
    'large'             : { value : '40px',  shortened : 'lg' },
    'x-large'           : { value : '80px',  shortened : 'xlg' },
    'xx-large'          : { value : '160px', shortened : 'xxlg' },
    'xxx-large'         : { value : '320px', shortened : 'xxx-lg' },
};

// Screen widths
const screens = {
    'small'   : '480px',
    'medium'  : '768px',
    'large'   : '1024px', // 786 + 256
    'x-large' : '1536px', // 1024 + 512
};

// Root Settings
const root = {
    'font-family'      : '$font-primary',
    'font-size'        : '18px',
    'background-color' : '$color-darker',
    'color'            : '$color-light',
};

module.exports = {
    //
    ...generateVariablesAndMap(colors, { prefix : 'color' }),
    ...generateVariablesAndMap(colors, { prefix : 'color-compliment', value : color => colors[color.compliment] }),
    //
    ...generateVariablesAndMap(fonts,  { prefix : 'font' }),
    //
    ...generateVariables(spacing), // e.g. $x-small : 5px
    ...generateMap(spacing, { prefix : 'spacing' }),
    ...generateVariables(spacing, { key : spacing => spacing.shortened }), // e.g. $xs : 5px
    ...generateMap(spacing, { prefix : 'spacing-shortened', key : spacing => spacing.shortened }),
    //
    ...generateVariablesAndMap(root, { prefix : 'root' }),
    //
    ...generateVariablesAndMap(screens, { prefix : 'screen-width' }),
    breakpoints : _(screens).values().valueOf(),
};

function generateVariables(map, {
    prefix = undefined,
    value = value => value,
    key = (value, key) => key,
} = {}) {
    return _(map)
        .mapKeys(key)
        .mapKeys((value, key) => prefix ? `${prefix}-${key}` : key) // e.g. $color-primary
        .mapValues(value)
        .mapValues(value => value.value || value)
        .valueOf();
}

function generateMap(map, {
    prefix = undefined,
    value = value => value,
    key = (value, key) => key,
} = {}) {
    return {
        [prefix] : _(map) // e.g. map-get($color, primary)
            .mapKeys(key)
            .mapValues(value)
            .mapValues(value => value.value || value)
            .valueOf(),
    };
}

function generateVariablesAndMap(map, {
    prefix = undefined,
    value = value => value,
    key = (value, key) => key,
} = {}) {
    if (!prefix) {
        throw new Error('missing parameter: prefix');
    }
    return {
        ...generateMap(map, { prefix, value, key }),
        ...generateVariables(map, { prefix, value, key }),
    };
}

