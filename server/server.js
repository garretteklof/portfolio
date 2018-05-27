const path = require("path");
const express = require("express");
const expressStaticGzip = require("express-static-gzip");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(
  expressStaticGzip(publicPath, {
    enableBrotli: true,
    indexFromEmptyFile: false
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}!`);
});
