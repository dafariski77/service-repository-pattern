const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");
const productRouter = require("./product/product.controller");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT;

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/", productRouter);

app.listen(PORT, () => console.log(`Express API running on PORT ${PORT}`));
