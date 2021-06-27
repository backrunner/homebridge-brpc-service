const router = require('koa-router')();
const config = require('../config.json');
const { execSync } = require('child_process');

router.prefix('/action');

router.get('/shutdown', async (ctx, next) => {
  if (auth(ctx)) {
    execSync('shutdown -s -f -t 0');
    ctx.body = 'Success';
  } else {
    ctx.status = 401;
    ctx.body = 'Auth info is wrong.';
  }
  await next();
});

router.get('/hibernate', async (ctx, next) => {
  if (auth(ctx)) {
    execSync('shutdown -s -h -t 0');
    ctx.body = 'Success';
  } else {
    ctx.status = 401;
    ctx.body = 'Auth info is wrong.';
  }
  await next();
});

function auth(ctx) {
  return ctx.get('Authorization') == config.auth_username + ':' + config.auth_key;
}

module.exports = router;
