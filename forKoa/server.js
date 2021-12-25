const Koa = require('koa');
const app = new Koa();

 

app.use((ctx, next) => {
    const start = Date.now();
    return next().then(() => {
      if(ctx.url === '/') ctx.body="<h1>WELCOME TO INDEX PAGE</h1>"
      else if(ctx.url === '/about') ctx.body="<h1>WELCOME TO ABOUT PAGE</h1>"
      else if(ctx.url === '/contact') ctx.body="<h1>WELCOME TO CONTACT PAGE</h1>"
      else {
        ctx.status = 404
        ctx.body="<h1>404 NOT FOUND</h1>"
      }
      const ms = Date.now() - start;
      console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });
  });


const port = 3000;

app.listen(port, () => {
    console.log(`SERVER START ON PORT ${port}`);
});