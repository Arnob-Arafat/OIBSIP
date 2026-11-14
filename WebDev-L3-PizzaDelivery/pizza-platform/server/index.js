const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PizzaAche API is running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend is working!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const pizzas = require("./data/pizza");

app.get("/api/pizzas", (req, res) => {
  res.json({
    success: true,
    count: pizzas.length,
    data: pizzas,
  });
});