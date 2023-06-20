import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";

class CashService {
    addCash() {
        AppState.cash += 5
    }

    buyFood(price) {
        if (price > AppState.cash) {
            Pop.error('Not enough money!')
        }
        else {
            AppState.cash -= price
            Pop.success('Snack purchased! Enjoy 😄!')
        }
    }
}

export const cashService = new CashService()