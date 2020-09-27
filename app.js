import Koa from 'koa';
import { createContainer } from 'awilix';
import { loadControllers } from 'awillix-koa';

const container = createContainer();
const app = new Koa();

container.loadModules([__dirname + "/services/*.js"]);
app.use(loadControollers(__dirname + "/routes/*.js"))