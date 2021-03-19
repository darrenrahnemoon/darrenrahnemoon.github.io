export enum EnvironmentType {
    Production  = 'production',
    Development = 'development'
}

export class Environment {
    static get isProduction() {
        return process.env.NODE_ENV === EnvironmentType.Production;
    }
    static get isDevelopment() {
        return process.env.NODE_ENV === EnvironmentType.Development;
    }
    static isAnyOf(...acceptableEnvironments: EnvironmentType[]) {
        return acceptableEnvironments.includes(process.env.NODE_ENV);
    }
    static get baseURL() {
        return process.env.BASE_URL;
    }
}
