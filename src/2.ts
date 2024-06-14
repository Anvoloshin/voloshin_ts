// Tags: Union, Enum, Narrowing
// Виды пасты - spaghetti/penne/macaroni


enum PastaTypes {
  first = 'spaghetti',
  second = 'penne',
  third = 'macaroni'
}

class Pizza {
  hasPepperoni;
  hasSauce;
  hasCheese;
  bakeTime = 30;
  constructor(hasPepperoni, hasSauce, hasCheese) {
      this.hasPepperoni = hasPepperoni;
      this.hasSauce = hasSauce;
      this.hasCheese = hasCheese;
  }
  bake() {
      setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}
class Pasta {
  pastaType;
  hasSauce;
  hasCheese;
  cookTime: number = 30;
  constructor(pastaType, hasSauce, hasCheese) {
      this.pastaType = pastaType;
      this.hasCheese = hasCheese;
      this.hasSauce = hasSauce;
  }
  cook() {
      setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}
class Kitchen {
  makeDish(dish) {
      if (dish instanceof Pasta) {
          dish.cook();
      } else if (dish instanceof Pizza) {
          dish.bake();
      }
      throw new Error('Unknown dish');
  }
}
const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spaghetti', true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pizza);