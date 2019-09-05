const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const koaJson = require('koa-json');
const registerRouter = require('./routes/main');

const app = new Koa();
const config = require('./config.json');

app.use(cors());
app.use(bodyParser());
app.use(koaJson());

app.use(registerRouter());
app.listen(config.port);

console.log("Server started at port " + config.port);