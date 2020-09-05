const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) { 
    this._courses.appetizers = appetizers;   
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  }
  get courses() {
    return {
      appetizers: this.appetizers, 
      mains: this.mains, 
      desserts: this.desserts;
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = 
    this._courses[courseName];
    const randomIndex = 
    Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizers =
    this.getRandomDishFromCourse('appetizers');
    const mains = 
    this.getRandomDishFromCourse('mains');
    const desserts = 
    this.getRandomDishFromCourse('desserts');
    const totalPrice = 
    appetizers.price + mains.price + desserts.price;
    return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name} . The total price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Gazpacho', 5.00);
menu.addDishToCourse('appetizers', 'Goats Cheese Salad', 6.50);

menu.addDishToCourse('mains', 'Beef Burger', 8.25);
menu.addDishToCourse('mains', 'Chicken Burger', 7.25);
menu.addDishToCourse('mains', 'Veggie Burger', 6.25);

menu.addDishToCourse('desserts', 'Chocolate Cake', 5.50);
menu.addDishToCourse('desserts', 'Carrot Cake', 5.50);
menu.addDishToCourse('desserts', 'Fruit', 3.00);

const meal = menu.generateRandomMeal();
console.log(meal);

