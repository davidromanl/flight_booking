const app = require("./server/app")

const port = process.env.PORT || 80;

app.listen(port, () => {
  console.log(" Server runinig...");
});