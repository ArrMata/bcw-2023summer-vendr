import { AppState } from "../AppState.js"
import { cashService } from "../services/CashService.js"
import { setText } from "../utils/Writer.js"

function _drawCash() {
    setText('cashTotal', `$${AppState.cash.toFixed(2)}`)
}

export class CashController {
    constructor() {
        console.log('Cash Controller Loaded')
        AppState.on('cash', _drawCash)
    }

    addCash() {
        cashService.addCash()
    }

    buyFood(price) {
        cashService.buyFood(price)
    }
}