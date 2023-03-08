const { productDao } = require("../models");
const { catchAsync } = require("../utils/error");

const createProduct = catchAsync(
  async (
    name,
    price,
    gender,
    description,
    image,
    is_new,
    discountRate,
    releaseDate,
    color,
    size,
    quantity,
    category,
    subcategory
  ) => {
    if (price < 0) {
      const error = new Error("INVALID_PRICE");
      error.statusCode = 400;

      throw error;
    }

    if (discountRate < 0 || discountRate > 100) {
      const error = new Error("INVALID_DISCOUNT_RATE");
      error.statusCode = 400;

      throw error;
    }

    if (quantity <= 0) {
      const error = new Error("INVALID_QUANTITY");
      error.statusCode = 400;

      throw error;
    }

    return await productDao.createProduct(
      name,
      price,
      gender,
      description,
      image,
      is_new,
      discountRate,
      releaseDate,
      color,
      size,
      quantity,
      category,
      subcategory
    );
  }
);

module.exports = {
  createProduct,
};
