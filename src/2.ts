enum PastaTypes {
  First = 'spaghetti',
  Second = 'penne',
  Third = 'macaroni'
}

type Dish = Pizza | Pasta;

interface Recipe {
  hasSauce: boolean;
  hasCheese: boolean;
}

interface Pizza extends Recipe{
  hasPepperoni: boolean;
  bakeTime: number;
  bake(): void;
}

interface Kitchen {
  makeDish(dish: Dish): never;
}

interface Pasta extends Recipe{
  pastaType: PastaTypes;
  cookTime: number;
  cook(): void;
}

class Pizza implements Pizza{
  hasPepperoni: boolean
  hasSauce: boolean;
  hasCheese: boolean;
  bakeTime: number = 30;
  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
    this.hasPepperoni = hasPepperoni;
    this.hasSauce = hasSauce;
    this.hasCheese = hasCheese;
  }
  bake(): void {
    setTimeout(console.log, this.bakeTime, 'Enjoy your pizza!');
  }
}

class Pasta implements Pasta{
  pastaType: PastaTypes
  hasSauce: boolean;
  hasCheese: boolean;
  cookTime: number = 30;
  constructor(pastaType: PastaTypes, hasSauce: boolean, hasCheese: boolean) {
    this.pastaType = pastaType;
    this.hasCheese = hasCheese;
    this.hasSauce = hasSauce;
  }
  cook(): void {
    setTimeout(console.log, this.cookTime, 'Enjoy your pasta!');
  }
}

class Kitchen implements Kitchen {
  makeDish(dish: Dish): never | void {
    if (dish instanceof Pasta) {
      dish.cook();
    } else if (dish instanceof Pizza) {
      dish.bake();
    }
    else throw new Error('Unknown dish');
  }
}
const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta(PastaTypes.Second, true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pizza);