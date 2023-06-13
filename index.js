const app = require("./server/app")

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(" Server runinig...");
});