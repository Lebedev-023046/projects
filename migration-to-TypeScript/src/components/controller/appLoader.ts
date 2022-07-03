import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1ebd6f88d5f04980b776fd9e5812aaa5',
        });
    }
}

export default AppLoader;
