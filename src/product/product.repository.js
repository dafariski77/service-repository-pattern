const prisma = require("../db");

const findProducts = async () => {
  return await prisma.product.findMany();
};

const findProductById = async (id) => {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
};

const insertProduct = async (data) => {
  const { name, price, description, image } = data;

  return await prisma.product.create({
    data: {
      name,
      price,
      description,
      image,
    },
  });
};

const updateProduct = async (id, data) => {
  const { name, price, description, image } = data;

  return await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name,
      price,
      description,
      image,
    },
  });
};

const deleteProductById = async (id) => {
  return await prisma.product.delete({
    where: {
      id: id,
    },
  });
};

module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  updateProduct,
  deleteProductById,
};
