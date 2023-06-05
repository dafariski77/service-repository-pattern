const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
} = require("./product.service");

const router = express.Router();

router.get("/api/products", async (req, res) => {
  try {
    const products = await getAllProducts();

    return res
      .json({
        data: products,
      })
      .status(200);
  } catch (err) {
    return res
      .json({
        error: err.message,
      })
      .status(400);
  }
});

router.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(parseInt(id));

    return res
      .json({
        data: product,
      })
      .status(200);
  } catch (err) {
    return res
      .json({
        error: err.message,
      })
      .status(400);
  }
});

router.post("/api/product", async (req, res) => {
  try {
    const data = req.body;

    const product = await createProduct(data);

    return res
      .json({
        data: product,
      })
      .status(200);
  } catch (err) {
    return res
      .json({
        error: err.message,
      })
      .status(400);
  }
});

router.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const product = await editProduct(parseInt(id), data, true);

    return res
      .json({
        data: product,
      })
      .status(201);
  } catch (err) {
    return res
      .json({
        error: err.message,
      })
      .status(400);
  }
});

router.patch("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const product = await editProduct(parseInt(id), data);

    return res
      .json({
        data: product,
      })
      .status(201);
  } catch (err) {
    return res
      .json({
        error: err.message,
      })
      .status(400);
  }
});

router.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await deletedProduct(parseInt(id));

    return res
      .json({
        message: "Product delete",
        data: product,
      })
      .status(200);
  } catch (err) {
    return res
      .json({
        error: err.message,
      })
      .status(400);
  }
});

module.exports = router;
