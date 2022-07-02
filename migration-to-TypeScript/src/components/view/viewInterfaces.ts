interface IsourseInterface {
    id: string | null;
    name: string | null;
}

export interface IitemInterface {
    author: string | null;
    content: string | null;
    description: string | null;
    publishedAt: string;
    source: IsourseInterface;
    title: string | null;
    url: string;
    urlToImage: string | null;
}
