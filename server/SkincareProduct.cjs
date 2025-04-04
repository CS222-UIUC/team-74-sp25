class SkincareProduct {
  constructor(
    name = "a",
    brand = "b",
    type = this.TYPE.active,
    ingredients = "c",
    description = "d",
    price = 0.0
  ) {
    this.name = name;
    this.brand = brand;
    this.type = type; //cleanser, active, moisturizer
    this.ingredients = ingredients;
    this.description = description;
    this.price = price;
  }
}

module.exports = SkincareProduct;
