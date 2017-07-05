import Express  from 'express';
import path     from 'path';
import engine   from 'consolidate';
import routeConfig   from './serverconfig/routes';

require('babel/register');

const app   = new Express();

app.engine('html', engine.mustache);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'html');

// express static path
app.use(Express.static(path.join(__dirname, '../public')));

routeConfig(app);

export default app;
