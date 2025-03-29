class SkincareProduct {
  TYPE = {
    cleanser: "cleanser",
    active: "active",
    moisturizer: "moisturizer",
  };

  constructor(name, brand, type, ingredients, description, price) {
    this.name = name;
    this.brand = brand;
    this.type = type; // Type of product (cleanser, active, moisturizer)
    this.ingredients = ingredients;
    this.description = description;
    this.price = price;
  }

  // Method to display product details
  getProductDetails() {
    return `Product: ${this.name}\nBrand: ${this.brand}\nType: ${
      this.type
    }\nActive Ingredients: ${this.ingredients.join(
      ", "
    )}\nPrice: $${this.price.toFixed(2)}`;
  }
}

module.exports = SkincareProduct;
