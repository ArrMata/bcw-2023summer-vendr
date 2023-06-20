export const VendingMachineView = /*html*/`
<section class="row sticky-top">
<div class="col-12 vending-machine-header">
  <h1>VENDR 😋</h1>
  <div class='d-flex align-items-center'>
    <h2 id='cashTotal' class='me-3'>$0.00</h2>
    <h2 onclick='app.CashController.addCash()' class="add-cash-btn">Add Cash +</h2>
  </div>
</div>
</section>
<section class="row d-flex flex-column justify-content-between">
<div class="col-12">
  <div class="vending-machine-container">
    <div id="vendingColOne" class="col-4">
    </div>
    <div id="vendingColTwo" class="col-4">
    </div>
    <div id="vendingColThree" class="col-4">
    </div>
  </div>
</div>
</section>
`