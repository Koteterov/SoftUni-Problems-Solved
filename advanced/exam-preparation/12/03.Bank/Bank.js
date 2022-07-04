class Bank {
  #bankName;
  constructor(bankName) {
    this.#bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    let foundCustomer = this.allCustomers.find((c) => {
      return (
        c.firstName == customer.firstName &&
        c.lastName == customer.lastName &&
        c.personalId == customer.personalId
      );
    });

    if (foundCustomer) {
      throw Error(
        `${foundCustomer.firstName} ${foundCustomer.lastName} is already our customer!`
      );
    }
    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(personalId, amount) {
    let personalIdFound = this.allCustomers.find(
      (c) => c.personalId == personalId
    );

    if (!personalIdFound) {
      throw Error("We have no customer with this ID!");
    }

    let transInfo = `${personalIdFound.firstName} ${personalIdFound.lastName} made deposit of ${amount}$!`;

    if (!personalIdFound.totalMoney) {
      personalIdFound.totalMoney = amount;
      personalIdFound.transactions = [];
    } else {
      personalIdFound.totalMoney += amount;
    }
    personalIdFound.transactions.push(
      `${personalIdFound.transactions.length + 1}. ${transInfo}`
    );

    return `${personalIdFound.totalMoney}$`;
  }

  withdrawMoney(personalId, amount) {
    let personalIdFound = this.allCustomers.find(
      (c) => c.personalId == personalId
    );
    if (!personalIdFound) {
      throw Error("We have no customer with this ID!");
    }

    if (personalIdFound.totalMoney < amount) {
      throw Error(
        `${personalIdFound.firstName} ${personalIdFound.lastName} does not have enough money to withdraw that amount!`
      );
    }
    personalIdFound.totalMoney -= amount;

    personalIdFound.transactions.push(
      `${personalIdFound.transactions.length + 1}. ${
        personalIdFound.firstName
      } ${personalIdFound.lastName} withdrew ${amount}$!`
    );

    return `${personalIdFound.totalMoney}$`;
  }

  customerInfo(personalId) {
    let personalIdFound = this.allCustomers.find(
      (c) => c.personalId == personalId
    );
    if (!personalIdFound) {
      throw Error("We have no customer with this ID!");
    }

    let result = [
      `Bank name: ${this.#bankName}`,
      `Customer name: ${personalIdFound.firstName} ${personalIdFound.lastName}`,
      `Customer ID: ${personalIdFound.personalId}`,
      `Total Money: ${personalIdFound.totalMoney}$`,
      `Transactions:`,
    ];
    personalIdFound.transactions.reverse().forEach((t) => {
      result.push(t);
    });
    return result.join("\n");
  }
}

let bank = new Bank("SoftUni Bank");

console.log(
  bank.newCustomer({
    firstName: "Svetlin",
    lastName: "Nakov",
    personalId: 6233267,
  })
);
console.log(
  bank.newCustomer({
    firstName: "Mihaela",
    lastName: "Mileva",
    personalId: 4151596,
  })
);
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
bank.depositMoney(4151596, 55);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

