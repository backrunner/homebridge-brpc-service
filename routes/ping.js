const router = require('koa-router')();

router.get('/ping', async(ctx, next)=>{
    ctx.body = "online";
    await next();
});

module.exports = router;