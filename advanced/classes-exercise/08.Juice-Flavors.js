
function juiceFlavors(input) {
    let res = {};
    let order = new Set();
    input.slice(0).forEach((x) => {
      let [juice, qty] = x.split(" => ");
      qty = Number(qty);
      if (!res.hasOwnProperty(juice)) {
        res[juice] = 0; 
      }
      res[juice] += qty;
      if (res[juice] >= 1000) {
        order.add(juice);
      }
    });
    Array.from(order).forEach((x) => {
      console.log(`${x} => ${Math.trunc(res[x] / 1000)}`);
    });
  }
  
juiceFlavors(
    ['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
    );


