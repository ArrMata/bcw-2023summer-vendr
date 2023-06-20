import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function _drawFood() {
    let foodCol = 1
    let foodColOneStr = ''
    let foodColTwoStr = ''
    let foodColThreeStr = ''

    AppState.allFood.forEach(foodItem => {
        switch (foodCol) {
            case 1:
                foodColOneStr += foodItem.HTMLTemplate
                foodCol += 1
                break;
            case 2:
                foodColTwoStr += foodItem.HTMLTemplate
                foodCol += 1
                break;
            case 3:
                foodColThreeStr += foodItem.HTMLTemplate
                foodCol = 1
                break;
        }
    })
    if (foodColOneStr)
        setHTML('vendingColOne', foodColOneStr)
    if (foodColTwoStr)
        setHTML('vendingColTwo', foodColTwoStr)
    if (foodColThreeStr)
        setHTML('vendingColThree', foodColThreeStr)
}

export class FoodController {
    constructor() {
        _drawFood()
    }
}