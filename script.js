const menu = {
  //This property will ultimately contain a mapping between each course and the dishes available to order in that course
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    //Create getter and setter methods for the appetizers, mains, and desserts properties.
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },

  //create a getter method for the _courses property.
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  //create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };

    this._courses[courseName].push(dish);
  },

  //function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  //function that will automatically generate a three-course meal for us.
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name} and ${
      dessert.name
    }. The price is GHS${totalPrice.toFixed(2)}.`;
  },
};

//adde dishes to appetizers, mains and desserts
menu.addDishToCourse("appetizers", "Vegetable Salad", 5.25);
menu.addDishToCourse("appetizers", "Soup & Consommé", 10.09);
menu.addDishToCourse("appetizers", "Cocktails", 40.0);

menu.addDishToCourse("mains", "Rice", 7.5);
menu.addDishToCourse("mains", "Beans", 10.02);
menu.addDishToCourse("mains", "Yam", 8.8);

menu.addDishToCourse("desserts", "Orange", 2.0);
menu.addDishToCourse("desserts", "Banana", 10.0);
menu.addDishToCourse("desserts", "Pear", 3.3);

//generate a meal
let meal = menu.generateRandomMeal();

//printe result
console.log(meal);
