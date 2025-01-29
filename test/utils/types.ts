export interface AppDriver {
    setQuery: (query: string) => Promise<void>;
    clickRunQuery: () => Promise<void>;
    getQueryResult: () => Promise<string>;
}

export type AllChannels = "UI" | "API"