import News from "../components/view/news/news";
import Sources from "../components/view/sources/sources";

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

export interface ISourceClass {
    draw(data: Array<ISourceItem>): void;
}

export interface INewsClass {
    draw(data: Array<INewsItem>): void;
}

export interface IViewClass {
    news: News;
    sources: Sources;
    drawNews(data: IArticleCombiner): void;
    drawSources(data: IArticleCombiner): void;
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

