const express = require("express");

const { productController } = require("../controllers");

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/list", productController.listProduct);
router.get("/:productId", productController.getProductDetailById);

module.exports = router;
