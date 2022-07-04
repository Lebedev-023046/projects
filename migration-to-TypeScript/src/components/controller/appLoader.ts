import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '1ebd6f88d5f04980b776fd9e5812aaa5',
        });
    }
}

export default AppLoader;
