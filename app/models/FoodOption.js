export class FoodOption {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.pic = data.img
    }

    get HTMLTemplate() {
        return `
        <div class="food-card">
              <div class="food-img-container">
                <img
                  src="${this.pic}"
                  alt="picture of food/drink">
              </div>
              <div class="food-card-info">
                <h3>${this.name}</h3>
                <button onclick="app.CashController.buyFood(${this.price})">Buy $${this.price.toFixed(2)}</button>
              </div>
            </div>
        `
    }
}