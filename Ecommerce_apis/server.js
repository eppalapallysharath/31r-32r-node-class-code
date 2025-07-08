const http = require("http");
const url = require("url");
const { readFile } = require("./products/products.js");

http
  .createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const pathName = parsedURL.pathname;
    const method = req.method;
    const path = pathName.split("/");
    const id = path[2];
    // console.log(id);
    // console.log(pathName.split("/")[2]);

    // get all products
    if (method === "GET" && pathName === "/products") {
      const data = readFile();
      res.writeHead(200);
      res.write(JSON.stringify(data));
      return res.end();
    }
    // get products by id
    else if (method === "GET" && pathName === `/products/${id}`) {
      const data = readFile();

      const product = data.find((item) => item.id == id);
      if (product) {
        res.writeHead(200);
        res.write(JSON.stringify(product));
        return res.end();
      } else {
        res.writeHead(404);
        res.write("product not found");
        return res.end();
      }
    } else if (method == "POST" && pathName == "/addProducts") {
      let body = "";
      //   console.log("pre data", data);
      req.on("data", (chunk) => (body += chunk));
      //   res.writeHead(200);
      req.on("end", () => {
        // console.log("data", data);
        return res.end();
        res.write(data);
      });
      //   console.log("post data", data);
    }

    res.write("im server");
    res.end();
  })
  .listen(3000, () => console.log("server started"));
