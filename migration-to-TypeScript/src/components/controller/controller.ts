import { Callback, Endpoint } from '../../types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: Callback<T>): void {
        super.getResp(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    getNews<T>(e: MouseEvent, callback: Callback<T>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id')!;
                if ((newsContainer.getAttribute('data-source') !== sourceId)) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
        if (target.classList.contains('search-button')) {
            const keyWord = (document.querySelector(".search-input") as HTMLInputElement).value as string
            super.getResp(
                {
                    endpoint: Endpoint.everything,
                    options: {
                        q: keyWord
                    },
                },
                callback
            );
        }
    }
}

export default AppController;
