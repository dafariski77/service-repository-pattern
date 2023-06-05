const {
  findProducts,
  findProductById,
  insertProduct,
  updateProduct,
  deleteProductById,
} = require("./product.repository");

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id);

  if (!product) {
    throw new Error("Product Not Found");
  }

  return product;
};

const createProduct = async (data) => {
  const product = await insertProduct(data);

  return product;
};

const editProduct = async (id, data, validate) => {
  await getProductById(id);

  if (validate)
    if (!(data.name && data.price && data.description && data.image)) {
      throw new Error("Some fields are missing!");
    }

  const product = await updateProduct(id, data);

  return product;
};

const deleteProduct = async (id) => {
  await getProductById(id);

  const product = await deleteProductById(id);

  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  deleteProduct,
};
