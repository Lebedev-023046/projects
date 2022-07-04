import { Endpoint, Callback, Options, IArticleCombiner, Methods} from '../../types/index'

class Loader {

    constructor(readonly baseLink: string, protected options: Options) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: { endpoint: Endpoint.everything | Endpoint.sources | Endpoint.topHeadlines, options?: Options | {} },
        callback: Callback<T> = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(Methods.GET, endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Required<Options>, endpoint: Endpoint.everything | Endpoint.sources| Endpoint.topHeadlines): string {
        const urlOptions: {[index: string]: string} = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        // Object.keys(urlOptions).forEach((key) => {
        //     url += `${key}=${urlOptions[key]}&`;
        // });
        let finalUrl = Object.keys(urlOptions).reduce((url, key) => {
            return url + `${key}=${urlOptions[key]}&`;
        }, url);

        return finalUrl.slice(0, -1);
    }

    load<T>(method: Methods.GET | Methods.POST, endpoint: Endpoint.everything | Endpoint.sources| Endpoint.topHeadlines, callback: (data: T) => void, options: Partial<Options> = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res): Promise<T> => res.json())
            .then((data: T): void => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
