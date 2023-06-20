import { FoodOption } from "./models/FoodOption.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''
  cash = 0

  /** @type {import('./models/FoodOption.js').FoodOption[]} */
  allFood = [
    new FoodOption({ name: 'Orange Soda', price: 5.00, img: 'https://images.unsplash.com/photo-1566846128021-b940b0eec910?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }),
    new FoodOption({ name: 'Chicken Burrito', price: 9.50, img: 'https://images.unsplash.com/photo-1574365361850-8e8aec561723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' }),
    new FoodOption({ name: 'Canned Coffee', price: 3.25, img: 'https://plus.unsplash.com/premium_photo-1685966754036-b4183319ea0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' }),
    new FoodOption({ name: 'Ramen Bowl', price: 15.75, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmFtZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new FoodOption({ name: 'Bag of Chips', price: 2.75, img: 'https://images.unsplash.com/photo-1641693148759-843d17ceac24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }),
    new FoodOption({ name: 'Lollipop', price: 1.75, img: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' }),
    new FoodOption({ name: 'Fries', price: 4.75, img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }),
    new FoodOption({ name: 'Energy Drink', price: 4.25, img: 'https://images.unsplash.com/photo-1622543925917-763c34d1a86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5lcmd5JTIwZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new FoodOption({ name: 'Bottled Water', price: 3.25, img: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
  ]

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
