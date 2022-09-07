const Express = require("express");

const app = Express();
const email = require("./controllers/email");
app.use(Express.json());
app.use(Express.static(`${__dirname}/public`));
app.use("/email", email);
app.listen(4000, () => {
  console.log(`server listening on 4000`);
});
