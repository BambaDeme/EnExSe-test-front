export interface Agent {
    id: number;
    os: string;
    lastKeepAlive: Date;
    dateAdd: Date;
    ip: string;
    name: string;
    version: string;
    status: string
}