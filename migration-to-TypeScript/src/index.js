import App from './components/app/app';
import './global.css';
import { sayHi } from './components/app/test'

console.log(sayHi())

const app = new App();
app.start();
