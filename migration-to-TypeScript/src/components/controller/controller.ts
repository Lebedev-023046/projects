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

    getNews<T>(e: PointerEvent, callback: Callback<T>): void {
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
    }
}

export default AppController;
