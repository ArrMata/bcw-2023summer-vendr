import { AboutController } from "./controllers/AboutController.js";
import { CashController } from "./controllers/CashController.js";
import { FoodController } from "./controllers/FoodController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { VendingMachineView } from "./views/VendingMachineView.js";


export const router = [
  {
    path: '',
    controller: [CashController, FoodController],
    view: VendingMachineView,
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]