import { Component, OnInit, AfterViewChecked } from '@angular/core';
declare let paypal: any;
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewChecked  {
  addScript: boolean = false;
  paypalLoad: boolean = false;
  finalAmount: number = 1;

  constructor() { }

  ngOnInit() {
  }

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AWPPf-N_vos4YBe4XBQ1i6QzCWVsm58S5BnRFayXfG2oA5bvnQDIj9Fy1aLBdjLoLxsdwKksen9S-g1Y',
      production: 'AWPPf-N_vos4YBe4XBQ1i6QzCWVsm58S5BnRFayXfG2oA5bvnQDIj9Fy1aLBdjLoLxsdwKksen9S-g1Y'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log("ok");
      })
    }
  };

  ngAfterViewChecked(): void {
    if(!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }
}
