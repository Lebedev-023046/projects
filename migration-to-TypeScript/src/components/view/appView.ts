import News from './news/news';
import Sources from './sources/sources';
import { IArticleCombiner, IViewClass } from '../../types/index'

export class AppView implements IViewClass {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IArticleCombiner): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IArticleCombiner): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
