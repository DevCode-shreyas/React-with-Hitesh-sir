import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Phone XL",
      price: 799,
      Image:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "iphone 11",
      price: 799,
      Image:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      name: "Phone XL",
      price: 799,
      Image:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      name: "Phone XL",
      price: 799,
      Image:
        "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
