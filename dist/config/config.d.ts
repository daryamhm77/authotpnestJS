export declare enum configKeys {
    App = "App",
    Db = "Db"
}
export declare const configuration: {
    AppConfig: (() => {
        port: number;
    }) & import("@nestjs/config").ConfigFactoryKeyHost<{
        port: number;
    }>;
    DbConfig: (() => {
        port: number;
        host: string;
        username: string;
        password: string;
        database: string;
    }) & import("@nestjs/config").ConfigFactoryKeyHost<{
        port: number;
        host: string;
        username: string;
        password: string;
        database: string;
    }>;
};
