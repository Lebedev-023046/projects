// VIEW
type IsourseItemPart = Pick<ISourceItem, 'id' | 'name'>

export interface INewsItem {
    author: string | null;
    content: string | null;
    description: string | null;
    publishedAt: string;
    source: IsourseItemPart;
    title: string | null;
    url: string;
    urlToImage: string | null;
}

export interface ISourceItem {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IArticleCombiner {
    articles?: Array<INewsItem>;
    sources?: Array<ISourceItem>;
    status: string;
    totalResults: number;
}

//CONTROLLER

export enum Endpoint {
    everything = 'everything',
    topHeadlines = 'top-headlines',
    sources = 'sources'
} 

export enum Status {
ok = 401,
error = 404
}
export type Callback<T> = (data: T) => void;
export type Options = { apiKey?: string, sources?: string} | {};

