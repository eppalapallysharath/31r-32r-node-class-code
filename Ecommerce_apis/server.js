const http = require("http");
const url = require("url");
const { readFile, writeFile } = require("./products/products.js");
const { v4 } = require("uuid");

http
  .createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const pathName = parsedURL.pathname;
    const method = req.method;
    const path = pathName.split("/");
    console.log("path", path);
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
    }
    // 9/07/2025
    // add products api
    else if (method === "POST" && pathName === "/addProducts") {
      let body = "";
      req.on("data", (d) => {
        body += d;
      });
      req.on("end", () => {
        const data = readFile();
        // console.log(data);

        const inputData = JSON.parse(body);
        inputData.id = v4();
        // console.log(inputData);
        data.push(inputData);
        console.log(data);
        writeFile(data);
        const message = {
          message: "Product added successfully",
          product: inputData,
        };
        res.writeHead(201);
        res.write(JSON.stringify(message));
        res.end();
      });
      // res.write("add products");
      return;
    }
    // update product by id api
    else if (method == "PUT" && pathName == `/updateProduct/${id}`) {
      const data = readFile();
      const checkProduct = data.find((item) => item.id == id);
      if (checkProduct) {
        console.log("exist");
        let body = "";
        req.on("data", (c) => {
          body += c;
        });
        req.on("end", () => {
          body = JSON.parse(body);
          for (value of data) {
            if (value.id == id) {
              console.log("body....", body);
              value.id = id;
              value.name = body.name;
              value.category = body.category;
              value.price = body.price;
            }
          }
          writeFile(data);
          res.writeHead(200);
          res.write("updated successfully");
          res.end();
        });
      } else {
        res.writeHead(404);
        res.write("product not found");
        res.end();
      }
      return;
    }
    // delete by id api
    else if (method == "DELETE" && pathName == `/deleteProduct/${id}`) {
      const data = readFile();
      const check = data.some((item) => item.id == id);
      console.log("check id ...", check);
      if (check) {
        const newData = data.filter((item) => item.id != id);
        writeFile(newData);
        res.writeHead(204);
        res.write("deleted successfully");
        res.end();
      } else {
        res.writeHead(404);
        res.write("Product Not Found");
        res.end();
      }
      // const newData = data.filter((item) => item.id != id);
      // console.log(newData);
      // res.write("deleted");
      // res.end();
      return;
    }

    res.write("im server");
    res.end();
  })
  .listen(3000, () => console.log("server started 3000"));
