import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IArticleCombiner } from '../../types/index'

class App {
    public controller: AppController
    public view: AppView
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IArticleCombiner) => this.view.drawNews(data)));
        this.controller.getSources((data: IArticleCombiner) => this.view.drawSources(data));

        (document
            .querySelector('.search-button') as HTMLElement)
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IArticleCombiner) => this.view.drawNews(data)));

        this.controller.getSources((data: IArticleCombiner) => this.view.drawSources(data));
    }
}

export default App;
