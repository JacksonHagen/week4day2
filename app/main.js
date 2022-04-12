import { AppController } from "./Controllers/AppController.js";
import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";

class App {
  appController = new AppController()
  housesController = new HousesController()
  carsController = new CarsController()
}

window["app"] = new App();
