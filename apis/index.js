const http = require("http");
const { json } = require("stream/consumers");
const url = require("url");

http
  .createServer((req, res) => {
    console.log("url:", req.url, "method:", req.method);
    const parsedUrl = url.parse(req.url);
    if (parsedUrl.pathname === "/products" && req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write("product info");
      res.end();
    } else if (req.method === "POST" && parsedUrl.pathname === "/addProduct") {
      res.writeHead(201, { "content-type": "application/json" });
      res.write("product added");
      res.end();
    } else if (
      req.method === "PUT" &&
      parsedUrl.pathname === "/updateProduct"
    ) {
      res.writeHead(200, { "content-type": "application/json" });
      res.write("product updated");
      res.end();
    } else if (req.method === "PATCH" && parsedUrl.pathname === "/updateCart") {
      res.writeHead(200, { "content-type": "application/json" });
      res.write("cart updated");
      res.end();
    } else if (
      req.method === "GET" &&
      parsedUrl.pathname === "/api/allproducts"
    ) {
      console.log("api", parsedUrl.url);
      const products = [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
          id: 1,
          title: "laptop lenovo",
          price: 200.95,
          description: "every day laptop",
          category: "electronics",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
      ];
      res.write(JSON.stringify(products));
      return res.end();
    } else if (
      req.method === "DELETE" &&
      parsedUrl.pathname === "/removeCart"
    ) {
      console.log("remove");
      res.writeHead(204, { "content-type": "application/json" });
      res.write("deleted");
      res.end();
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.write("deleted successfully");
      res.end();
    }
  })
  .listen(3001, () => {
    console.log("server running on port 3001");
  });

// const urls = "http://localhost:3001/products?name=sharath&price=200";
// console.log(url.parse(urls));
