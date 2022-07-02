import './news.css';
import { IitemInterface } from '../viewInterfaces'

class News {
    draw(data: Array<IitemInterface>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = (newsItemTemp as HTMLTemplateElement).content.cloneNode(true);
            
            if (idx % 2) ((<Element>newsClone).querySelector('.news__item') as HTMLElement).classList.add('alt');

            ((<Element>newsClone).querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            ((<Element>newsClone).querySelector('.news__meta-author') as HTMLElement).textContent = item.author || item.source.name;
            ((<Element>newsClone).querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            ((newsClone as DocumentFragment).querySelector('.news__description-title') as HTMLElement).textContent = item.title;
            ((newsClone as DocumentFragment).querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
            ((newsClone as DocumentFragment).querySelector('.news__description-content') as HTMLElement).textContent = item.description;
            ((newsClone as DocumentFragment).querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).appendChild(fragment);
    }
}

export default News;
