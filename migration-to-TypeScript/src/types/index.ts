interface IsourseItemPart {
    id: string | null;
    name: string | null;
}

export interface Iitem {
    author: string | null;
    content: string | null;
    description: string | null;
    publishedAt: string;
    source: IsourseItemPart;
    title: string | null;
    url: string;
    urlToImage: string | null;
}

export interface ISourseItem {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}